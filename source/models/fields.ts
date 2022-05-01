import { Hybrid } from "./general";
import { TypeSchema } from "./types";

/* simple fields */

export interface FieldEmpty {}

export interface FieldEqualTo<Type> {
  equalTo: Type;
}

export interface FieldIsInstanceOf {
  isInstanceOf: CallableFunction;
}

export interface FieldIsInteger {
  isInteger: boolean;
}

export interface FieldItems {
  items: Hybrid<TypeSchema>;
}

export interface FieldMax {
  max: number;
}

export interface FieldMin {
  min: number;
}

export interface FieldNotEqualTo<Type> {
  notEqualTo: Type;
}

export interface FieldOrder {
  order: Hybrid<TypeSchema>[];
}

export interface FieldPattern {
  pattern: string | RegExp;
}

export interface FieldProperties {
  properties: Record<string, Hybrid<TypeSchema>>;
}

/* complex fields */

export type CompareNumber = FieldEqualTo<Hybrid<number>> &
  FieldMax &
  FieldMin &
  FieldNotEqualTo<Hybrid<number>>;

export type CompareEquality<Type> = FieldEqualTo<Type> & FieldNotEqualTo<Type>;

export interface FieldLength {
  length: Partial<CompareNumber>;
}

export interface FieldValueNumber {
  value: Partial<CompareNumber>;
}

export interface FieldValueEquality<Type> {
  value: Partial<CompareEquality<Type>>;
}
