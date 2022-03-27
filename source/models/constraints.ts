import {
    BetweenAndNotEqualProperty,
    BetweenProperty,
    ChildrenProperty,
    EachElementProperty,
    EqualProperty,
    InstanceProperty,
    LengthBetweenAndLengthNotEqualProperty,
    LengthBetweenProperty,
    LengthEqualProperty,
    LengthNotEqualProperty,
    MaxAndNotEqualProperty,
    MaxLengthAndLengthNotEqualProperty,
    MaxLengthProperty,
    MaxProperty,
    MinAndNotEqualProperty,
    MinLengthAndLengthNotEqualProperty,
    MinLengthProperty,
    MinProperty,
    NotEqualAndLengthBetweenAndLengthNotEqualProperty,
    NotEqualAndLengthBetweenProperty,
    NotEqualAndLengthEqualProperty,
    NotEqualAndLengthNotEqualProperty,
    NotEqualAndMaxLengthAndLengthNotEqualProperty,
    NotEqualAndMaxLengthProperty,
    NotEqualAndMinLengthAndLengthNotEqualProperty,
    NotEqualAndMinLengthProperty,
    NotEqualProperty,
    PatternAndLengthBetweenAndLengthNotEqualProperty,
    PatternAndLengthBetweenProperty,
    PatternAndLengthEqualProperty,
    PatternAndLengthNotEqualProperty,
    PatternAndMaxLengthAndLengthNotEqualProperty,
    PatternAndMaxLengthProperty,
    PatternAndMinLengthAndLengthNotEqualProperty,
    PatternAndMinLengthProperty,
    PatternAndNotEqualAndLengthBetweenAndLengthNotEqualProperty,
    PatternAndNotEqualAndLengthBetweenProperty,
    PatternAndNotEqualAndLengthEqualProperty,
    PatternAndNotEqualAndLengthNotEqualProperty,
    PatternAndNotEqualAndMaxLengthAndLengthNotEqualProperty,
    PatternAndNotEqualAndMaxLengthProperty,
    PatternAndNotEqualAndMinLengthAndLengthNotEqualProperty,
    PatternAndNotEqualAndMinLengthProperty,
    PatternAndNotEqualProperty,
    PatternProperty,
    SequenceProperty,
} from "./properties";

export interface UndefinedConstraint {
    constraint?: undefined;
}

export interface MinConstraint extends MinProperty {
    constraint: "min";
}

export interface MaxConstraint extends MaxProperty {
    constraint: "max";
}

export interface BetweenConstraint extends BetweenProperty {
    constraint: "between";
}

export interface EqualConstraint<Type> extends EqualProperty<Type> {
    constraint: "equality";
}

export interface NotEqualConstraint<Type> extends NotEqualProperty<Type> {
    constraint: "inequality";
}

export interface MinLengthConstraint extends MinLengthProperty {
    constraint: "min-length";
}

export interface MaxLengthConstraint extends MaxLengthProperty {
    constraint: "max-length";
}

export interface LengthBetweenConstraint extends LengthBetweenProperty {
    constraint: "length-between";
}

export interface LengthEqualConstraint extends LengthEqualProperty {
    constraint: "length-equality";
}

export interface LengthNotEqualConstraint extends LengthNotEqualProperty {
    constraint: "length-inequality";
}

export interface PatternConstraint extends PatternProperty {
    constraint: "pattern";
}

export interface MinAndNotEqualConstraint extends MinAndNotEqualProperty {
    constraint: "min|inequality";
}

export interface MaxAndNotEqualConstraint extends MaxAndNotEqualProperty {
    constraint: "max|inequality";
}

export interface BetweenAndNotEqualConstraint extends BetweenAndNotEqualProperty {
    constraint: "between|inequality";
}

export interface PatternAndNotEqualConstraint extends PatternAndNotEqualProperty {
    constraint: "pattern|inequality";
}

export interface PatternAndMinLengthConstraint extends PatternAndMinLengthProperty {
    constraint: "pattern|min-length";
}

export interface PatternAndMaxLengthConstraint extends PatternAndMaxLengthProperty {
    constraint: "pattern|max-length";
}

