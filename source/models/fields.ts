import { Hybrid, Tuple } from "./helper";
import { AnySchema } from "./schemas";

export interface BooleanValueField {
  value: Partial<EqualToField<boolean> & NotEqualToField<boolean>>;
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
  length: Partial<
    EqualToField<Hybrid<number>> &
      MaxField &
      MinField &
      NotEqualToField<Hybrid<number>>
  >;
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

export interface NumberValueField {
  value: Partial<
    EqualToField<Hybrid<number>> &
      MaxField &
      MinField &
      NotEqualToField<Hybrid<number>>
  >;
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

export interface StringValueField {
  value: Partial<
    EqualToField<Hybrid<string>> & NotEqualToField<Hybrid<string>>
  >;
}
