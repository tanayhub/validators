import { Validator } from ".";
import { ValidationFunction } from "../models/helper";
import { SchemaType } from "../models/schemas";

export function validateEqualTo<Type>(equalTo: Type[]): ValidationFunction {
  const set = new Set(equalTo);
  return (payload: any): null | string[] => {
    return set.has(payload) ? null : ["equality"];
  };
}

export function validateInstance(
  callable: CallableFunction,
): ValidationFunction {
  return (payload: any): null | string[] => {
    return payload instanceof callable ? null : ["instance"];
  };
}

export function validateInteger(should: boolean): ValidationFunction {
  return (payload: any): null | string[] => {
    const includeDecimal = new String(payload).valueOf().includes(".");
    return includeDecimal !== should
      ? null
      : [should ? "not-integer" : "integer"];
  };
}

export function validateMax(max: number): ValidationFunction {
  return (payload: any): null | string[] => {
    return payload < max ? null : ["max"];
  };
}

export function validateMin(min: number): ValidationFunction {
  return (payload: any): null | string[] => {
    return payload > min ? null : ["min"];
  };
}

export function validateNotEqualTo<Type>(equalTo: Type[]): ValidationFunction {
  const set = new Set(equalTo);
  return (payload: any): null | string[] => {
    return set.has(payload) ? null : ["inequality"];
  };
}

export function validatePattern(pattern: string | RegExp): ValidationFunction {
  const regex = new RegExp(pattern);
  return (payload: any): null | string[] => {
    return regex.test(payload) ? null : ["pattern"];
  };
}

export function validatePossible(possible: SchemaType[]): ValidationFunction {
  const validator = new Validator(...possible);
  return (payload: any): null | string[] => {
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
  return (payload: any): null | string[] => {
    const errors: string[] = [];
    for (const [key, validator] of validations) {
      const result = validator.validate(payload[key]);
      if (Array.isArray(result)) {
        errors.push(...result.map((error) => `${key}.${error}`));
      }
    }
    return errors.length > 0 ? errors : null;
  };
}

export function validateItems(schema: SchemaType): ValidationFunction {
  const validator = new Validator(schema);
  return (payload: any): null | string[] => {
    const errors: string[] = [];
    for (const [index, value] of Object.entries(payload)) {
      const result = validator.validate(value);
      if (Array.isArray(result)) {
        errors.push(...result.map((error) => `[${index}].${error}`));
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
  return (payload: any): null | string[] => {
    const errors: string[] = [];
    if (validations.length !== payload.length) {
      errors.push("length.equality");
    }
    for (const [index, validator] of validations) {
      const result = validator.validate(payload[index]);
      if (Array.isArray(result)) {
        errors.push(...result.map((error) => `[${index}].${error}`));
      }
    }
    return errors.length > 0 ? errors : null;
  };
}
