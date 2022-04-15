import { ValidatorInterface } from "../models/general";
import { Schema } from "../models/schemas";

export class ConstraintValidator implements ValidatorInterface {
    public validate(payload: any): string[] | null {
        return null;
    }
}

export class SchemaValidator implements ValidatorInterface {
    protected readonly type: string = "unknown";
    protected readonly constraints: ConstraintValidator[];

    constructor(schema: Schema) {
        this.constraints = [];
    }

    protected validateType(payload: any): boolean {
        return true;
    }

    public validate(payload: any): string[] | null {
        if (!this.validateType(payload)) return [this.type];
        const errors: string[] = [];
        for (const constraint of this.constraints) {
            const result = constraint.validate(payload);
            if (Array.isArray(result)) errors.push(...result);
        }
        return errors.length > 0 ? errors : null;
    }
}

export default class Validator implements ValidatorInterface {
    protected readonly schemas: SchemaValidator[];

    constructor(schema: Schema, ...additional: Schema[]) {
        this.schemas = [schema, ...additional].map((current) => {
            if (current.type === "any") {
            } else if (current.type === "array") {
            } else if (current.type === "boolean") {
            } else if (current.type === "function") {
            } else if (current.type === "null") {
            } else if (current.type === "number") {
            } else if (current.type === "object") {
            } else if (current.type === "string") {
            } else if (current.type === "undefined") {
            } else {
            }
            return new SchemaValidator({ type: "any" });
        });
    }

    public validate(payload: any): string[] | null {
        const errors: string[] = [];
        for (const schema of this.schemas) {
            const result = schema.validate(payload);
            if (Array.isArray(result)) errors.push(...result);
            else return null;
        }
        return errors.length > 0 ? errors : null;
    }
}
