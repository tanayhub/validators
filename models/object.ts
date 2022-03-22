import ValidationDefinition from ".";
import { EmptyConstraintDefinition } from "./commons";

interface TypeDefinition {
    type: "object";
    children: Record<string, ValidationDefinition>;
}

type ConstraintDefinitions = EmptyConstraintDefinition;

type ObjectDefinition = TypeDefinition & ConstraintDefinitions;

export default ObjectDefinition;
