import { ValidationError } from "models/errors";
import { Violation, ValidationFunction } from "models/general";
import { TypeSchema } from "models/types";
import { typeSchema } from "validators/types";

export class SchemaValidator {
  private readonly validations: ValidationFunction[];

  constructor(...schemas: TypeSchema[]) {
    this.validations = schemas.map(typeSchema);
  }

  validate(payload: any): void {
    const errors: Violation[] = [];
    for (const validate of this.validations) {
      const result = validate(payload);
      if (result.length === 0) return;
      errors.push(...result);
    }
    throw new ValidationError(errors);
  }
}
