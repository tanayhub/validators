import {
    InstanceAndKeyValueField,
    InstanceAndValueNotEqualField,
    InstanceField,
    IntegerAndValueMaxField,
    IntegerAndValueMaxMinField,
    IntegerAndValueMaxNotEqualField,
    IntegerAndValueMinField,
    IntegerAndValueMinNotEqualField,
    IntegerAndValueNotEqualField,
    KeyValueField,
    LengthEqualAndPatternAndValueNotEqualField,
    LengthEqualAndPatternField,
    LengthEqualAndSchemaField,
    LengthEqualAndValueNotEqualField,
    LengthEqualField,
    LengthMaxAndPatternAndValueNotEqualField,
    LengthMaxAndPatternField,
    LengthMaxAndSchemaField,
    LengthMaxAndValueNotEqualField,
    LengthMaxField,
    LengthMaxMinAndPatternField,
    LengthMaxMinAndSchemaField,
    LengthMaxMinAndValueNotEqualField,
    LengthMaxMinField,
    LengthMaxMinNotEqualField,
    LengthMaxNotEqualAndPatternField,
    LengthMaxNotEqualAndSchemaField,
    LengthMaxNotEqualAndValueNotEqualField,
    LengthMaxNotEqualField,
    LengthMinAndPatternAndValueNotEqualField,
    LengthMinAndPatternField,
    LengthMinAndSchemaField,
    LengthMinAndValueNotEqualField,
    LengthMinField,
    LengthMinNotEqualAndPatternField,
    LengthMinNotEqualAndSchemaField,
    LengthMinNotEqualAndValueNotEqualField,
    LengthMinNotEqualField,
    LengthNotEqualAndPatternAndValueNotEqualField,
    LengthNotEqualAndPatternField,
    LengthNotEqualAndSchemaField,
    LengthNotEqualAndValueNotEqualField,
    LengthNotEqualField,
    NoField,
    PatternAndValueNotEqualField,
    PatternField,
    SchemaField,
    ValueEqualField,
    ValueMaxField,
    ValueMaxMinField,
    ValueMaxMinNotEqualField,
    ValueMaxNotEqualField,
    ValueMinField,
    ValueMinNotEqualField,
    ValueNotEqualField,
} from "./fields";

export interface NoConstraint extends NoField {
    constraint?: undefined;
}

export interface InstanceConstraint extends InstanceField {
    constraint: "instance";
}

export interface IntegerConstraint extends NoField {
    constraint: "integer";
}

export interface KeyValueConstraint extends KeyValueField {
    constraint: "key-value";
}

export interface LengthEqualConstraint extends LengthEqualField {
    constraint: "length[equal]";
}

export interface LengthMaxConstraint extends LengthMaxField {
    constraint: "length[max]";
}

export interface LengthMinConstraint extends LengthMinField {
    constraint: "length[min]";
}

export interface LengthNotEqualConstraint extends LengthNotEqualField {
    constraint: "length[not-equal]";
}

export interface OrderedConstraint extends SchemaField {
    constraint: "ordered";
}

export interface PatternConstraint extends PatternField {
    constraint: "pattern";
}

export interface UnorderedConstraint extends SchemaField {
    constraint: "unordered";
}

export interface ValueEqualConstraint<Type> extends ValueEqualField<Type> {
    constraint: "value[equal]";
}

export interface ValueMaxConstraint extends ValueMaxField {
    constraint: "value[max]";
}

export interface ValueMinConstraint extends ValueMinField {
    constraint: "value[min]";
}

export interface ValueNotEqualConstraint<Type> extends ValueNotEqualField<Type> {
    constraint: "value[not-equal]";
}

export interface InstanceAndKeyValueConstraint extends InstanceAndKeyValueField {
    constraint: "instance,key-value";
}

export interface InstanceAndValueNotEqualConstraint extends InstanceAndValueNotEqualField {
    constraint: "instance,value[not-equal]";
}

export interface IntegerAndValueMaxConstraint extends IntegerAndValueMaxField {
    constraint: "integer,value[max]";
}

export interface IntegerAndValueMinConstraint extends IntegerAndValueMinField {
    constraint: "integer,value[min]";
}

export interface IntegerAndValueNotEqualConstraint extends IntegerAndValueNotEqualField {
    constraint: "integer,value[not-equal]";
}

export interface LengthEqualAndPatternConstraint extends LengthEqualAndPatternField {
    constraint: "length[equal],pattern";
}

export interface LengthEqualAndUnorderedConstraint extends LengthEqualAndSchemaField {
    constraint: "length[equal],unordered";
}

