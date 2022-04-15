import { BasicSchemaValidator, BasicValidator, Hybrid, ValidationFunction } from "../models/helper";
import { AnySchema } from "../models/schemas";
import { hybridToArray } from "../utilities";

export class SchemaValidator implements BasicSchemaValidator {
    private readonly validations: ValidationFunction[];

    constructor(validations: ValidationFunction[]) {
        this.validations = validations;
    }

    public validateType(payload: any): null | string[] {
        return null;
    }

    public validate(payload: any): null | string[] {
        const typeResult = this.validateType(payload);
        if (typeResult) return typeResult;
        const errors: string[] = [];
        for (const validate of this.validations) {
            const result = validate(payload);
            if (Array.isArray(result)) errors.push(...result);
        }
        return errors.length > 0 ? errors : null;
    }
}

export class Validator implements BasicValidator {
    private readonly validators: SchemaValidator[];

    constructor(schema: Hybrid<AnySchema>) {
        this.validators = hybridToArray<AnySchema>(schema).map((schema) => {
            if (schema.type === "array") {
            } else if (schema.type === "boolean") {
            } else if (schema.type === "function") {
            } else if (schema.type === "null") {
            } else if (schema.type === "number") {
            } else if (schema.type === "object") {
            } else if (schema.type === "string") {
            } else if (schema.type === "undefined") {
            } else {
            }
            // TODO: embed proper validators
            return new SchemaValidator([]);
        });
    }

    public validate(payload: any): null | string[] {
        const errors: string[] = [];
        for (const validator of this.validators) {
            const result = validator.validate(payload);
            if (Array.isArray(result)) errors.push(...result);
            else return null;
        }
        return errors.length > 0 ? errors : null;
    }
}
