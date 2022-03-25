import compile, { ValidationFunction } from ".";
import HybridDefinition from "../definitions/hybrid";

export default function compileHybrid(definition: HybridDefinition): ValidationFunction {
    const validations: ValidationFunction[] = definition.types.map(compile);
    return (payload: any): string[] => {
        const errors: string[] = [];
        for (const validation of validations) {
            const result = validation(payload);
            if (result.length === 0) return [];
            errors.push(...result);
        }
        return errors;
    };
}
