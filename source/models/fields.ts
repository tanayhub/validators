import { SchemaType } from "./schemas";

type BooleanRangeField = EqualToField<boolean> & NotEqualToField<boolean>;

export interface BooleanValueField {
  value: Partial<BooleanRangeField>;
}

export interface EqualToField<Type> {
  equalTo: Type[];
}

export interface InstanceField {
  instance: CallableFunction;
}

export interface IntegerField {
  integer: boolean;
}

export interface ItemsField {
  items: SchemaType;
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
  notEqualTo: Type[];
}

type NumberRangeField = EqualToField<number> &
  MaxField &
  MinField &
  NotEqualToField<number>;

export interface NumberValueField {
  value: Partial<NumberRangeField>;
}

export interface PatternField {
  pattern: string | RegExp;
}

export interface PossibleField {
  possible: SchemaType[];
}

export interface PropertyField {
  properties: Record<string, SchemaType>;
}

type StringRangeField = EqualToField<string> & NotEqualToField<string>;

export interface StringValueField {
  value: Partial<StringRangeField>;
}

export interface TupleField {
  tuple: SchemaType[];
}
