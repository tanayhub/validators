import ValidationDefinition from ".";
import { EmptyConstraintDefinition, RangeDefinition } from "./commons";

interface TypeDefinition {
    type: "array";
    items: ValidationDefinition;
}

interface LengthProperty {
    length: number;
}

interface LengthRangeProperty {
    lengthRange: Partial<RangeDefinition>;
}

interface LengthEqualityConstraintDefinition extends LengthProperty {
    constraint: "length-equality";
}

interface LengthInequalityConstraintDefinition extends LengthProperty {
    constraint: "length-inequality";
}

interface LengthRangeConstraintDefinition extends LengthRangeProperty {
    constraint: "length-range";
}

type LengthConstraintDefinition =
    | LengthEqualityConstraintDefinition
    | LengthInequalityConstraintDefinition
    | LengthRangeConstraintDefinition;

type ConstraintDefinitions = EmptyConstraintDefinition | LengthConstraintDefinition;

type ArrayDefinition = TypeDefinition & ConstraintDefinitions;

export default ArrayDefinition;
