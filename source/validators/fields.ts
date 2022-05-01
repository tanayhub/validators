import { CompareEquality, CompareNumber } from "models/fields";
import { Hybrid, ValidationFunction, Equality } from "models/general";
import { TypeSchema } from "models/types";

export function fieldEqualTo(equalTo: Equality): ValidationFunction {
  return (payload: unknown) => {
    return [];
  };
}

export function fieldIsInstanceOf(
  callable: CallableFunction
): ValidationFunction {
  return (payload: unknown) => {
    return [];
  };
}

export function fieldIsInteger(should: boolean): ValidationFunction {
  return (payload: unknown) => {
    return [];
  };
}

export function fieldItems(items: Hybrid<TypeSchema>): ValidationFunction {
  return (payload: unknown) => {
    return [];
  };
}

export function fieldMax(max: number): ValidationFunction {
  return (payload: unknown) => {
    return [];
  };
}

export function fieldMin(min: number): ValidationFunction {
  return (payload: unknown) => {
    return [];
  };
}

export function fieldNotEqualTo(notEqualTo: Equality): ValidationFunction {
  return (payload: unknown) => {
    return [];
  };
}

export function fieldOrder(order: Hybrid<TypeSchema>[]): ValidationFunction {
  return (payload: unknown) => {
    return [];
  };
}

export function fieldPattern(properties: string | RegExp): ValidationFunction {
  return (payload: unknown) => {
    return [];
  };
}

export function fieldProperties(
  properties: Record<string, Hybrid<TypeSchema>>
): ValidationFunction {
  return (payload: unknown) => {
    return [];
  };
}

export function fieldLength(
  length: Partial<CompareNumber>
): ValidationFunction {
  return (payload: unknown) => {
    return [];
  };
}

export function fieldValue(
  value: Partial<CompareEquality<Equality> | CompareNumber>
): ValidationFunction {
  return (payload: unknown) => {
    return [];
  };
}
