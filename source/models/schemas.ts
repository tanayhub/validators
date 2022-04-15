import {
    BooleanValueField,
    InstanceField,
    IntegerField,
    LengthField,
    NumberValueField,
    OrderField,
    PatternField,
    PropertyField,
    SchemaField,
    StringValueField,
} from "./fields";

export interface ArraySchema extends Partial<LengthField & OrderField & SchemaField> {
    type: "array";
}

export interface BooleanSchema extends Partial<BooleanValueField> {
    type: "boolean";
}

export interface FunctionSchema {
    type: "function";
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

export interface StringSchema extends Partial<StringValueField & LengthField & PatternField> {
    type: "string";
}

export interface UndefinedSchema {
    type: "undefined";
}

export interface UnknownSchema {
    type: "unknown";
}

export type AnySchema =
    | ArraySchema
    | BooleanSchema
    | FunctionSchema
    | NullSchema
    | NumberSchema
    | ObjectSchema
    | StringSchema
    | UndefinedSchema
    | UnknownSchema;
