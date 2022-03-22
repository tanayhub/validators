import ValidationDefinition from "./models";

export default function validate(payload: any, schema: ValidationDefinition) {}

validate(null, {
    type: "object",
    children: {
        name: { type: "object", children: {} },
    },
});
