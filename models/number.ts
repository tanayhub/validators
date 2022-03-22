import { EmptyConstraintDefinition, RangeDefinition } from "./commons";

interface TypeDefinition {
    type: "number";
}

interface RangeConstraintDefinition {
    constraint: "range";
    range: Partial<RangeDefinition>;
}

interface EqualityConstraintDefinition {
    constraint: "equality";
    value: number;
}

interface InequalityConstraintDefinition {
    constraint: "inequality";
    value: number;
}

type ConstraintDefinitions =
    | EmptyConstraintDefinition
    | RangeConstraintDefinition
    | EqualityConstraintDefinition
    | InequalityConstraintDefinition;

type NumberDefinition = TypeDefinition & ConstraintDefinitions;

export default NumberDefinition;
