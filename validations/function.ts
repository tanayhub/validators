import { ValidationFunction } from ".";
import FunctionDefinition from "../definitions/function";

export default function compileFunction(definition: FunctionDefinition): ValidationFunction {
    return (payload: any): string[] => {
        if (typeof payload !== "function") {
            return [`"${typeof payload}" isn't "function"`];
        }
        return [];
    };
}
