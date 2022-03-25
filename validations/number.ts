import { ValidationFunction } from ".";
import NumberDefinition from "../definitions/number";

function compileEnum(values: number[]): ValidationFunction {
    const set = new Set(values);
    const possible = values.map((value) => `"${value}"`).join(",");
    return (payload: any) => {
        if (!set.has(payload)) {
            return [`"${payload}" isn't in ${possible}`];
        }
        return [];
    };
}

function compileMin(minValue: number): ValidationFunction {
    return (payload: any) => {
        if (minValue > payload) {
            return [`"${payload}" isn't greater than "${minValue}"`];
        }
        return [];
    };
}

function compileMax(maxValue: number): ValidationFunction {
    return (payload: any) => {
        if (maxValue < payload) {
            return [`"${payload}" isn't less than "${maxValue}"`];
        }
        return [];
    };
}

function compileInteger(): ValidationFunction {
    return (payload: any) => {
        if (new String(payload).valueOf().indexOf(".") !== -1) {
            return [`"${payload}" isn't "integer"`];
        }
        return [];
    };
}

function compileEquality(expected: number): ValidationFunction {
    return (payload: any) => {
        if (payload !== expected) {
            return [`"${payload}" isn't "${expected}"`];
        }
        return [];
    };
}

function compileInequality(expected: number): ValidationFunction {
    return (payload: any) => {
        if (payload === expected) {
            return [`"${payload}" shouldn't be "${expected}"`];
        }
        return [];
    };
}

export default function compileNumber(definition: NumberDefinition): ValidationFunction {
    const validations: ValidationFunction[] = [];

    if (definition.mode === "enum") {
        validations.push(compileEnum(definition.values));
    } else if (definition.mode === "integer") {
        validations.push(compileInteger());
    } else if (definition.mode === "min") {
        validations.push(compileMin(definition.min));
    } else if (definition.mode === "integer|min") {
        validations.push(compileInteger());
        validations.push(compileMin(definition.min));
    } else if (definition.mode === "max") {
        validations.push(compileMax(definition.max));
    } else if (definition.mode === "integer|max") {
        validations.push(compileInteger());
        validations.push(compileMax(definition.max));
    } else if (definition.mode === "between") {
        validations.push(compileMin(definition.min));
        validations.push(compileMax(definition.max));
    } else if (definition.mode === "integer|between") {
        validations.push(compileInteger());
        validations.push(compileMin(definition.min));
        validations.push(compileMax(definition.max));
    } else if (definition.mode === "equality") {
        validations.push(compileEquality(definition.value));
    } else if (definition.mode === "inequality") {
        validations.push(compileInequality(definition.value));
    }

    return (payload: any): string[] => {
        payload = payload instanceof Number ? payload.valueOf() : payload;
        if (typeof payload !== "number") {
            return [`"${typeof payload}" isn't "number"`];
        }
        return validations.map((validation) => validation(payload)).flat();
    };
}
