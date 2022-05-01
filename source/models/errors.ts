import { Violation } from "./general";

export class ValidationError extends Error {
  public readonly name = "ValidationError";
  public readonly violations: Violation[];

  constructor(violations: Violation[]) {
    super();
    this.violations = violations;
  }
}