export interface PatternAndLengthBetweenConstraint extends PatternAndLengthBetweenProperty {
    constraint: "pattern|length-between";
}

export interface PatternAndLengthEqualConstraint extends PatternAndLengthEqualProperty {
    constraint: "pattern|length-equality";
}

export interface PatternAndLengthNotEqualConstraint extends PatternAndLengthNotEqualProperty {
    constraint: "pattern|length-inequality";
}

export interface NotEqualAndMinLengthConstraint extends NotEqualAndMinLengthProperty {
    constraint: "inequality|min-length";
}

export interface NotEqualAndMaxLengthConstraint extends NotEqualAndMaxLengthProperty {
    constraint: "inequality|max-length";
}

export interface NotEqualAndLengthBetweenConstraint extends NotEqualAndLengthBetweenProperty {
    constraint: "inequality|length-between";
}

export interface NotEqualAndLengthEqualConstraint extends NotEqualAndLengthEqualProperty {
    constraint: "inequality|length-equality";
}

export interface NotEqualAndLengthNotEqualConstraint extends NotEqualAndLengthNotEqualProperty {
    constraint: "inequality|length-inequality";
}

export interface MinLengthAndLengthNotEqualConstraint extends MinLengthAndLengthNotEqualProperty {
    constraint: "min-length|length-inequality";
}

export interface MaxLengthAndLengthNotEqualConstraint extends MaxLengthAndLengthNotEqualProperty {
    constraint: "max-length|length-inequality";
}

export interface LengthBetweenAndLengthNotEqualConstraint
    extends LengthBetweenAndLengthNotEqualProperty {
    constraint: "length-between|length-inequality";
}

export interface PatternAndNotEqualAndMinLengthConstraint
    extends PatternAndNotEqualAndMinLengthProperty {
    constraint: "pattern|inequality|min-length";
}

export interface PatternAndNotEqualAndMaxLengthConstraint
    extends PatternAndNotEqualAndMaxLengthProperty {
    constraint: "pattern|inequality|max-length";
}

export interface PatternAndNotEqualAndLengthBetweenConstraint
    extends PatternAndNotEqualAndLengthBetweenProperty {
    constraint: "pattern|inequality|length-between";
}

export interface PatternAndNotEqualAndLengthEqualConstraint
    extends PatternAndNotEqualAndLengthEqualProperty {
    constraint: "pattern|inequality|length-equality";
}

export interface PatternAndNotEqualAndLengthNotEqualConstraint
    extends PatternAndNotEqualAndLengthNotEqualProperty {
    constraint: "pattern|inequality|length-inequality";
}

export interface PatternAndMinLengthAndLengthNotEqualConstraint
    extends PatternAndMinLengthAndLengthNotEqualProperty {
    constraint: "pattern|min-length|length-inequality";
}

export interface PatternAndMaxLengthAndLengthNotEqualConstraint
    extends PatternAndMaxLengthAndLengthNotEqualProperty {
    constraint: "pattern|max-length|length-inequality";
}

export interface PatternAndLengthBetweenAndLengthNotEqualConstraint
    extends PatternAndLengthBetweenAndLengthNotEqualProperty {
    constraint: "pattern|length-between|length-inequality";
}

export interface NotEqualAndMinLengthAndLengthNotEqualConstraint
    extends NotEqualAndMinLengthAndLengthNotEqualProperty {
    constraint: "inequality|min-length|length-inequality";
}

export interface NotEqualAndMaxLengthAndLengthNotEqualConstraint
    extends NotEqualAndMaxLengthAndLengthNotEqualProperty {
    constraint: "inequality|max-length|length-inequality";
}

export interface NotEqualAndLengthBetweenAndLengthNotEqualConstraint
    extends NotEqualAndLengthBetweenAndLengthNotEqualProperty {
    constraint: "inequality|length-between|length-inequality";
}

export interface PatternAndNotEqualAndMinLengthAndLengthNotEqualConstraint
    extends PatternAndNotEqualAndMinLengthAndLengthNotEqualProperty {
    constraint: "pattern|inequality|min-length|length-inequality";
}

