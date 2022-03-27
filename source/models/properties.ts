import SchemaObject from "./schemas";

export interface EqualProperty<Type> {
    equalTo: Type | Type[];
}

export interface NotEqualProperty<Type> {
    notEqualTo: Type | Type[];
}

export interface MinProperty {
    min: number;
}

export interface MaxProperty {
    max: number;
}

export interface LengthEqualProperty {
    lengthEqualTo: number | number[];
}

export interface LengthNotEqualProperty {
    lengthNotEqualTo: number | number[];
}

export interface MinLengthProperty {
    minLength: number;
}

export interface MaxLengthProperty {
    maxLength: number;
}

export interface PatternProperty {
    pattern: string | RegExp;
}

export interface EachElementProperty {
    eachElement: SchemaObject;
}

export interface SequenceProperty {
    sequence: [SchemaObject, SchemaObject, ...SchemaObject[]];
}

export interface InstanceProperty {
    instanceOf: CallableFunction;
}

export interface ChildrenProperty {
    children: Record<string, SchemaObject>;
}

export type BetweenProperty = MinProperty & MaxProperty;

export type LengthBetweenProperty = MinLengthProperty & MaxLengthProperty;

export type MinAndNotEqualProperty = MinProperty & NotEqualProperty<number>;

export type MaxAndNotEqualProperty = MaxProperty & NotEqualProperty<number>;

export type BetweenAndNotEqualProperty = BetweenProperty & NotEqualProperty<number>;

export type PatternAndNotEqualProperty = PatternProperty & NotEqualProperty<string>;

export type PatternAndMinLengthProperty = PatternProperty & MinLengthProperty;

export type PatternAndMaxLengthProperty = PatternProperty & MaxLengthProperty;

export type PatternAndLengthBetweenProperty = PatternProperty & LengthBetweenProperty;

export type PatternAndLengthEqualProperty = PatternProperty & LengthEqualProperty;

export type PatternAndLengthNotEqualProperty = PatternProperty & LengthNotEqualProperty;

export type NotEqualAndMinLengthProperty = NotEqualProperty<string> & MinLengthProperty;

export type NotEqualAndMaxLengthProperty = NotEqualProperty<string> & MaxLengthProperty;

export type NotEqualAndLengthBetweenProperty = NotEqualProperty<string> & LengthBetweenProperty;

export type NotEqualAndLengthEqualProperty = NotEqualProperty<string> & LengthEqualProperty;

export type NotEqualAndLengthNotEqualProperty = NotEqualProperty<string> & LengthNotEqualProperty;

export type MinLengthAndLengthNotEqualProperty = MinLengthProperty & LengthNotEqualProperty;

export type MaxLengthAndLengthNotEqualProperty = MaxLengthProperty & LengthNotEqualProperty;

export type LengthBetweenAndLengthNotEqualProperty = LengthBetweenProperty & LengthNotEqualProperty;

export type PatternAndNotEqualAndMinLengthProperty = PatternAndNotEqualProperty & MinLengthProperty;

export type PatternAndNotEqualAndMaxLengthProperty = PatternAndNotEqualProperty & MaxLengthProperty;

export type PatternAndNotEqualAndLengthBetweenProperty = PatternAndNotEqualProperty &
    LengthBetweenProperty;

export type PatternAndNotEqualAndLengthEqualProperty = PatternAndNotEqualProperty &
    LengthEqualProperty;

export type PatternAndNotEqualAndLengthNotEqualProperty = PatternAndNotEqualProperty &
    LengthNotEqualProperty;

export type PatternAndMinLengthAndLengthNotEqualProperty = PatternAndMinLengthProperty &
    LengthNotEqualProperty;

export type PatternAndMaxLengthAndLengthNotEqualProperty = PatternAndMaxLengthProperty &
    LengthNotEqualProperty;

export type PatternAndLengthBetweenAndLengthNotEqualProperty = PatternAndLengthBetweenProperty &
    LengthNotEqualProperty;

export type NotEqualAndMinLengthAndLengthNotEqualProperty = NotEqualAndMinLengthProperty &
    LengthNotEqualProperty;

export type NotEqualAndMaxLengthAndLengthNotEqualProperty = NotEqualAndMaxLengthProperty &
    LengthNotEqualProperty;

export type NotEqualAndLengthBetweenAndLengthNotEqualProperty = NotEqualAndLengthBetweenProperty &
    LengthNotEqualProperty;

export type PatternAndNotEqualAndMinLengthAndLengthNotEqualProperty =
    PatternAndNotEqualAndMinLengthProperty & LengthNotEqualProperty;

export type PatternAndNotEqualAndMaxLengthAndLengthNotEqualProperty =
    PatternAndNotEqualAndMaxLengthProperty & LengthNotEqualProperty;

export type PatternAndNotEqualAndLengthBetweenAndLengthNotEqualProperty =
    PatternAndNotEqualAndLengthBetweenProperty & LengthNotEqualProperty;
