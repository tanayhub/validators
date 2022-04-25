import ValidationError from "../errors";

export type ValidationFunction = (payload: any) => null | ValidationError[];

export interface BasicValidator {
  validate: ValidationFunction;
}

export interface BasicSchemaValidator extends BasicValidator {
  validateType(payload: any): null | ValidationError[];
}

export type TypePrefix = "value" | "length";
