import { Hybrid, Tuple } from "./helper";
import { AnySchema } from "./schemas";

type BooleanRangeField = EqualToField<boolean> & NotEqualToField<boolean>;

export interface BooleanValueField {
  value: Partial<BooleanRangeField>;
}

export interface EqualToField<Type> {
  equalTo: Type;
}

export interface InstanceField {
  instance: CallableFunction;
}

export interface IntegerField {
  integer: boolean;
}

export interface LengthField {
  length: Partial<NumberRangeField>;
}

export interface MaxField {
  max: number;
}

export interface MinField {
  min: number;
}

export interface NotEqualToField<Type> {
  notEqualTo: Type;
}

type NumberRangeField = EqualToField<Hybrid<number>> &
  MaxField &
  MinField &
  NotEqualToField<Hybrid<number>>;

export interface NumberValueField {
  value: Partial<NumberRangeField>;
}

export interface OrderField {
  order: Tuple<Hybrid<AnySchema>>;
}

export interface PatternField {
  pattern: string | RegExp;
}

export interface PropertyField {
  properties: Record<string, Hybrid<AnySchema>>;
}

export interface SchemaField {
  schemas: Hybrid<AnySchema>;
}

type StringRangeField = EqualToField<Hybrid<string>> &
  NotEqualToField<Hybrid<string>>;

export interface StringValueField {
  value: Partial<StringRangeField>;
}
