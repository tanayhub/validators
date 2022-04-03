import {
    AnyConstraint,
    ArrayConstraint,
    BooleanConstraint,
    FunctionConstraint,
    NullConstraint,
    NumberConstraint,
    ObjectConstraint,
    StringConstraint,
    UndefinedConstraint,
} from "./constraints";
import {
    AnyType,
    ArrayType,
    BooleanType,
    FunctionType,
    NullType,
    NumberType,
    ObjectType,
    StringType,
    UndefinedType,
} from "./types";

export type AnySchema = AnyType & AnyConstraint;

export type ArraySchema = ArrayType & ArrayConstraint;

export type BooleanSchema = BooleanType & BooleanConstraint;

export type FunctionSchema = FunctionType & FunctionConstraint;

export type NullSchema = NullType & NullConstraint;

export type NumberSchema = NumberType & NumberConstraint;

export type ObjectSchema = ObjectType & ObjectConstraint;

export type StringSchema = StringType & StringConstraint;

export type UndefinedSchema = UndefinedType & UndefinedConstraint;

export type Schema =
    | AnySchema
    | ArraySchema
    | BooleanSchema
    | FunctionSchema
    | NullSchema
    | NumberSchema
    | ObjectSchema
    | StringSchema
    | UndefinedSchema;
