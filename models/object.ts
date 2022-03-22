import ArrayDefinition from "./array";
import BooleanDefinition from "./boolean";
import { EmptyConstraintDefinition, RangeDefinition } from "./commons";
import NumberDefinition from "./number";
import StringDefinition from "./string";

interface TypeDefinition {
    type: "object";
    children: Record<
        string,
        NumberDefinition | StringDefinition | BooleanDefinition | ArrayDefinition
    >;
}

type ConstraintDefinitions = EmptyConstraintDefinition;

type ObjectDefinition = TypeDefinition & ConstraintDefinitions;

export default ObjectDefinition;
