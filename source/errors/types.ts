import ValidationError from ".";

export default class DataTypeValidationError extends ValidationError {
  public readonly type: string = "datatype";
}
