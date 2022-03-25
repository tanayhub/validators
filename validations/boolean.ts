import { ValidationFunction } from ".";
import BooleanDefinition from "../definitions/boolean";

function compileEquality(expected: boolean): ValidationFunction {
    return (payload: any) => {
        if (payload !== expected) {
            return [`"${payload}" isn't "${expected}"`];
        }
        return [];
    };
}

function compileInequality(expected: boolean): ValidationFunction {
    return (payload: any) => {
        if (payload === expected) {
            return [`"${payload}" shouldn't be "${expected}"`];
        }
        return [];
    };
}

export default function compileBoolean(definition: BooleanDefinition): ValidationFunction {
    const validations: ValidationFunction[] = [];

    if (definition.mode === "equality") {
        validations.push(compileEquality(definition.value));
    } else if (definition.mode === "inequality") {
        validations.push(compileInequality(definition.value));
    }

    return (payload: any): string[] => {
        payload = payload instanceof Boolean ? payload.valueOf() : payload;
        if (typeof payload !== "boolean") {
            return [`"${typeof payload}" isn't "boolean"`];
        }
        return validations.map((validation) => validation(payload)).flat();
    };
}
