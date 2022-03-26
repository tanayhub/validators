import { DefinitionModeUndefined } from ".";

interface FunctionDefinitionType {
    type: "function";
}

type DefinitionModes = DefinitionModeUndefined;

type FunctionDefinition = FunctionDefinitionType & DefinitionModes;

export default FunctionDefinition;
