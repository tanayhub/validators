import { Validator } from ".";
import { Hybrid, Tuple, ValidationFunction } from "../models/helper";
import { AnySchema } from "../models/schemas";

export function validateEqualTo<Type>(equalTo: Type): ValidationFunction {
  const set = new Set(Array.isArray(equalTo) ? equalTo : [equalTo]);
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
    return includeDecimal !== should ? null : ["integer"];
  };
}

export function validateMax(max: number): ValidationFunction {
  return (payload: any): null | string[] => {
    return payload > max ? ["max"] : null;
  };
}

export function validateMin(min: number): ValidationFunction {
  return (payload: any): null | string[] => {
    return min > payload ? ["min"] : null;
  };
}

export function validateNotEqualTo<Type>(equalTo: Type): ValidationFunction {
  const set = new Set(Array.isArray(equalTo) ? equalTo : [equalTo]);
  return (payload: any): null | string[] => {
    return set.has(payload) ? null : ["inequality"];
  };
}

export function validateOrder(
  tuple: Tuple<Hybrid<AnySchema>>,
): ValidationFunction {
  const validators: Validator[] = tuple.map(
    (element) => new Validator(element),
  );
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

export function validatePattern(pattern: string | RegExp): ValidationFunction {
  const regex = new RegExp(pattern);
  return (payload: any): null | string[] => {
    return regex.test(payload) ? null : ["pattern"];
  };
}

export function validateProperties(
  properties: Record<string, Hybrid<AnySchema>>,
): ValidationFunction {
  const validations: [string, Validator][] = Object.entries(properties).map(
    ([key, schemas]) => {
      return [key, new Validator(schemas)];
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

export function validateSchemas(
  schemas: Hybrid<AnySchema>,
): ValidationFunction {
  const validator = new Validator(schemas);
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
