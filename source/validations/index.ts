import { Schema } from "../models/schemas";
import { ForcedArray, ValidationFunction } from "../models/general";

export function compile(schema: Schema | ForcedArray<Schema>): ValidationFunction {
    return (payload: any) => true;
}

export function compileEqual<Type>(expect: Type | ForcedArray<Type>): ValidationFunction {
    const values = Array.isArray(expect) ? expect : [expect];
    return (payload: any) => {
        return values.includes(payload) || ["equal"];
    };
}

export function compileInstance(expect: CallableFunction): ValidationFunction {
    return (payload: any) => {
        return payload instanceof expect || ["instance"];
    };
}

export function compileInteger(): ValidationFunction {
    return (payload: any) => {
        return new String(payload).includes(".") || ["integer"];
    };
}

export function compileKeyValue(expect: Record<string, Schema | ForcedArray<Schema>>) {
    const validations: Record<string, ValidationFunction> = {};
    for (const [key, schema] of Object.entries(expect)) {
        validations[key] = compile(schema);
    }
    return (payload: any) => {
        const errors = [];
        for (const [key, validate] of Object.entries(validations)) {
            const result = validate(payload[key]);
            if (result !== true) {
                errors.push(...result.map((message) => `${key}.${message}`));
            }
        }
        return errors.length === 0 || errors;
    };
}

export function compileMax(expect: number): ValidationFunction {
    return (payload: any) => {
        return expect >= payload || ["max"];
    };
}

export function compileMin(expect: number): ValidationFunction {
    return (payload: any) => {
        return expect <= payload || ["min"];
    };
}

export function compileNotEqual<Type>(expect: Type | ForcedArray<Type>): ValidationFunction {
    const values = Array.isArray(expect) ? expect : [expect];
    return (payload: any) => {
        return !values.includes(payload) || ["not-equal"];
    };
}

export function compileOrdered(expect: ForcedArray<Schema>): ValidationFunction {
    const validations = expect.map(compile);
    return (payload: any) => {
        const errors: string[] = [];
        const length = validations.length;
        if (length !== payload.length) return ["ordered.length"];
        for (let i = 0; i < length; i++) {
            const results = validations[i](payload[i]);
            if (results !== true) {
                errors.push(...results.map((result) => `ordered[${i}].${result}`));
            }
        }
        return errors.length === 0 || errors;
    };
}

export function compilePattern(expect: string | RegExp): ValidationFunction {
    const pattern = typeof expect === "string" ? new RegExp(expect) : expect;
    return (payload: any) => pattern.test(payload) || ["pattern"];
}
