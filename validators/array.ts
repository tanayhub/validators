import validate, { ValidationError } from ".";
import ValidationDefinition from "../models";
import ArrayDefinition from "../models/array";

function validateItems(items: any, schema: ValidationDefinition, prefix: string) {
    return Array.isArray(items)
        ? items.map((item, index) => validate(item, schema, `${prefix}.element(${index})`)).flat()
        : [];
}

export default function validateArray(
    payload: any,
    schema: ArrayDefinition,
    prefix: string
): ValidationError[] {
    if (!Array.isArray(payload)) {
        return [
            {
                path: prefix,
                message: "type error",
                expected: "array",
                actual: typeof payload,
            },
        ];
    } else if (schema.constraint === "length-equality") {
        if (payload.length !== schema.length) {
            return [
                {
                    path: prefix,
                    message: "length error",
                    expected: `equal to '${schema.length}'`,
                    actual: `${payload.length}`,
                },
                ...validateItems(payload, schema.items, prefix),
            ];
        }
    } else if (schema.constraint === "length-inequality") {
        if (payload.length === schema.length) {
            return [
                {
                    path: prefix,
                    message: "length error",
                    expected: `not equal to '${schema.length}'`,
                    actual: `${payload.length}`,
                },
                ...validateItems(payload, schema.items, prefix),
            ];
        }
    } else if (schema.constraint === "length-range") {
        const errors: ValidationError[] = [...validateItems(payload, schema.items, prefix)];
        if (schema.lengthRange.min !== undefined && schema.lengthRange.min > payload.length) {
            errors.push({
                path: prefix,
                message: "length error",
                expected: `greater than '${schema.lengthRange.min}'`,
                actual: `${payload.length}`,
            });
        }
        if (schema.lengthRange.max !== undefined && schema.lengthRange.max < payload.length) {
            errors.push({
                path: prefix,
                message: "length error",
                expected: `less than '${schema.lengthRange.max}'`,
                actual: `${payload.length}`,
            });
        }
        if (errors.length > 0) {
            return errors;
        }
    }
    return [...validateItems(payload, schema.items, prefix)];
}
