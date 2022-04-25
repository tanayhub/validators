import { Validator } from ".";
import ValidationError from "../errors";
import {
  EqualityValidationError,
  InequalityValidationError,
  InstanceValidationError,
  NumberValidationError,
  PatternValidationError,
} from "../errors/fields";
import { TypePrefix, ValidationFunction } from "../models/helper";
import { SchemaType } from "../models/schemas";

export function validateEqualTo<Type>(
  equalTo: Type[],
  prefix: TypePrefix = "value",
): ValidationFunction {
  const set = new Set(equalTo);
  return (payload: any): null | ValidationError[] => {
    return set.has(payload)
      ? null
      : [new EqualityValidationError(prefix, payload, equalTo)];
  };
}

export function validateInstance(
  callable: CallableFunction,
): ValidationFunction {
  return (payload: any): null | ValidationError[] => {
    return payload instanceof callable
      ? null
      : [new InstanceValidationError(payload, callable.toString())];
  };
}

export function validateInteger(should: boolean): ValidationFunction {
  return (payload: any): null | ValidationError[] => {
    const includeDecimal = new String(payload).valueOf().includes(".");
    if (includeDecimal !== should) return null;
    const expected = should
      ? "should be an integer"
      : "should not be an integer";
    return [new NumberValidationError("value", payload, expected)];
  };
}

export function validateMax(
  max: number,
  prefix: TypePrefix = "value",
): ValidationFunction {
  return (payload: any): null | ValidationError[] => {
    return payload < max
      ? null
      : [new NumberValidationError(prefix, `less than ${max}`, payload)];
  };
}

export function validateMin(
  min: number,
  prefix: TypePrefix = "value",
): ValidationFunction {
  return (payload: any): null | ValidationError[] => {
    return payload > min
      ? null
      : [new NumberValidationError(prefix, `greater than ${min}`, payload)];
  };
}

export function validateNotEqualTo<Type>(
  notEqualTo: Type[],
  prefix: TypePrefix = "value",
): ValidationFunction {
  const set = new Set(notEqualTo);
  return (payload: any): null | ValidationError[] => {
    return set.has(payload)
      ? null
      : [new InequalityValidationError(prefix, payload, notEqualTo)];
  };
}

export function validatePattern(pattern: string | RegExp): ValidationFunction {
  const regex = new RegExp(pattern);
  return (payload: any): null | ValidationError[] => {
    return regex.test(payload)
      ? null
      : [new PatternValidationError(payload, regex.toString())];
  };
}

export function validatePossible(possible: SchemaType[]): ValidationFunction {
  const validator = new Validator(...possible);
  return (payload: any): null | ValidationError[] => {
    return validator.validate(payload);
  };
}

export function validateProperties(
  properties: Record<string, SchemaType>,
): ValidationFunction {
  const validations: [string, Validator][] = Object.entries(properties).map(
    ([key, schema]) => {
      return [key, new Validator(schema)];
    },
  );
  return (payload: any): null | ValidationError[] => {
    const errors: ValidationError[] = [];
    for (const [key, validator] of validations) {
      const result = validator.validate(payload[key]);
      if (Array.isArray(result)) {
        result.forEach((error) => (error.path = `${key}.${error.path}`));
        errors.push(...result);
      }
    }
    return errors.length > 0 ? errors : null;
  };
}

export function validateItems(schema: SchemaType): ValidationFunction {
  const validator = new Validator(schema);
  return (payload: any): null | ValidationError[] => {
    const errors: ValidationError[] = [];
    for (const [index, value] of Object.entries(payload)) {
      const result = validator.validate(value);
      if (Array.isArray(result)) {
        result.forEach((error) => (error.path = `[${index}].${error.path}`));
        errors.push(...result);
      }
    }
    return errors.length > 0 ? errors : null;
  };
}

export function validateTuple(tuple: SchemaType[]): ValidationFunction {
  const validators: Validator[] = tuple.map((schema) => {
    return new Validator(schema);
  });
  const validations: [string, Validator][] = Object.entries(validators);
  return (payload: any): null | ValidationError[] => {
    const errors: ValidationError[] = [];
    const lengthError = validateEqualTo<number>([validations.length])(
      payload.length,
    );
    if (Array.isArray(lengthError)) {
      errors.push(...lengthError);
    }
    for (const [index, validator] of validations) {
      const result = validator.validate(payload[index]);
      if (Array.isArray(result)) {
        result.forEach((error) => (error.path = `[${index}].${error.path}`));
        errors.push(...result);
      }
    }
    return errors.length > 0 ? errors : null;
  };
}
