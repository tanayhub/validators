import validate, { ValidationError } from ".";
import ValidationDefinition from "../models";
import ObjectDefinition from "../models/object";

function validateChildren(
    children: object,
    schemas: Record<string, ValidationDefinition>,
    prefix: string
): ValidationError[] {
    return Object.entries(children)
        .map(([key, value]) => {
            const schema = schemas[key];
            const nextPrefix = `${prefix}.${key}`;
            return schema
                ? validate(value, schemas[key], nextPrefix)
                : [
                      {
                          path: nextPrefix,
                          message: "unknown property",
                          expected: `one of ${Object.keys(schemas).map((key) => `'${key}'`)}`,
                          actual: `${key}`,
                      },
                  ];
        })
        .flat();
}

export default function validateObject(
    payload: any,
    schema: ObjectDefinition,
    prefix: string
): ValidationError[] {
    if (Array.isArray(payload) || typeof payload !== "object") {
        return [
            {
                path: prefix,
                message: "type error",
                expected: "object",
                actual: typeof payload === "object" ? "array" : typeof payload,
            },
        ];
    }
    return validateChildren(payload, schema.children, prefix);
}
