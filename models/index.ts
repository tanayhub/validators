import ArrayDefinition from "./array";
import BooleanDefinition from "./boolean";
import NumberDefinition from "./number";
import ObjectDefinition from "./object";
import StringDefinition from "./string";

type ValidationDefinition =
    | StringDefinition
    | NumberDefinition
    | BooleanDefinition
    | ArrayDefinition
    | ObjectDefinition;

export default ValidationDefinition;
