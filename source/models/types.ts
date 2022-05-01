import {
  ConstraintArray,
  ConstraintBoolean,
  ConstraintNumber,
  ConstraintObject,
  ConstraintString,
} from "./constraints";

/* simple types */

export interface TypeArray extends Partial<ConstraintArray> {
  type: "array";
}

export interface TypeBoolean extends Partial<ConstraintBoolean> {
  type: "boolean";
}

export interface TypeFunction {
  type: "function";
}

export interface TypeNull {
  type: "null";
}

export interface TypeNumber extends Partial<ConstraintNumber> {
  type: "number";
}

export interface TypeObject extends Partial<ConstraintObject> {
  type: "object";
}

export interface TypeString extends Partial<ConstraintString> {
  type: "string";
}

export interface TypeUndefined {
  type: "undefined";
}

/* complex types */

export type TypeSchema =
  | TypeArray
  | TypeBoolean
  | TypeFunction
  | TypeNull
  | TypeNumber
  | TypeObject
  | TypeString
  | TypeUndefined;
