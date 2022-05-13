import { Compare } from "../models/fields";
import {
  Class,
  Equality,
  Hybrid,
  Primitive,
  ValidationFunction,
  Violation,
} from "../models/general";
import { TypeSchema } from "../models/types";
import { typeSchema } from "./types";

export function fieldEqualTo(equalTo: Equality): ValidationFunction {
  const array = [equalTo].flat();
  const possible = new Set(array);
  return (payload: Primitive) => {
    if (!possible.has(payload)) {
      const message = "expected values should satisfy";
      return [new Violation(message, array, payload)];
    }
    return [];
  };
}

export function fieldIsInstanceOf(callable: Class): ValidationFunction {
  return (payload: unknown) => {
    if (!(payload instanceof callable)) {
      const message = "expected instance did not satisfy";
      return [new Violation(message, callable, payload)];
    }
    return [];
  };
}

export function fieldIsInteger(should: boolean): ValidationFunction {
  return (payload: number) => {
    if (Number.isInteger(payload) !== should) {
      const message = "expected value did not satisfy";
      const expected = should ? "integer" : "not an integer";
      return [new Violation(message, expected, payload)];
    }
    return [];
  };
}

export function fieldItems(items: Hybrid<TypeSchema>): ValidationFunction {
  const validations = [items].flat().map(typeSchema);
  return (payload: unknown[]) => {
    return payload
      .map((element, index) => {
        const violations: Violation[] = [];
        for (const validate of validations) {
          const result = validate(element);
          if (result.length === 0) return [];
          result.forEach((violation) => {
            violation.path = `${violation.path ?? ""}[${index}]`;
          });
          violations.push(...result);
        }
        return violations;
      })
      .flat();
  };
}

export function fieldMax(max: number): ValidationFunction {
  return (payload: number) => {
    if (payload > max) {
      const message = "expected value should be the maximum";
      return [new Violation(message, max, payload)];
    }
    return [];
  };
}

export function fieldMin(min: number): ValidationFunction {
  return (payload: number) => {
    if (min > payload) {
      const message = "expected value should be the minimum";
      return [new Violation(message, min, payload)];
    }
    return [];
  };
}

export function fieldNotEqualTo(notEqualTo: Equality): ValidationFunction {
  const array = [notEqualTo].flat();
  const possible = new Set(array);
  return (payload: Primitive) => {
    if (possible.has(payload)) {
      const message = "expected values should not satisfy";
      return [new Violation(message, array, payload)];
    }
    return [];
  };
}

export function fieldOrder(order: Hybrid<TypeSchema>[]): ValidationFunction {
  const validations = order.map((schemas) => [schemas].flat().map(typeSchema));
  return (payload: unknown[]) => {
    if (payload.length !== validations.length) {
      const message = "expected tuple length did not satisfy";
      return [new Violation(message, validations.length, payload.length)];
    }
    return payload
      .map((element, index) => {
        const violations: Violation[] = [];
        for (const validate of validations[index]) {
          const result = validate(element);
          if (result.length === 0) return [];
          result.forEach((violation) => {
            violation.path = `${violation.path ?? ""}[${index}]`;
          });
          violations.push(...result);
        }
        return violations;
      })
      .flat();
  };
}

export function fieldPattern(pattern: string | RegExp): ValidationFunction {
  const regex = new RegExp(pattern);
  return (payload: string) => {
    if (!regex.test(payload)) {
      const message = "expected pattern did not satisfy";
      return [new Violation(message, regex.source, payload)];
    }
    return [];
  };
}

export function fieldProperties(
  properties: Record<string, Hybrid<TypeSchema>>
): ValidationFunction {
  const validations: [string, ValidationFunction[]][] = Object.entries(
    properties
  ).map(([property, schemas]) => {
    return [property, [schemas].flat().map(typeSchema)];
  });
  return (payload: Record<string, unknown>) => {
    return validations
      .map(([property, validators]) => {
        const violations: Violation[] = [];
        for (const validate of validators) {
          const result = validate(payload[property]);
          if (result.length === 0) return [];
          result.forEach((violation) => {
            violation.path = violation.path
              ? `${property}.${violation.path}`
              : property;
          });
          violations.push(...result);
        }
        return violations;
      })
      .flat();
  };
}

export function fieldLength(length: Partial<Compare>): ValidationFunction {
  const { equalTo, max, min, notEqualTo } = length;
  const validations: ValidationFunction[] = [];

  if (equalTo !== undefined) validations.push(fieldEqualTo(equalTo));
  if (max !== undefined) validations.push(fieldMax(max));
  if (min !== undefined) validations.push(fieldMin(min));
  if (notEqualTo !== undefined) validations.push(fieldNotEqualTo(notEqualTo));

  return (payload: string | unknown[]) => {
    const violations = validations
      .map((validate) => validate(payload.length))
      .flat();
    violations.forEach((violation) => {
      violation.message = `length/${violation.message}`;
    });
    return violations;
  };
}

export function fieldValue(
  value: Partial<Compare<Equality>>
): ValidationFunction {
  const { equalTo, max, min, notEqualTo } = value;
  const validations: ValidationFunction[] = [];

  if (equalTo !== undefined) validations.push(fieldEqualTo(equalTo));
  if (max !== undefined) validations.push(fieldMax(max));
  if (min !== undefined) validations.push(fieldMin(min));
  if (notEqualTo !== undefined) validations.push(fieldNotEqualTo(notEqualTo));

  return (payload: unknown) => {
    const violations = validations.map((validate) => validate(payload)).flat();
    violations.forEach((violation) => {
      violation.message = `value/${violation.message}`;
    });
    return violations;
  };
}