export interface LengthEqualAndValueNotEqualConstraint extends LengthEqualAndValueNotEqualField {
    constraint: "length[equal],value[not-equal]";
}

export interface LengthMaxMinConstraint extends LengthMaxMinField {
    constraint: "length[max,min]";
}

export interface LengthMaxNotEqualConstraint extends LengthMaxNotEqualField {
    constraint: "length[max,not-equal]";
}

export interface LengthMaxAndPatternConstraint extends LengthMaxAndPatternField {
    constraint: "length[max],pattern";
}

export interface LengthMaxAndUnorderedConstraint extends LengthMaxAndSchemaField {
    constraint: "length[max],unordered";
}

export interface LengthMaxAndValueNotEqualConstraint extends LengthMaxAndValueNotEqualField {
    constraint: "length[max],value[not-equal]";
}

export interface LengthMinNotEqualConstraint extends LengthMinNotEqualField {
    constraint: "length[min,not-equal]";
}

export interface LengthMinAndPatternConstraint extends LengthMinAndPatternField {
    constraint: "length[min],pattern";
}

export interface LengthMinAndUnorderedConstraint extends LengthMinAndSchemaField {
    constraint: "length[min],unordered";
}

export interface LengthMinAndValueNotEqualConstraint extends LengthMinAndValueNotEqualField {
    constraint: "length[min],value[not-equal]";
}

export interface LengthNotEqualAndPatternConstraint extends LengthNotEqualAndPatternField {
    constraint: "length[not-equal],pattern";
}

export interface LengthNotEqualAndUnorderedConstraint extends LengthNotEqualAndSchemaField {
    constraint: "length[not-equal],unordered";
}

export interface LengthNotEqualAndValueNotEqualConstraint
    extends LengthNotEqualAndValueNotEqualField {
    constraint: "length[not-equal],value[not-equal]";
}

export interface PatternAndValueNotEqualConstraint extends PatternAndValueNotEqualField {
    constraint: "pattern,value[not-equal]";
}

export interface ValueMaxMinConstraint extends ValueMaxMinField {
    constraint: "value[max,min]";
}

export interface ValueMaxNotEqualConstraint extends ValueMaxNotEqualField {
    constraint: "value[max,not-equal]";
}

export interface ValueMinNotEqualConstraint extends ValueMinNotEqualField {
    constraint: "value[min,not-equal]";
}

export interface IntegerAndValueMaxMinConstraint extends IntegerAndValueMaxMinField {
    constraint: "integer,value[max,min]";
}

export interface IntegerAndValueMaxNotEqualConstraint extends IntegerAndValueMaxNotEqualField {
    constraint: "integer,value[max,not-equal]";
}

export interface IntegerAndValueMinNotEqualConstraint extends IntegerAndValueMinNotEqualField {
    constraint: "integer,value[min,not-equal]";
}

export interface LengthEqualAndPatternAndValueNotEqualConstraint
    extends LengthEqualAndPatternAndValueNotEqualField {
    constraint: "length[equal],pattern,value[not-equal]";
}

export interface LengthMaxMinNotEqualConstraint extends LengthMaxMinNotEqualField {
    constraint: "length[max,min,not-equal]";
}

export interface LengthMaxMinAndPatternConstraint extends LengthMaxMinAndPatternField {
    constraint: "length[max,min],pattern";
}

export interface LengthMaxMinAndUnorderedConstraint extends LengthMaxMinAndSchemaField {
    constraint: "length[max,min],unordered";
}

export interface LengthMaxMinAndValueNotEqualConstraint extends LengthMaxMinAndValueNotEqualField {
    constraint: "length[max,min],value[not-equal]";
}

export interface LengthMaxNotEqualAndPatternConstraint extends LengthMaxNotEqualAndPatternField {
    constraint: "length[max,not-equal],pattern";
}

export interface LengthMaxNotEqualAndUnorderedConstraint extends LengthMaxNotEqualAndSchemaField {
    constraint: "length[max,not-equal],unordered";
}

export interface LengthMaxNotEqualAndValueNotEqualConstraint
    extends LengthMaxNotEqualAndValueNotEqualField {
    constraint: "length[max,not-equal],value[not-equal]";
}

export interface LengthMaxAndPatternAndValueNotEqualConstraint
    extends LengthMaxAndPatternAndValueNotEqualField {
    constraint: "length[max],pattern,value[not-equal]";
}

export interface LengthMinNotEqualAndPatternConstraint extends LengthMinNotEqualAndPatternField {
    constraint: "length[min,not-equal],pattern";
}

