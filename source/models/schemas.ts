import {
    AnyConstraints,
    ArrayConstraints,
    BooleanConstraints,
    FunctionConstraints,
    NullConstraints,
    NumberConstraints,
    ObjectConstraints,
    StringConstraints,
    UndefinedConstraints,
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

export type AnySchema = AnyType & AnyConstraints;

export type ArraySchema = ArrayType & ArrayConstraints;

export type BooleanSchema = BooleanType & BooleanConstraints;

export type FunctionSchema = FunctionType & FunctionConstraints;

export type NullSchema = NullType & NullConstraints;

export type NumberSchema = NumberType & NumberConstraints;

export type ObjectSchema = ObjectType & ObjectConstraints;

export type StringSchema = StringType & StringConstraints;

export type UndefinedSchema = UndefinedType & UndefinedConstraints;

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

export type SchemaList = [Schema, Schema, ...Schema[]];

type SchemaObject = Schema | SchemaList;

export default SchemaObject;
