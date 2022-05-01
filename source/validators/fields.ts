import { CompareEquality, CompareNumber } from "models/fields";
import { Hybrid, Violation, ValidationFunction } from "models/general";
import { TypeSchema } from "models/types";

export function fieldEqualTo(equalTo: unknown): ValidationFunction {
  return (payload: unknown) => {
    const errors: Violation[] = [];
    return errors;
  };
}

export function fieldIsInstanceOf(
  callable: CallableFunction
): ValidationFunction {
  return (payload: unknown) => {
    const errors: Violation[] = [];
    return errors;
  };
}

export function fieldIsInteger(should: boolean): ValidationFunction {
  return (payload: unknown) => {
    const errors: Violation[] = [];
    return errors;
  };
}

export function fieldItems(items: Hybrid<TypeSchema>): ValidationFunction {
  return (payload: unknown) => {
    const errors: Violation[] = [];
    return errors;
  };
}

export function fieldMax(max: number): ValidationFunction {
  return (payload: unknown) => {
    const errors: Violation[] = [];
    return errors;
  };
}

export function fieldMin(min: number): ValidationFunction {
  return (payload: unknown) => {
    const errors: Violation[] = [];
    return errors;
  };
}

export function fieldNotEqualTo(notEqualTo: unknown): ValidationFunction {
  return (payload: unknown) => {
    const errors: Violation[] = [];
    return errors;
  };
}

export function fieldOrder(order: Hybrid<TypeSchema>[]): ValidationFunction {
  return (payload: unknown) => {
    const errors: Violation[] = [];
    return errors;
  };
}

export function fieldPattern(properties: string | RegExp): ValidationFunction {
  return (payload: unknown) => {
    const errors: Violation[] = [];
    return errors;
  };
}

export function fieldProperties(
  properties: Record<string, Hybrid<TypeSchema>>
): ValidationFunction {
  return (payload: unknown) => {
    const errors: Violation[] = [];
    return errors;
  };
}

export function fieldLength(
  length: Partial<CompareNumber>
): ValidationFunction {
  return (payload: unknown) => {
    const errors: Violation[] = [];
    return errors;
  };
}

export function fieldValue(
  value: Partial<CompareEquality<unknown> | CompareNumber>
): ValidationFunction {
  return (payload: unknown) => {
    const errors: Violation[] = [];
    return errors;
  };
}
