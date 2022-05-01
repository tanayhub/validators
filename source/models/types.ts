import {
  ConstraintArray,
  ConstraintBoolean,
  ConstraintFunction,
  ConstraintNull,
  ConstraintNumber,
  ConstraintObject,
  ConstraintString,
  ConstraintUndefined,
} from "./constraints";

/* simple types */

export interface TypeArray extends Partial<ConstraintArray> {
  type: "array";
}

export interface TypeBoolean extends Partial<ConstraintBoolean> {
  type: "boolean";
}

export interface TypeFunction extends Partial<ConstraintFunction> {
  type: "function";
}

export interface TypeNull extends Partial<ConstraintNull> {
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

export interface TypeUndefined extends Partial<ConstraintUndefined> {
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
