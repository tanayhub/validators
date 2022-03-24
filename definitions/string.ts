import {
    DefinitionModeCompareValue,
    DefinitionModeEnum,
    DefinitionModeLength,
    DefinitionModeUndefined,
} from ".";

interface StringDefinitionType {
    type: "string";
}

type DefinitionModes =
    | DefinitionModeUndefined
    | DefinitionModeLength
    | DefinitionModeCompareValue<string>
    | DefinitionModeEnum<string>;

type StringDefinition = StringDefinitionType & DefinitionModes;

export default StringDefinition;
