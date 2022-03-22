import { ValidationError } from ".";
import NumberDefinition from "../models/number";

export default function validateBoolean(
    payload: any,
    schema: NumberDefinition,
    prefix: string
): ValidationError[] {
    if (!(typeof payload === "number" || payload instanceof Number)) {
        return [
            {
                path: prefix,
                message: "type error",
                expected: "number",
                actual: typeof payload,
            },
        ];
    } else if (schema.constraint === "equality") {
        if (schema.value !== payload) {
            return [
                {
                    path: prefix,
                    message: "comparison error",
                    expected: `equal to '${schema.value}'`,
                    actual: `${payload}`,
                },
            ];
        }
    } else if (schema.constraint === "inequality") {
        if (schema.value === payload) {
            return [
                {
                    path: prefix,
                    message: "comparison error",
                    expected: `not equal to '${schema.value}'`,
                    actual: `${payload}`,
                },
            ];
        }
    } else if (schema.constraint === "range") {
        const errors: ValidationError[] = [];
        if (schema.range.min !== undefined && schema.range.min > payload) {
            errors.push({
                path: prefix,
                message: "comparison error",
                expected: `greater than '${schema.range.min}'`,
                actual: `${payload}`,
            });
        }
        if (schema.range.max !== undefined && schema.range.max < payload) {
            errors.push({
                path: prefix,
                message: "comparison error",
                expected: `less than '${schema.range.max}'`,
                actual: `${payload}`,
            });
        }
        if (errors.length > 0) {
            return errors;
        }
    }
    return [];
}
