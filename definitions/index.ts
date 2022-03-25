import AnyDefinition from "./any";
import ArrayDefinition from "./array";
import BooleanDefinition from "./boolean";
import NullDefinition from "./null";
import FunctionDefinition from "./function";
import HybridDefinition from "./hybrid";
import NumberDefinition from "./number";
import ObjectDefinition from "./object";
import StringDefinition from "./string";
import UndefinedDefinition from "./undefined";

export interface DefinitionModeUndefined {
    mode?: undefined;
}

export interface DefinitionPropertyMin {
    min: number;
}

export interface DefinitionPropertyMax {
    max: number;
}

export interface DefinitionPropertyLength {
    length: number;
}

export interface DefinitionPropertyValue<Type> {
    value: Type;
}

export interface DefinitionPropertyValues<Type> {
    values: Type[];
}

export interface DefinitionModeEnum<Type> extends DefinitionPropertyValues<Type> {
    mode: "enum";
}

interface DefinitionModeValueEquality<Type> extends DefinitionPropertyValue<Type> {
    mode: "equality";
}

interface DefinitionModeValueInequality<Type> extends DefinitionPropertyValue<Type> {
    mode: "inequality";
}

export type DefinitionModeCompareValue<Type> =
    | DefinitionModeValueEquality<Type>
    | DefinitionModeValueInequality<Type>;

interface DefinitionModeMinLength extends DefinitionPropertyMin {
    mode: "min-length";
}

interface DefinitionModeMaxLength extends DefinitionPropertyMax {
    mode: "max-length";
}

interface DefinitionModeLengthBetween extends DefinitionPropertyMin, DefinitionPropertyMax {
    mode: "length-between";
}

interface DefinitionModeLengthEquality extends DefinitionPropertyLength {
    mode: "length-equality";
}

interface DefinitionModeLengthInequality extends DefinitionPropertyLength {
    mode: "length-inequality";
}

export type DefinitionModeLength =
    | DefinitionModeMinLength
    | DefinitionModeMaxLength
    | DefinitionModeLengthBetween
    | DefinitionModeLengthEquality
    | DefinitionModeLengthInequality;

type Definition =
    | AnyDefinition
    | ArrayDefinition
    | BooleanDefinition
    | FunctionDefinition
    | HybridDefinition
    | NullDefinition
    | NumberDefinition
    | ObjectDefinition
    | StringDefinition
    | UndefinedDefinition;

export default Definition;
