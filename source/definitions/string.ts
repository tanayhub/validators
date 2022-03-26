import {
    DefinitionModeCompareValue,
    DefinitionModeEnum,
    DefinitionModeLength,
    DefinitionModeUndefined,
    DefinitionPropertyLength,
    DefinitionPropertyMax,
    DefinitionPropertyMin,
} from ".";

interface StringDefinitionType {
    type: "string";
}

interface DefinitionPropertyRegex {
    regex: RegExp;
}

interface DefinitionModeRegex extends DefinitionPropertyRegex {
    mode: "regex";
}

interface DefinitionModeRegexWithMinLength extends DefinitionPropertyMin, DefinitionPropertyRegex {
    mode: "regex|min-length";
}

interface DefinitionModeRegexWithMaxLength extends DefinitionPropertyMax, DefinitionPropertyRegex {
    mode: "regex|max-length";
}

interface DefinitionModeRegexWithLengthBetween
    extends DefinitionPropertyMin,
        DefinitionPropertyMax,
        DefinitionPropertyRegex {
    mode: "regex|length-between";
}

interface DefinitionModeRegexWithLengthEquality
    extends DefinitionPropertyLength,
        DefinitionPropertyRegex {
    mode: "regex|length-equality";
}

interface DefinitionModeRegexWithLengthInequality
    extends DefinitionPropertyLength,
        DefinitionPropertyRegex {
    mode: "regex|length-inequality";
}

type DefinitionModesRegex =
    | DefinitionModeRegex
    | DefinitionModeRegexWithMinLength
    | DefinitionModeRegexWithMaxLength
    | DefinitionModeRegexWithLengthBetween
    | DefinitionModeRegexWithLengthEquality
    | DefinitionModeRegexWithLengthInequality;

type DefinitionModes =
    | DefinitionModeUndefined
    | DefinitionModeLength
    | DefinitionModesRegex
    | DefinitionModeCompareValue<string>
    | DefinitionModeEnum<string>;

type StringDefinition = StringDefinitionType & DefinitionModes;

export default StringDefinition;
