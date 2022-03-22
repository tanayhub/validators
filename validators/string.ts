import { ValidationError } from ".";
import StringDefinition from "../models/string";

export default function validateString(
    payload: any,
    schema: StringDefinition,
    prefix: string
): ValidationError[] {
    if (!(typeof payload === "string" || payload instanceof String)) {
        return [
            {
                path: prefix,
                message: "type error",
                expected: "string",
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
    } else if (schema.constraint === "enum") {
        const string: string = typeof payload === "string" ? payload : payload.valueOf();
        if (!schema.values.includes(string)) {
            return [
                {
                    path: prefix,
                    message: "enum error",
                    expected: `should be one of '${schema.values.map((value) => `'${value}'`)}'`,
                    actual: `${payload}`,
                },
            ];
        }
    } else if (schema.constraint === "length-equality") {
        if (payload.length !== schema.length) {
            return [
                {
                    path: prefix,
                    message: "length error",
                    expected: `equal to '${schema.length}'`,
                    actual: `${payload.length}`,
                },
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
            ];
        }
    } else if (schema.constraint === "length-range") {
        const errors: ValidationError[] = [];
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
    } else if (schema.constraint === "regex") {
        const string: string = typeof payload === "string" ? payload : payload.valueOf();
        if (!schema.regex.test(string)) {
            return [
                {
                    path: prefix,
                    message: "pattern error",
                    expected: `satisfies regex '${schema.regex}'`,
                    actual: `${payload}`,
                },
            ];
        }
    } else if (schema.constraint === "regex|length-equality") {
        const errors: ValidationError[] = [];
        const string: string = typeof payload === "string" ? payload : payload.valueOf();
        if (!schema.regex.test(string)) {
            errors.push({
                path: prefix,
                message: "pattern error",
                expected: `satisfies regex '${schema.regex}'`,
                actual: `${payload}`,
            });
        }
        if (payload.length !== schema.length) {
            errors.push({
                path: prefix,
                message: "length error",
                expected: `equal to '${schema.length}'`,
                actual: `${payload.length}`,
            });
        }
        if (errors.length > 0) {
            return errors;
        }
    } else if (schema.constraint === "regex|length-inequality") {
        const errors: ValidationError[] = [];
        const string: string = typeof payload === "string" ? payload : payload.valueOf();
        if (!schema.regex.test(string)) {
            errors.push({
                path: prefix,
                message: "pattern error",
                expected: `satisfies regex '${schema.regex}'`,
                actual: `${payload}`,
            });
        }
        if (payload.length === schema.length) {
            errors.push({
                path: prefix,
                message: "length error",
                expected: `not equal to '${schema.length}'`,
                actual: `${payload.length}`,
            });
        }
        if (errors.length > 0) {
            return errors;
        }
    } else if (schema.constraint === "regex|length-range") {
        const errors: ValidationError[] = [];
        const string: string = typeof payload === "string" ? payload : payload.valueOf();
        if (!schema.regex.test(string)) {
            errors.push({
                path: prefix,
                message: "pattern error",
                expected: `satisfies regex '${schema.regex}'`,
                actual: `${payload}`,
            });
        }
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
    return [];
}
