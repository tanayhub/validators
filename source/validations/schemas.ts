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

  public validateType(payload: any): null | string[] {
    return null;
  }

  public validate(payload: any): null | string[] {
    const typeResult = this.validateType(payload);
    if (typeResult) return typeResult;
    const errors: string[] = [];
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
    if (tuple !== undefined) {
      validations.push(validateTuple(tuple));
    }
    if (items !== undefined) {
      validations.push(validateItems(items));
    }
    super(...validations);
  }

  public validateType(payload: any): null | string[] {
    return isArray(payload) ? null : ["datatype:array"];
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

  public validateType(payload: any): null | string[] {
    return isBoolean(payload) ? null : ["datatype:boolean"];
  }
}

export class FunctionSchemaValidator extends AnySchemaValidator {
  constructor(schema: FunctionSchema) {
    super();
  }

  public validateType(payload: any): null | string[] {
    return isFunction(payload) ? null : ["datatype:function"];
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

  public validateType(payload: any): null | string[] {
    return isNull(payload) ? null : ["datatype:null"];
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

  public validateType(payload: any): null | string[] {
    return isNumber(payload) ? null : ["datatype:number"];
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

  public validateType(payload: any): null | string[] {
    return isObject(payload) ? null : ["datatype:object"];
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
    if (pattern !== undefined) {
      validations.push(validatePattern(pattern));
    }
    super(...validations);
  }

  public validateType(payload: any): null | string[] {
    return isString(payload) ? null : ["datatype:string"];
  }
}

export class UndefinedSchemaValidator extends AnySchemaValidator {
  constructor(schema: UndefinedSchema) {
    super();
  }

  public validateType(payload: any): null | string[] {
    return isUndefined(payload) ? null : ["datatype:undefined"];
  }
}
