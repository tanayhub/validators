import ValidationDefinition from "../models";
import validateArray from "./array";
import validateBoolean from "./boolean";
import validateNumber from "./number";
import validateObject from "./object";
import validateString from "./string";

export interface ValidationError {
    path: string;
    actual: string;
    expected: string;
    message: string;
}

export default function validate(
    payload: any,
    schema: ValidationDefinition,
    prefix = ""
): ValidationError[] {
    switch (schema.type) {
        case "boolean": {
            return validateBoolean(payload, schema, prefix);
        }
        case "number": {
            return validateNumber(payload, schema, prefix);
        }
        case "string": {
            return validateString(payload, schema, prefix);
        }
        case "array": {
            return validateArray(payload, schema, prefix);
        }
        case "object": {
            return validateObject(payload, schema, prefix);
        }
        default: {
            return [];
        }
    }
}
