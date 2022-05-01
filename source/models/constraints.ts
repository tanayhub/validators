import {
  FieldIsInstanceOf,
  FieldIsInteger,
  FieldItems,
  FieldLength,
  FieldOrder,
  FieldPattern,
  FieldProperties,
  FieldValueEquality,
  FieldValueNumber,
} from "./fields";
import { Hybrid } from "./general";

export type ConstraintArray = FieldLength & FieldItems & FieldOrder;

export type ConstraintBoolean = FieldValueEquality<boolean>;

export type ConstraintNumber = FieldValueNumber & FieldIsInteger;

export type ConstraintObject = FieldIsInstanceOf & FieldProperties;

export type ConstraintString = FieldLength &
  FieldPattern &
  FieldValueEquality<Hybrid<string>>;
