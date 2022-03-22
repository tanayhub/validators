import { EmptyConstraintDefinition, RangeDefinition } from "./commons";

interface TypeDefinition {
    type: "string";
}

interface LengthProperty {
    length: number;
}

interface LengthRangeProperty {
    lengthRange: Partial<RangeDefinition>;
}

interface RegexProperty {
    regex: RegExp;
}

interface LengthEqualityConstraintDefinition extends LengthProperty {
    constraint: "length-equality";
}

interface LengthInequalityConstraintDefinition extends LengthProperty {
    constraint: "length-inequality";
}

interface LengthRangeConstraintDefinition extends LengthRangeProperty {
    constraint: "length-range";
}

type LengthConstraintDefinition =
    | LengthEqualityConstraintDefinition
    | LengthInequalityConstraintDefinition
    | LengthRangeConstraintDefinition;

interface EnumConstraintDefinition {
    constraint: "enum";
    values: string[];
}

interface RegexConstraintDefinition extends RegexProperty {
    constraint: "regex";
}

interface LengthEqualityRegexConstraintDefinition extends RegexProperty, LengthProperty {
    constraint: "regex|length-equality";
}

interface LengthInequalityRegexConstraintDefinition extends RegexProperty, LengthProperty {
    constraint: "regex|length-inequality";
}

interface LengthRangeRegexConstraintDefinition extends RegexProperty, LengthRangeProperty {
    constraint: "regex|length-range";
}

type LengthRegexConstraintDefinition =
    | LengthEqualityRegexConstraintDefinition
    | LengthInequalityRegexConstraintDefinition
    | LengthRangeRegexConstraintDefinition;

type ConstraintDefinitions =
    | EmptyConstraintDefinition
    | EnumConstraintDefinition
    | LengthConstraintDefinition
    | LengthRangeConstraintDefinition
    | RegexConstraintDefinition
    | LengthRegexConstraintDefinition;

type StringDefinition = TypeDefinition & ConstraintDefinitions;

export default StringDefinition;
