import compile, { ValidationFunction } from ".";
import ArrayDefinition from "../definitions/array";

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

export default function compileArray(definition: ArrayDefinition): ValidationFunction {
    const validations: ValidationFunction[] = [];
    const elementValidation: ValidationFunction = compile(definition.eachElement);

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
        validations.push(compileLengthEquality(definition.length));
    }

    return (payload: any): string[] => {
        if (!Array.isArray(payload)) {
            return [`"${typeof payload}" isn't "array"`];
        }
        return validations
            .map((validation) => validation(payload))
            .concat(payload.map(elementValidation))
            .flat();
    };
}
