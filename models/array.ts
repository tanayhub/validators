import BooleanDefinition from "./boolean";
import { EmptyConstraintDefinition, RangeDefinition } from "./commons";
import NumberDefinition from "./number";
import StringDefinition from "./string";

interface TypeDefinition {
    type: "array";
    items: NumberDefinition | StringDefinition | BooleanDefinition;
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
