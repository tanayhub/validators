import { ValidationFunction } from ".";
import UndefinedDefinition from "../definitions/undefined";

export default function compileUndefined(definition: UndefinedDefinition): ValidationFunction {
    return (payload: any): string[] => {
        if (payload !== undefined) {
            return [`"${typeof payload}" isn't "undefined"`];
        }
        return [];
    };
}
