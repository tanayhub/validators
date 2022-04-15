import Validator, { ConstraintValidator } from ".";
import { ForcedArray } from "../models/general";
import { Schema } from "../models/schemas";

export class EqualConstraintValidator<Type> extends ConstraintValidator {
    protected readonly prefix: string = "value";
    private readonly values: Set<Type>;

    constructor(values: Type | ForcedArray<Type>) {
        super();
        this.values = new Set(Array.isArray(values) ? values : [values]);
    }

    public validate(payload: any): null | string[] {
        return this.values.has(payload) ? null : [`${this.prefix}-equal`];
    }
}

export class MaxConstraintValidator extends ConstraintValidator {
    protected readonly prefix: string = "value";
    private readonly maxValue: number;

    constructor(maxValue: number) {
        super();
        this.maxValue = maxValue;
    }

    public validate(payload: any): null | string[] {
        return payload < this.maxValue ? null : [`${this.prefix}-max`];
    }
}

export class MinConstraintValidator extends ConstraintValidator {
    protected readonly prefix: string = "value";
    private readonly minValue: number;

    constructor(minValue: number) {
        super();
        this.minValue = minValue;
    }

    public validate(payload: any): null | string[] {
        return payload > this.minValue ? null : [`${this.prefix}-min`];
    }
}

export class NotEqualConstraintValidator<Type> extends ConstraintValidator {
    protected readonly prefix: string = "value";
    private readonly values: Set<Type>;

    constructor(values: Type | ForcedArray<Type>) {
        super();
        this.values = new Set(Array.isArray(values) ? values : [values]);
    }

    public validate(payload: any): null | string[] {
        return this.values.has(payload) ? [`${this.prefix}-not-equal`] : null;
    }
}

export class InstanceConstraintValidator extends ConstraintValidator {
    private readonly callable: CallableFunction;

    constructor(callable: CallableFunction) {
        super();
        this.callable = callable;
    }

    public validate(payload: any): null | string[] {
        const { callable } = this;
        return payload instanceof callable ? null : ["instance"];
    }
}

export class IntegerConstraintValidator extends ConstraintValidator {
    public validate(payload: any): null | string[] {
        const string = new String(payload).valueOf();
        return string.includes(".") ? ["integer"] : null;
    }
}

export class KeyValueConstraintValidator extends ConstraintValidator {
    private readonly validations: [string, Validator][];

    constructor(properties: Record<string, Schema | ForcedArray<Schema>>) {
        super();
        this.validations = Object.entries(properties).map(([key, schemas]) => {
            const [schema, ...additional] = Array.isArray(schemas) ? schemas : [schemas];
            return [key, new Validator(schema, ...additional)];
        });
    }

    public validate(payload: any): null | string[] {
        const errors: string[] = [];
        for (const [key, validator] of this.validations) {
            const result = validator.validate(payload[key]);
            if (Array.isArray(result)) {
                errors.push(...result.map((error) => `${key}.${error}`));
            }
        }
        return errors.length > 0 ? errors : null;
    }
}

export class LengthEqualConstraintValidator extends EqualConstraintValidator<number> {
    protected readonly prefix: string = "length";
}

export class LengthMaxConstraintValidator extends MaxConstraintValidator {
    protected readonly prefix: string = "length";
}

export class LengthMinConstraintValidator extends MinConstraintValidator {
    protected readonly prefix: string = "length";
}

export class LengthNotEqualConstraintValidator extends NotEqualConstraintValidator<number> {
    protected readonly prefix: string = "length";
}

export class OrderedConstraintValidator extends ConstraintValidator {
    private readonly validations: [string, Validator][];

    constructor(tuple: Schema | ForcedArray<Schema>) {
        super();
        this.validations = Object.entries(
            (Array.isArray(tuple) ? tuple : [tuple]).map((schema) => new Validator(schema))
        );
    }

    public validate(payload: any): null | string[] {
        const errors: string[] = [];
        for (const [key, validator] of this.validations) {
            const result = validator.validate(payload[key]);
            if (Array.isArray(result)) {
                errors.push(...result.map((error) => `[${key}].${error}`));
            }
        }
        return errors.length > 0 ? errors : null;
    }
}

export class PatternConstraintValidator extends ConstraintValidator {
    private readonly pattern: RegExp;

    constructor(pattern: string | RegExp) {
        super();
        this.pattern = new RegExp(pattern);
    }

    public validate(payload: any): null | string[] {
        const { pattern } = this;
        return pattern.test(payload) ? null : ["pattern"];
    }
}

export class UnorderedConstraintValidator extends ConstraintValidator {
    private readonly validator: Validator;

    constructor(schemas: Schema | ForcedArray<Schema>) {
        super();
        const [schema, ...additional] = Array.isArray(schemas) ? schemas : [schemas];
        this.validator = new Validator(schema, ...additional);
    }

    public validate(payload: any): null | string[] {
        return this.validator.validate(payload);
    }
}
