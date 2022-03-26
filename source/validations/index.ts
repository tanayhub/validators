import Definition from "../definitions";
import compileAny from "./any";
import compileArray from "./array";
import compileBoolean from "./boolean";
import compileFunction from "./function";
import compileHybrid from "./hybrid";
import compileNull from "./null";
import compileNumber from "./number";
import compileObject from "./object";
import compileString from "./string";
import compileUndefined from "./undefined";

export type ValidationFunction = (payload: any) => string[];

export default function compile(definition: Definition): ValidationFunction {
    if (definition.type === "any") {
        return compileAny(definition);
    } else if (definition.type === "array") {
        return compileArray(definition);
    } else if (definition.type === "boolean") {
        return compileBoolean(definition);
    } else if (definition.type === "function") {
        return compileFunction(definition);
    } else if (definition.type === "hybrid") {
        return compileHybrid(definition);
    } else if (definition.type === "null") {
        return compileNull(definition);
    } else if (definition.type === "number") {
        return compileNumber(definition);
    } else if (definition.type === "object") {
        return compileObject(definition);
    } else if (definition.type === "string") {
        return compileString(definition);
    } else if (definition.type === "undefined") {
        return compileUndefined(definition);
    }
    return (payload: any) => [];
}
