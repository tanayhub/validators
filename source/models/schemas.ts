import {
  BooleanValueField,
  InstanceField,
  IntegerField,
  ItemsField,
  LengthField,
  NumberValueField,
  PatternField,
  PossibleField,
  PropertyField,
  StringValueField,
  TupleField,
} from "./fields";

export interface AnySchema {
  type: "any";
}

export interface ArraySchema
  extends Partial<LengthField & TupleField & ItemsField> {
  type: "array";
}

export interface BooleanSchema extends Partial<BooleanValueField> {
  type: "boolean";
}

export interface FunctionSchema {
  type: "function";
}

export interface HybridSchema extends PossibleField {
  type: "hybrid";
}

export interface NullSchema {
  type: "null";
}

export interface NumberSchema extends Partial<NumberValueField & IntegerField> {
  type: "number";
}

export interface ObjectSchema extends Partial<InstanceField & PropertyField> {
  type: "object";
}

export interface StringSchema
  extends Partial<StringValueField & LengthField & PatternField> {
  type: "string";
}

export interface UndefinedSchema {
  type: "undefined";
}

export type SchemaType =
  | AnySchema
  | ArraySchema
  | BooleanSchema
  | FunctionSchema
  | HybridSchema
  | NullSchema
  | NumberSchema
  | ObjectSchema
  | StringSchema
  | UndefinedSchema;
