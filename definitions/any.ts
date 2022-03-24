import { DefinitionModeUndefined } from ".";

interface AnyDefinitionType {
    type: "any";
}

type DefinitionModes = DefinitionModeUndefined;

type AnyDefinition = AnyDefinitionType & DefinitionModes;

export default AnyDefinition;
