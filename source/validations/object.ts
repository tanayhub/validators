import compile, { ValidationFunction } from ".";
import Definition from "../definitions";
import ObjectDefinition from "../definitions/object";

function compileProperties(properties: Record<string, Definition>): ValidationFunction {
    const propertyValidations: Record<string, ValidationFunction> = {};

    for (const [key, value] of Object.entries(properties)) {
        propertyValidations[key] = compile(value);
    }
    return (payload: any) => {
        const errors: string[] = [];
        for (const [key, validate] of Object.entries(propertyValidations)) {
            errors.push(...validate(payload[key]));
        }
        return errors;
    };
}

function compileInstanceOf(type: CallableFunction): ValidationFunction {
    return (payload: any) => {
        return payload instanceof type ? [] : [`"${payload}" isn't instance of "${type}"`];
    };
}

export default function compileObject(definition: ObjectDefinition): ValidationFunction {
    const validations: ValidationFunction[] = [compileProperties(definition.properties)];

    if (definition.instanceOf !== undefined) {
        validations.push(compileInstanceOf(definition.instanceOf));
    }

    return (payload: any): string[] => {
        if (Array.isArray(payload)) {
            return [`"array" isn't "object"`];
        }
        if (typeof payload !== "object") {
            return [`"${typeof payload}" isn't "object"`];
        }
        return validations.map((validation) => validation(payload)).flat();
    };
}
