import { Violation } from "./general";

export class ValidationError extends Error {
  public readonly name = "ValidationError";
  public readonly errors: Violation[];

  constructor(errors: Violation[]) {
    super();
    this.errors = errors;
  }
}
