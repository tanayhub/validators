import {
    InstanceField,
    KeyValueField,
    LengthEqualField,
    LengthMaxField,
    LengthMinField,
    LengthNotEqualField,
    NoField,
    PatternField,
    ValueEqualField,
    ValueMaxField,
    ValueMinField,
    ValueNotEqualField,
} from "./fields";

export interface NoConstraint extends NoField {}

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

export interface OrderedConstraint extends NoField {
    constraint: "ordered";
}

export interface PatternConstraint extends PatternField {
    constraint: "pattern";
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
