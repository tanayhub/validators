import Definition, { DefinitionModeUndefined } from ".";

interface HybridDefinitionType {
    type: "hybrid";
    types: Definition[];
}

type DefinitionModes = DefinitionModeUndefined;

type HybridDefinition = HybridDefinitionType & DefinitionModes;

export default HybridDefinition;
