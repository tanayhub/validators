import { DefinitionModeCompareValue, DefinitionModeUndefined } from ".";

interface BooleanDefinitionType {
    type: "boolean";
}

type DefinitionModes = DefinitionModeUndefined | DefinitionModeCompareValue<boolean>;

type BooleanDefinition = BooleanDefinitionType & DefinitionModes;

export default BooleanDefinition;