export interface PatternAndNotEqualAndMaxLengthAndLengthNotEqualConstraint
    extends PatternAndNotEqualAndMaxLengthAndLengthNotEqualProperty {
    constraint: "pattern|inequality|max-length|length-inequality";
}

export interface PatternAndNotEqualAndLengthBetweenAndLengthNotEqualConstraint
    extends PatternAndNotEqualAndLengthBetweenAndLengthNotEqualProperty {
    constraint: "pattern|inequality|length-between|length-inequality";
}

export type AnyConstraints = UndefinedConstraint;

export type DefaultArrayConstraint = UndefinedConstraint & EachElementProperty;

export interface TupleConstraint extends SequenceProperty {
    constraint: "tuple";
}

export type ArrayConstraints =
    | DefaultArrayConstraint
    | TupleConstraint
    | MinLengthConstraint
    | MaxLengthConstraint
    | LengthBetweenConstraint
    | LengthEqualConstraint
    | LengthNotEqualConstraint
    | MinLengthAndLengthNotEqualConstraint
    | MaxLengthAndLengthNotEqualConstraint
    | LengthBetweenAndLengthNotEqualConstraint;

export type BooleanConstraints =
    | UndefinedConstraint
    | EqualConstraint<boolean>
    | NotEqualConstraint<boolean>;

export type FunctionConstraints = UndefinedConstraint;

export type NullConstraints = UndefinedConstraint;

export type NumberConstraints =
    | UndefinedConstraint
    | MinConstraint
    | MaxConstraint
    | BetweenConstraint
    | EqualConstraint<number>
    | NotEqualConstraint<number>
    | MinAndNotEqualConstraint
    | MaxAndNotEqualConstraint
    | BetweenAndNotEqualConstraint;

export type StringConstraints =
    | UndefinedConstraint
    | PatternConstraint
    | EqualConstraint<string>
    | NotEqualConstraint<string>
    | MinLengthConstraint
    | MaxLengthConstraint
    | LengthBetweenConstraint
    | LengthEqualConstraint
    | LengthNotEqualConstraint
    | PatternAndNotEqualConstraint
    | PatternAndMinLengthConstraint
    | PatternAndMaxLengthConstraint
    | PatternAndLengthBetweenConstraint
    | PatternAndLengthEqualConstraint
    | PatternAndLengthNotEqualConstraint
    | NotEqualAndMinLengthConstraint
    | NotEqualAndMaxLengthConstraint
    | NotEqualAndLengthBetweenConstraint
    | NotEqualAndLengthEqualConstraint
    | NotEqualAndLengthNotEqualConstraint
    | MinLengthAndLengthNotEqualConstraint
    | MaxLengthAndLengthNotEqualConstraint
    | LengthBetweenAndLengthNotEqualConstraint
    | PatternAndNotEqualAndMinLengthConstraint
    | PatternAndNotEqualAndMaxLengthConstraint
    | PatternAndNotEqualAndLengthBetweenConstraint
    | PatternAndNotEqualAndLengthEqualConstraint
    | PatternAndNotEqualAndLengthNotEqualConstraint
    | PatternAndMinLengthAndLengthNotEqualConstraint
    | PatternAndMaxLengthAndLengthNotEqualConstraint
    | PatternAndLengthBetweenAndLengthNotEqualConstraint
    | NotEqualAndMinLengthAndLengthNotEqualConstraint
    | NotEqualAndMaxLengthAndLengthNotEqualConstraint
    | NotEqualAndLengthBetweenAndLengthNotEqualConstraint
    | PatternAndNotEqualAndMinLengthAndLengthNotEqualConstraint
    | PatternAndNotEqualAndMaxLengthAndLengthNotEqualConstraint
    | PatternAndNotEqualAndLengthBetweenAndLengthNotEqualConstraint;

export interface InstanceConstraint extends InstanceProperty {
    constraint: "instance-of";
}

export type ObjectConstraints = Partial<ChildrenProperty> &
    (UndefinedConstraint | InstanceConstraint);

export type UndefinedConstraints = UndefinedConstraint;
