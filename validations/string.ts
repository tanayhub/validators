import { ValidationFunction } from ".";
import StringDefinition from "../definitions/string";

function compileEnum(values: string[]): ValidationFunction {
    const set = new Set(values);
    const possible = values.map((value) => `"${value}"`).join(",");
    return (payload: any) => {
        if (!set.has(payload)) {
            return [`"${payload}" isn't in ${possible}`];
        }
        return [];
    };
}

function compileLengthMin(minLength: number): ValidationFunction {
    return (payload: any[]) => {
        if (minLength > payload.length) {
            return [`"${payload.length}" isn't greater than "${minLength}"`];
        }
        return [];
    };
}

function compileLengthMax(maxLength: number): ValidationFunction {
    return (payload: any[]) => {
        if (maxLength < payload.length) {
            return [`"${payload.length}" isn't less than "${maxLength}"`];
        }
        return [];
    };
}

function compileLengthEquality(length: number): ValidationFunction {
    return (payload: any[]) => {
        if (length !== payload.length) {
            return [`"${payload.length}" isn't "${length}"`];
        }
        return [];
    };
}

function compileLengthInequality(length: number): ValidationFunction {
    return (payload: any[]) => {
        if (length === payload.length) {
            return [`"${payload.length}" shouldn't be "${length}"`];
        }
        return [];
    };
}

function compileEquality(expected: string): ValidationFunction {
    return (payload: any) => {
        if (payload !== expected) {
            return [`"${payload}" isn't "${expected}"`];
        }
        return [];
    };
}

function compileInequality(expected: string): ValidationFunction {
    return (payload: any) => {
        if (payload === expected) {
            return [`"${payload}" shouldn't be "${expected}"`];
        }
        return [];
    };
}

function compileRegex(expected: RegExp): ValidationFunction {
    return (payload: any) => {
        if (!expected.test(payload)) {
            return [`"${payload}" should match pattern "${expected}"`];
        }
        return [];
    };
}

export default function compileString(definition: StringDefinition): ValidationFunction {
    const validations: ValidationFunction[] = [];

    if (definition.mode === "min-length") {
        validations.push(compileLengthMin(definition.min));
    } else if (definition.mode === "max-length") {
        validations.push(compileLengthMax(definition.max));
    } else if (definition.mode === "length-between") {
        validations.push(compileLengthMin(definition.min));
        validations.push(compileLengthMax(definition.max));
    } else if (definition.mode === "length-equality") {
        validations.push(compileLengthEquality(definition.length));
    } else if (definition.mode === "length-inequality") {
        validations.push(compileLengthInequality(definition.length));
    } else if (definition.mode === "enum") {
        validations.push(compileEnum(definition.values));
    } else if (definition.mode === "equality") {
        validations.push(compileEquality(definition.value));
    } else if (definition.mode === "inequality") {
        validations.push(compileInequality(definition.value));
    } else if (definition.mode === "regex") {
        validations.push(compileRegex(definition.regex));
    } else if (definition.mode === "regex|min-length") {
        validations.push(compileRegex(definition.regex));
        validations.push(compileLengthMin(definition.min));
    } else if (definition.mode === "regex|max-length") {
        validations.push(compileRegex(definition.regex));
        validations.push(compileLengthMax(definition.max));
    } else if (definition.mode === "regex|length-between") {
        validations.push(compileRegex(definition.regex));
        validations.push(compileLengthMin(definition.min));
        validations.push(compileLengthMax(definition.max));
    } else if (definition.mode === "regex|length-equality") {
        validations.push(compileRegex(definition.regex));
        validations.push(compileLengthEquality(definition.length));
    } else if (definition.mode === "regex|length-inequality") {
        validations.push(compileRegex(definition.regex));
        validations.push(compileLengthInequality(definition.length));
    }

    return (payload: any): string[] => {
        payload = payload instanceof String ? payload.valueOf() : payload;
        if (typeof payload !== "string") {
            return [`"${typeof payload}" isn't "string"`];
        }
        return validations.map((validation) => validation(payload)).flat();
    };
}
