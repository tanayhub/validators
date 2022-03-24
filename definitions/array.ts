import Definition, { DefinitionModeLength, DefinitionModeUndefined } from ".";

interface ArrayDefinitionType {
    type: "array";
    eachElement?: Definition;
}

type DefinitionModes = DefinitionModeUndefined | DefinitionModeLength;

type ArrayDefinition = ArrayDefinitionType & DefinitionModes;

export default ArrayDefinition;