export interface LengthMinNotEqualAndUnorderedConstraint extends LengthMinNotEqualAndSchemaField {
    constraint: "length[min,not-equal],unordered";
}

export interface LengthMinNotEqualAndValueNotEqualConstraint
    extends LengthMinNotEqualAndValueNotEqualField {
    constraint: "length[min,not-equal],value[not-equal]";
}

export interface LengthMinAndPatternAndValueNotEqualConstraint
    extends LengthMinAndPatternAndValueNotEqualField {
    constraint: "length[min],pattern,value[not-equal]";
}

export interface LengthNotEqualAndPatternAndValueNotEqualConstraint
    extends LengthNotEqualAndPatternAndValueNotEqualField {
    constraint: "length[not-equal],pattern,value[not-equal]";
}

export interface ValueMaxMinNotEqualConstraint extends ValueMaxMinNotEqualField {
    constraint: "value[max,min,not-equal]";
}

export type AnyConstraint = NoConstraint;

export type ArrayConstraint =
    | NoConstraint
    | LengthEqualConstraint
    | LengthMaxConstraint
    | LengthMinConstraint
    | LengthNotEqualConstraint
    | OrderedConstraint
    | UnorderedConstraint
    | LengthEqualAndUnorderedConstraint
    | LengthMaxMinConstraint
    | LengthMaxNotEqualConstraint
    | LengthMaxAndUnorderedConstraint
    | LengthMinNotEqualConstraint
    | LengthMinAndUnorderedConstraint
    | LengthNotEqualAndUnorderedConstraint
    | LengthMaxMinNotEqualConstraint
    | LengthMaxMinAndUnorderedConstraint
    | LengthMaxNotEqualAndUnorderedConstraint
    | LengthMinNotEqualAndUnorderedConstraint;

export type BooleanConstraint =
    | NoConstraint
    | ValueEqualConstraint<boolean>
    | ValueNotEqualConstraint<boolean>;

export type FunctionConstraint = NoConstraint;

export type NullConstraint = NoConstraint;

export type NumberConstraint =
    | NoConstraint
    | IntegerConstraint
    | ValueEqualConstraint<number>
    | ValueMaxConstraint
    | ValueMinConstraint
    | ValueNotEqualConstraint<number>
    | IntegerAndValueMaxConstraint
    | IntegerAndValueMinConstraint
    | IntegerAndValueNotEqualConstraint
    | ValueMaxMinConstraint
    | ValueMaxNotEqualConstraint
    | ValueMinNotEqualConstraint
    | IntegerAndValueMaxMinConstraint
    | IntegerAndValueMaxNotEqualConstraint
    | IntegerAndValueMinNotEqualConstraint
    | ValueMaxMinNotEqualConstraint;

export type ObjectConstraint =
    | NoConstraint
    | InstanceConstraint
    | KeyValueConstraint
    | InstanceAndKeyValueConstraint
    | IntegerAndValueNotEqualConstraint;

export type StringConstraint =
    | NoConstraint
    | LengthEqualConstraint
    | LengthMaxConstraint
    | LengthMinConstraint
    | LengthNotEqualConstraint
    | PatternConstraint
    | ValueEqualConstraint<string>
    | ValueNotEqualConstraint<string>
    | LengthEqualAndPatternConstraint
    | LengthEqualAndValueNotEqualConstraint
    | LengthMaxMinConstraint
    | LengthMaxNotEqualConstraint
    | LengthMaxAndPatternConstraint
    | LengthMaxAndValueNotEqualConstraint
    | LengthMinNotEqualConstraint
    | LengthMinAndPatternConstraint
    | LengthMinAndValueNotEqualConstraint
    | LengthNotEqualAndPatternConstraint
    | LengthMaxAndValueNotEqualConstraint
    | PatternAndValueNotEqualConstraint
    | LengthEqualAndPatternAndValueNotEqualConstraint
    | LengthMaxMinNotEqualConstraint
    | LengthMaxMinAndPatternConstraint
    | LengthMaxMinAndValueNotEqualConstraint
    | LengthMaxNotEqualAndPatternConstraint
    | LengthMaxNotEqualAndValueNotEqualConstraint
    | LengthMaxAndPatternAndValueNotEqualConstraint
    | LengthMinNotEqualAndPatternConstraint
    | LengthMinNotEqualAndValueNotEqualConstraint
    | LengthMinAndPatternAndValueNotEqualConstraint
    | LengthNotEqualAndPatternAndValueNotEqualConstraint;

export type UndefinedConstraint = NoConstraint;
