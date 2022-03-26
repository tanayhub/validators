import { DefinitionModeUndefined } from ".";

interface NullDefinitionType {
    type: "null";
}

type DefinitionModes = DefinitionModeUndefined;

type NullDefinition = NullDefinitionType & DefinitionModes;

export default NullDefinition;
