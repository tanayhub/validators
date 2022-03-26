import { ValidationFunction } from ".";
import AnyDefinition from "../definitions/any";

export default function compileAny(definition: AnyDefinition): ValidationFunction {
    return (payload: any): string[] => {
        return [];
    };
}
