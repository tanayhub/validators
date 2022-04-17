import { BasicValidator, Hybrid } from "../models/helper";
import { AnySchema } from "../models/schemas";
import { hybridToArray } from "../utilities";
import {
  ArraySchemaValidator,
  BooleanSchemaValidator,
  FunctionSchemaValidator,
  NullSchemaValidator,
  NumberSchemaValidator,
  ObjectSchemaValidator,
  SchemaValidator,
  StringSchemaValidator,
  UndefinedSchemaValidator,
} from "./schemas";

export class Validator implements BasicValidator {
  private readonly validators: SchemaValidator[];

  constructor(...schemas: AnySchema[]) {
    this.validators = schemas.map((schema) => {
      if (schema.type === "array") {
        return new ArraySchemaValidator(schema);
      } else if (schema.type === "boolean") {
        return new BooleanSchemaValidator(schema);
      } else if (schema.type === "function") {
        return new FunctionSchemaValidator(schema);
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
        return new SchemaValidator();
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
