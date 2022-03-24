import { DefinitionModeUndefined } from ".";

interface UndefinedDefinitionType {
    type: "undefined";
}

type DefinitionModes = DefinitionModeUndefined;

type UndefinedDefinition = UndefinedDefinitionType & DefinitionModes;

export default UndefinedDefinition;
