import ValidationError from "../errors";
import DataTypeValidationError from "../errors/types";
import { BasicSchemaValidator, ValidationFunction } from "../models/helper";
import {
  ArraySchema,
  BooleanSchema,
  FunctionSchema,
  HybridSchema,
  NullSchema,
  NumberSchema,
  ObjectSchema,
  StringSchema,
  UndefinedSchema,
} from "../models/schemas";
import {
  validateEqualTo,
  validateInstance,
  validateInteger,
  validateItems,
  validateMax,
  validateMin,
  validateNotEqualTo,
  validatePattern,
  validatePossible,
  validateProperties,
  validateTuple,
} from "./fields";
import {
  isArray,
  isBoolean,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isString,
  isUndefined,
} from "./types";

export class AnySchemaValidator implements BasicSchemaValidator {
  private readonly validations: ValidationFunction[];

  constructor(...validations: ValidationFunction[]) {
    this.validations = validations;
  }

  public validateType(payload: any): null | ValidationError[] {
    return null;
  }

  public validate(payload: any): null | ValidationError[] {
    const typeResult = this.validateType(payload);
    if (typeResult) return typeResult;
    const errors: ValidationError[] = [];
    for (const validate of this.validations) {
      const result = validate(payload);
      if (Array.isArray(result)) errors.push(...result);
    }
    return errors.length > 0 ? errors : null;
  }
}

export class ArraySchemaValidator extends AnySchemaValidator {
  constructor(schema: ArraySchema) {
    const validations: ValidationFunction[] = [];
    const { length, tuple, items } = schema;
    if (length !== undefined) {
      const { equalTo, max, min, notEqualTo } = length;
      if (equalTo !== undefined) {
        validations.push(validateEqualTo<number>(equalTo, "length"));
      }
      if (max !== undefined) {
        validations.push(validateMax(max, "length"));
      }
      if (min !== undefined) {
        validations.push(validateMin(min, "length"));
      }
      if (notEqualTo !== undefined) {
        validations.push(validateNotEqualTo<number>(notEqualTo, "length"));
      }
    }
    if (tuple !== undefined) {
      validations.push(validateTuple(tuple));
    }
    if (items !== undefined) {
      validations.push(validateItems(items));
    }
    super(...validations);
  }

  public validateType(payload: any): null | ValidationError[] {
    return isArray(payload)
      ? null
      : [new DataTypeValidationError(typeof payload, "array")];
  }
}

export class BooleanSchemaValidator extends AnySchemaValidator {
  constructor(schema: BooleanSchema) {
    const validations: ValidationFunction[] = [];
    const { value } = schema;
    if (value !== undefined) {
      const { equalTo, notEqualTo } = value;
      if (equalTo !== undefined) {
        validations.push(validateEqualTo<boolean>(equalTo));
      }
      if (notEqualTo !== undefined) {
        validations.push(validateNotEqualTo<boolean>(notEqualTo));
      }
    }
    super(...validations);
  }

  public validateType(payload: any): null | ValidationError[] {
    return isBoolean(payload)
      ? null
      : [new DataTypeValidationError(typeof payload, "boolean")];
  }
}

export class FunctionSchemaValidator extends AnySchemaValidator {
  constructor(schema: FunctionSchema) {
    super();
  }

  public validateType(payload: any): null | ValidationError[] {
    return isFunction(payload)
      ? null
      : [new DataTypeValidationError(typeof payload, "function")];
  }
}

export class HybridSchemaValidator extends AnySchemaValidator {
  constructor(schema: HybridSchema) {
    super(validatePossible(schema.possible));
  }
}

export class NullSchemaValidator extends AnySchemaValidator {
  constructor(schema: NullSchema) {
    super();
  }

  public validateType(payload: any): null | ValidationError[] {
    return isNull(payload)
      ? null
      : [new DataTypeValidationError(typeof payload, "null")];
  }
}

export class NumberSchemaValidator extends AnySchemaValidator {
  constructor(schema: NumberSchema) {
    const validations: ValidationFunction[] = [];
    const { value, integer } = schema;
    if (value !== undefined) {
      const { equalTo, max, min, notEqualTo } = value;
      if (equalTo !== undefined) {
        validations.push(validateEqualTo<number>(equalTo));
      }
      if (max !== undefined) {
        validations.push(validateMax(max));
      }
      if (min !== undefined) {
        validations.push(validateMin(min));
      }
      if (notEqualTo !== undefined) {
        validations.push(validateNotEqualTo<number>(notEqualTo));
      }
    }
    if (integer !== undefined) {
      validations.push(validateInteger(integer));
    }
    super(...validations);
  }

  public validateType(payload: any): null | ValidationError[] {
    return isNumber(payload)
      ? null
      : [new DataTypeValidationError(typeof payload, "number")];
  }
}

export class ObjectSchemaValidator extends AnySchemaValidator {
  constructor(schema: ObjectSchema) {
    const validations: ValidationFunction[] = [];
    const { properties, instance } = schema;
    if (properties !== undefined) {
      validations.push(validateProperties(properties));
    }
    if (instance !== undefined) {
      validations.push(validateInstance(instance));
    }
    super(...validations);
  }

  public validateType(payload: any): null | ValidationError[] {
    if (isObject(payload)) {
      return null;
    } else if (isNull(payload)) {
      return [new DataTypeValidationError("null", "object")];
    } else if (isArray(payload)) {
      return [new DataTypeValidationError("array", "object")];
    } else {
      return [new DataTypeValidationError(typeof payload, "object")];
    }
  }
}

export class StringSchemaValidator extends AnySchemaValidator {
  constructor(schema: StringSchema) {
    const validations: ValidationFunction[] = [];
    const { value, length, pattern } = schema;
    if (value !== undefined) {
      const { equalTo, notEqualTo } = value;
      if (equalTo !== undefined) {
        validations.push(validateEqualTo<string>(equalTo));
      }
      if (notEqualTo !== undefined) {
        validations.push(validateNotEqualTo<string>(notEqualTo));
      }
    }
    if (length !== undefined) {
      const { equalTo, max, min, notEqualTo } = length;
      if (equalTo !== undefined) {
        validations.push(validateEqualTo<number>(equalTo, "length"));
      }
      if (max !== undefined) {
        validations.push(validateMax(max, "length"));
      }
      if (min !== undefined) {
        validations.push(validateMin(min, "length"));
      }
      if (notEqualTo !== undefined) {
        validations.push(validateNotEqualTo<number>(notEqualTo, "length"));
      }
    }
    if (pattern !== undefined) {
      validations.push(validatePattern(pattern));
    }
    super(...validations);
  }

  public validateType(payload: any): null | ValidationError[] {
    return isString(payload)
      ? null
      : [new DataTypeValidationError(typeof payload, "string")];
  }
}

export class UndefinedSchemaValidator extends AnySchemaValidator {
  constructor(schema: UndefinedSchema) {
    super();
  }

  public validateType(payload: any): null | ValidationError[] {
    return isUndefined(payload)
      ? null
      : [new DataTypeValidationError(typeof payload, "undefined")];
  }
}
