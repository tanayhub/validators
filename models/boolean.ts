import { EmptyConstraintDefinition } from "./commons";

interface TypeDefinition {
    type: "boolean";
}

interface EqualityConstraintDefinition {
    constraint: "equality";
    value: boolean;
}

interface InequalityConstraintDefinition {
    constraint: "inequality";
    value: boolean;
}

type ConstraintDefinitions =
    | EmptyConstraintDefinition
    | EqualityConstraintDefinition
    | InequalityConstraintDefinition;

type BooleanDefinition = TypeDefinition & ConstraintDefinitions;

export default BooleanDefinition;
