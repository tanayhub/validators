import Definition, { DefinitionModeUndefined } from ".";

interface ObjectDefinitionType {
    type: "object";
    instanceOf?: CallableFunction;
    properties: Record<string, Definition>;
}

type DefinitionModes = DefinitionModeUndefined;

type ObjectDefinition = ObjectDefinitionType & DefinitionModes;

export default ObjectDefinition;
