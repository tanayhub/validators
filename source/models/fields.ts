import { ForcedArray } from "./general";

export interface NoField {}

export interface InstanceField {
    instance: CallableFunction;
}

export interface KeyValueField {
    keyValue: Record<string, void>; // TODO
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
