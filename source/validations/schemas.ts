import {
  BasicSchemaValidator,
  Hybrid,
  ValidationFunction,
} from "../models/helper";
import {
  ArraySchema,
  BooleanSchema,
  FunctionSchema,
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
  validateMax,
  validateMin,
  validateNotEqualTo,
  validateOrder,
  validatePattern,
  validateProperties,
  validateSchemas,
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

export class SchemaValidator implements BasicSchemaValidator {
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

export class ArraySchemaValidator extends SchemaValidator {
  constructor(schema: ArraySchema) {
    const validations: ValidationFunction[] = [];
    const { length, order, schemas } = schema;
    if (length !== undefined) {
      const { equalTo, max, min, notEqualTo } = length;
      if (equalTo !== undefined) {
        validations.push(validateEqualTo<Hybrid<number>>(equalTo));
      }
      if (max !== undefined) {
        validations.push(validateMax(max));
      }
      if (min !== undefined) {
        validations.push(validateMin(min));
      }
      if (notEqualTo !== undefined) {
        validations.push(validateNotEqualTo<Hybrid<number>>(notEqualTo));
      }
    }
    if (order !== undefined) {
      validations.push(validateOrder(order));
    }
    if (schemas !== undefined) {
      validations.push(validateSchemas(schemas));
    }
    super(...validations);
  }

  public validateType(payload: any): null | string[] {
    return isArray(payload) ? null : ["datatype:array"];
  }
}

export class BooleanSchemaValidator extends SchemaValidator {
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

export class FunctionSchemaValidator extends SchemaValidator {
  constructor(schema: FunctionSchema) {
    super();
  }

  public validateType(payload: any): null | string[] {
    return isFunction(payload) ? null : ["datatype:function"];
  }
}

export class NullSchemaValidator extends SchemaValidator {
  constructor(schema: NullSchema) {
    super();
  }

  public validateType(payload: any): null | string[] {
    return isNull(payload) ? null : ["datatype:null"];
  }
}

export class NumberSchemaValidator extends SchemaValidator {
  constructor(schema: NumberSchema) {
    const validations: ValidationFunction[] = [];
    const { value, integer } = schema;
    if (value !== undefined) {
      const { equalTo, max, min, notEqualTo } = value;
      if (equalTo !== undefined) {
        validations.push(validateEqualTo<Hybrid<number>>(equalTo));
      }
      if (max !== undefined) {
        validations.push(validateMax(max));
      }
      if (min !== undefined) {
        validations.push(validateMin(min));
      }
      if (notEqualTo !== undefined) {
        validations.push(validateNotEqualTo<Hybrid<number>>(notEqualTo));
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

export class ObjectSchemaValidator extends SchemaValidator {
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

export class StringSchemaValidator extends SchemaValidator {
  constructor(schema: StringSchema) {
    const validations: ValidationFunction[] = [];
    const { value, length, pattern } = schema;
    if (value !== undefined) {
      const { equalTo, notEqualTo } = value;
      if (equalTo !== undefined) {
        validations.push(validateEqualTo<Hybrid<string>>(equalTo));
      }
      if (notEqualTo !== undefined) {
        validations.push(validateNotEqualTo<Hybrid<string>>(notEqualTo));
      }
    }
    if (length !== undefined) {
      const { equalTo, max, min, notEqualTo } = length;
      if (equalTo !== undefined) {
        validations.push(validateEqualTo<Hybrid<number>>(equalTo));
      }
      if (max !== undefined) {
        validations.push(validateMax(max));
      }
      if (min !== undefined) {
        validations.push(validateMin(min));
      }
      if (notEqualTo !== undefined) {
        validations.push(validateNotEqualTo<Hybrid<number>>(notEqualTo));
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

export class UndefinedSchemaValidator extends SchemaValidator {
  constructor(schema: UndefinedSchema) {
    super();
  }

  public validateType(payload: any): null | string[] {
    return isUndefined(payload) ? null : ["datatype:undefined"];
  }
}
