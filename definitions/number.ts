import {
    DefinitionModeCompareValue,
    DefinitionModeEnum,
    DefinitionModeUndefined,
    DefinitionPropertyMax,
    DefinitionPropertyMin,
} from ".";

interface NumberDefinitionType {
    type: "number";
}

interface DefinitionModeInteger {
    mode: "integer";
}

interface DefinitionModeMinValue extends DefinitionPropertyMin {
    mode: "min";
}

interface DefinitionModeMinIntegerValue extends DefinitionPropertyMin {
    mode: "integer|min";
}

interface DefinitionModeMaxValue extends DefinitionPropertyMax {
    mode: "max";
}

interface DefinitionModeMaxIntegerValue extends DefinitionPropertyMax {
    mode: "integer|max";
}

interface DefinitionModeValueBetween extends DefinitionPropertyMin, DefinitionPropertyMax {
    mode: "between";
}

interface DefinitionModeIntegerValueBetween extends DefinitionPropertyMax {
    mode: "integer|between";
}

type DefinitionModeValue =
    | DefinitionModeInteger
    | DefinitionModeMinValue
    | DefinitionModeMinIntegerValue
    | DefinitionModeMaxValue
    | DefinitionModeMaxIntegerValue
    | DefinitionModeValueBetween
    | DefinitionModeIntegerValueBetween
    | DefinitionModeCompareValue<number>
    | DefinitionModeEnum<number>;

type DefinitionModes = DefinitionModeUndefined | DefinitionModeValue;

type NumberDefinition = NumberDefinitionType & DefinitionModes;

export default NumberDefinition;
