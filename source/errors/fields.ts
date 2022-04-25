import ValidationError from ".";
import { TypePrefix } from "../models/helper";

export class EqualityValidationError extends ValidationError {
  public readonly type: string = "equality";

  constructor(type: TypePrefix, received: any, expected: any) {
    super(received, expected);
    this.type = `${type}/equality`;
  }
}

export class InstanceValidationError extends ValidationError {
  public readonly type: string = "instance";
}

export class NumberValidationError extends ValidationError {
  public readonly type: string = "number";
  constructor(type: TypePrefix, received: any, expected: any) {
    super(received, expected);
    this.type = `${type}`;
  }
}

export class InequalityValidationError extends ValidationError {
  public readonly type: string = "inequality";

  constructor(type: TypePrefix, received: any, expected: any) {
    super(received, expected);
    this.type = `${type}/inequality`;
  }
}

export class PatternValidationError extends ValidationError {
  public readonly type: string = "pattern";
}
