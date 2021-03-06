import { ValidationFunction, Violation } from "../models/general";
import {
  TypeArray,
  TypeBoolean,
  TypeFunction,
  TypeNull,
  TypeNumber,
  TypeObject,
  TypeSchema,
  TypeString,
  TypeUndefined,
} from "../models/types";
import {
  fieldIsInstanceOf,
  fieldIsInteger,
  fieldItems,
  fieldLength,
  fieldOrder,
  fieldPattern,
  fieldProperties,
  fieldValue,
} from "./fields";

export function typeArray(schema: TypeArray): ValidationFunction {
  const { items, order, length } = schema;
  const validations: ValidationFunction[] = [];

  if (items !== undefined) validations.push(fieldItems(items));
  if (order !== undefined) validations.push(fieldOrder(order));
  if (length !== undefined) validations.push(fieldLength(length));

  return (payload: unknown) => {
    if (!Array.isArray(payload)) {
      const message = "expected datatype did not satisfy";
      return [new Violation(message, "array", typeof payload)];
    }
    return validations.map((validate) => validate(payload)).flat();
  };
}

export function typeBoolean(schema: TypeBoolean): ValidationFunction {
  const { value } = schema;
  const validations: ValidationFunction[] = [];

  if (value !== undefined) validations.push(fieldValue(value));

  return (payload: unknown) => {
    if (typeof payload !== "boolean" && !(payload instanceof Boolean)) {
      const message = "expected datatype did not satisfy";
      return [new Violation(message, "boolean", typeof payload)];
    }
    return validations.map((validate) => validate(payload)).flat();
  };
}

export function typeFunction(schema: TypeFunction): ValidationFunction {
  schema.type === "function";
  const validations: ValidationFunction[] = [];

  return (payload: unknown) => {
    if (typeof payload !== "function") {
      const message = "expected datatype did not satisfy";
      return [new Violation(message, "function", typeof payload)];
    }
    return validations.map((validate) => validate(payload)).flat();
  };
}

export function typeNull(schema: TypeNull): ValidationFunction {
  schema.type === "null";
  const validations: ValidationFunction[] = [];

  return (payload: unknown) => {
    if (payload !== null) {
      const message = "expected datatype did not satisfy";
      return [new Violation(message, "null", typeof payload)];
    }
    return validations.map((validate) => validate(payload)).flat();
  };
}

export function typeNumber(schema: TypeNumber): ValidationFunction {
  const { value, isInteger } = schema;
  const validations: ValidationFunction[] = [];

  if (value !== undefined) validations.push(fieldValue(value));
  if (isInteger !== undefined) validations.push(fieldIsInteger(isInteger));

  return (payload: unknown) => {
    if (typeof payload !== "number" && !(payload instanceof Number)) {
      const message = "expected datatype did not satisfy";
      return [new Violation(message, "number", typeof payload)];
    }
    return validations.map((validate) => validate(payload)).flat();
  };
}

export function typeObject(schema: TypeObject): ValidationFunction {
  const { isInstanceOf, properties } = schema;
  const validations: ValidationFunction[] = [];

  if (isInstanceOf !== undefined)
    validations.push(fieldIsInstanceOf(isInstanceOf));
  if (properties !== undefined) validations.push(fieldProperties(properties));

  return (payload: unknown) => {
    if (
      typeof payload !== "object" ||
      payload === null ||
      Array.isArray(payload)
    ) {
      const message = "expected datatype did not satisfy";
      return [new Violation(message, "object", typeof payload)];
    }
    return validations.map((validate) => validate(payload)).flat();
  };
}

export function typeString(schema: TypeString): ValidationFunction {
  const { length, value, pattern } = schema;
  const validations: ValidationFunction[] = [];

  if (length !== undefined) validations.push(fieldLength(length));
  if (value !== undefined) validations.push(fieldValue(value));
  if (pattern !== undefined) validations.push(fieldPattern(pattern));

  return (payload: unknown) => {
    if (typeof payload !== "string" && !(payload instanceof String)) {
      const message = "expected datatype did not satisfy";
      return [new Violation(message, "string", typeof payload)];
    }
    return validations.map((validate) => validate(payload)).flat();
  };
}

export function typeUndefined(schema: TypeUndefined): ValidationFunction {
  schema.type === "undefined";
  const validations: ValidationFunction[] = [];

  return (payload: unknown) => {
    if (payload !== undefined) {
      const message = "expected datatype did not satisfy";
      return [new Violation(message, "undefined", typeof payload)];
    }
    return validations.map((validate) => validate(payload)).flat();
  };
}

export function typeSchema(schema: TypeSchema): ValidationFunction {
  if (schema.type === "array") return typeArray(schema);
  else if (schema.type === "boolean") return typeBoolean(schema);
  else if (schema.type === "function") return typeFunction(schema);
  else if (schema.type === "null") return typeNull(schema);
  else if (schema.type === "number") return typeNumber(schema);
  else if (schema.type === "object") return typeObject(schema);
  else if (schema.type === "string") return typeString(schema);
  else if (schema.type === "undefined") return typeUndefined(schema);
  else return () => [];
}
