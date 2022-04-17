import { BasicValidator } from "../models/helper";
import { SchemaType } from "../models/schemas";
import {
  AnySchemaValidator,
  ArraySchemaValidator,
  BooleanSchemaValidator,
  FunctionSchemaValidator,
  HybridSchemaValidator,
  NullSchemaValidator,
  NumberSchemaValidator,
  ObjectSchemaValidator,
  StringSchemaValidator,
  UndefinedSchemaValidator,
} from "./schemas";

export class Validator implements BasicValidator {
  private readonly validators: AnySchemaValidator[];

  constructor(...schemas: SchemaType[]) {
    this.validators = schemas.map((schema) => {
      if (schema.type === "array") {
        return new ArraySchemaValidator(schema);
      } else if (schema.type === "boolean") {
        return new BooleanSchemaValidator(schema);
      } else if (schema.type === "function") {
        return new FunctionSchemaValidator(schema);
      } else if (schema.type === "hybrid") {
        return new HybridSchemaValidator(schema);
      } else if (schema.type === "null") {
        return new NullSchemaValidator(schema);
      } else if (schema.type === "number") {
        return new NumberSchemaValidator(schema);
      } else if (schema.type === "object") {
        return new ObjectSchemaValidator(schema);
      } else if (schema.type === "string") {
        return new StringSchemaValidator(schema);
      } else if (schema.type === "undefined") {
        return new UndefinedSchemaValidator(schema);
      } else {
        return new AnySchemaValidator();
      }
    });
  }

  public validate(payload: any): null | string[] {
    const errors: string[] = [];
    for (const validator of this.validators) {
      const result = validator.validate(payload);
      if (Array.isArray(result)) errors.push(...result);
      else return null;
    }
    return errors.length > 0 ? errors : null;
  }
}
