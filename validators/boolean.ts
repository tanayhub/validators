import { ValidationError } from ".";
import BooleanDefinition from "../models/boolean";

export default function validateBoolean(
    payload: any,
    schema: BooleanDefinition,
    prefix: string
): ValidationError[] {
    if (!(typeof payload === "boolean" || payload instanceof Boolean)) {
        return [
            {
                path: prefix,
                message: "type error",
                expected: "boolean",
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
    }
    return [];
}
