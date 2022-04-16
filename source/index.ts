import { Validator } from "./validations";

console.log(new Validator({ type: "array", schemas: [{ type: "string" }, { type: "number" }] }).validate([true, 1]));
