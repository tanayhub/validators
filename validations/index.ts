import Definition from "../definitions";

export default function validate(payload: any, definition: Definition) {
    if (definition.type === "any") {
    } else if (definition.type === "array") {
    } else if (definition.type === "boolean") {
    } else if (definition.type === "function") {
    } else if (definition.type === "hybrid") {
    } else if (definition.type === "null") {
    } else if (definition.type === "number") {
    } else if (definition.type === "object") {
    } else if (definition.type === "string") {
    } else if (definition.type === "undefined") {
    } else {
    }
}
