import { ValidationFunction } from ".";
import NullDefinition from "../definitions/null";

export default function compileNull(definition: NullDefinition): ValidationFunction {
    return (payload: any): string[] => {
        if (payload !== null) {
            return [`"${typeof payload}" isn't "null"`];
        }
        return [];
    };
}
