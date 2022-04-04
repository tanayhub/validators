import { ForcedArray } from "./general";
import { Schema } from "./schemas";

export interface NoField {}

export interface InstanceField {
    instance: CallableFunction;
}

export interface KeyValueField {
    keyValue: Record<string, Schema | ForcedArray<Schema>>;
}

export interface EqualField<Type> {
    equalTo: Type | ForcedArray<Type>;
}

export interface MaxField {
    max: number;
}

export interface MinField {
    min: number;
}

export interface NotEqualField<Type> {
    notEqualTo: Type | ForcedArray<Type>;
}

export interface LengthEqualField {
    length: EqualField<number>;
}

export interface LengthMaxField {
    length: MaxField;
}

export interface LengthMinField {
    length: MinField;
}

export interface LengthNotEqualField {
    length: NotEqualField<number>;
}

export interface PatternField {
    pattern: string | RegExp;
}

export interface SchemaField {
    schemas: Schema | ForcedArray<Schema>;
}

export interface ValueEqualField<Type> {
    value: EqualField<Type>;
}

export interface ValueMaxField {
    value: MaxField;
}

export interface ValueMinField {
    value: MinField;
}

export interface ValueNotEqualField<Type> {
    value: NotEqualField<Type>;
}

export type InstanceAndKeyValueField = InstanceField & KeyValueField;

export type InstanceAndValueNotEqualField = InstanceField & NotEqualField<object>;

export type IntegerAndValueMaxField = NoField & ValueMaxField;

export type IntegerAndValueMinField = NoField & ValueMinField;

export type IntegerAndValueNotEqualField = NoField & ValueNotEqualField<number>;

export type LengthEqualAndPatternField = LengthEqualField & PatternField;

export type LengthEqualAndSchemaField = LengthEqualField & SchemaField;

export type LengthEqualAndValueNotEqualField = LengthEqualField & ValueNotEqualField<string>;

export type LengthMaxMinField = LengthMaxField & LengthMinField;

export type LengthMaxNotEqualField = LengthMaxField & LengthNotEqualField;

export type LengthMaxAndPatternField = LengthMaxField & PatternField;

export type LengthMaxAndSchemaField = LengthMaxField & SchemaField;

export type LengthMaxAndValueNotEqualField = LengthMaxField & ValueNotEqualField<string>;

export type LengthMinNotEqualField = LengthMinField & LengthNotEqualField;

export type LengthMinAndPatternField = LengthMinField & PatternField;

export type LengthMinAndSchemaField = LengthMinField & SchemaField;

export type LengthMinAndValueNotEqualField = LengthMinField & ValueNotEqualField<string>;

export type LengthNotEqualAndPatternField = LengthNotEqualField & PatternField;

export type LengthNotEqualAndSchemaField = LengthNotEqualField & SchemaField;

export type LengthNotEqualAndValueNotEqualField = LengthNotEqualField & ValueNotEqualField<string>;

export type PatternAndValueNotEqualField = PatternField & ValueNotEqualField<string>;

export type ValueMaxMinField = ValueMaxField & ValueMinField;

export type ValueMaxNotEqualField = ValueMaxField & ValueNotEqualField<number>;

export type ValueMinNotEqualField = ValueMinField & ValueNotEqualField<number>;

export type IntegerAndValueMaxMinField = IntegerAndValueMaxField & ValueMinField;

export type IntegerAndValueMaxNotEqualField = IntegerAndValueMaxField & ValueNotEqualField<number>;

export type IntegerAndValueMinNotEqualField = IntegerAndValueMinField & ValueNotEqualField<number>;

export type LengthEqualAndPatternAndValueNotEqualField = LengthEqualAndPatternField &
    ValueNotEqualField<string>;

export type LengthMaxMinNotEqualField = LengthMaxMinField & LengthNotEqualField;

export type LengthMaxMinAndPatternField = LengthMaxMinField & PatternField;

export type LengthMaxMinAndSchemaField = LengthMaxMinField & SchemaField;

export type LengthMaxMinAndValueNotEqualField = LengthMaxMinField & ValueNotEqualField<string>;

export type LengthMaxNotEqualAndPatternField = LengthMaxNotEqualField & PatternField;

export type LengthMaxNotEqualAndSchemaField = LengthMaxNotEqualField & SchemaField;

export type LengthMaxNotEqualAndValueNotEqualField = LengthMaxNotEqualField &
    ValueNotEqualField<string>;

export type LengthMaxAndPatternAndValueNotEqualField = LengthMaxAndPatternField &
    ValueNotEqualField<string>;

export type LengthMinNotEqualAndPatternField = LengthMinNotEqualField & PatternField;

export type LengthMinNotEqualAndSchemaField = LengthMinNotEqualField & SchemaField;

export type LengthMinNotEqualAndValueNotEqualField = LengthMinNotEqualField &
    ValueNotEqualField<string>;

export type LengthMinAndPatternAndValueNotEqualField = LengthMinAndPatternField &
    ValueNotEqualField<string>;

export type LengthNotEqualAndPatternAndValueNotEqualField = LengthNotEqualAndPatternField &
    ValueNotEqualField<string>;

export type ValueMaxMinNotEqualField = ValueMaxMinField & ValueNotEqualField<number>;

export type IntegerAndValueMaxMinNotEqualField = IntegerAndValueMaxMinField &
    ValueNotEqualField<number>;

export type LengthMaxMinNotEqualAndPatternField = LengthMaxMinNotEqualField & PatternField;

export type LengthMaxMinNotEqualAndSchemaField = LengthMaxMinNotEqualField & SchemaField;

export type LengthMaxMinNotEqualAndValueNotEqualField = LengthMaxMinNotEqualField &
    ValueNotEqualField<string>;

export type LengthMaxMinAndPatternAndValueNotEqualField = LengthMaxMinAndPatternField &
    ValueNotEqualField<string>;

export type LengthMaxNotEqualAndPatternAndValueNotEqualField = LengthMaxNotEqualAndPatternField &
    ValueNotEqualField<string>;

export type LengthMinNotEqualAndPatternAndValueNotEqualField = LengthMinNotEqualAndPatternField &
    ValueNotEqualField<string>;

export type LengthMaxMinNotEqualAndPatternAndValueNotEqualField = LengthMaxMinNotEqualAndPatternField &
    ValueNotEqualField<string>;
