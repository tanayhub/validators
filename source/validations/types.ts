export function isArray(payload: any): payload is any[] {
  return Array.isArray(payload);
}

export function isBoolean(payload: any): payload is boolean {
  return typeof payload === "boolean" || payload instanceof Boolean;
}

export function isFunction(payload: any): payload is CallableFunction {
  return typeof payload === "function" || payload instanceof Function;
}

export function isNull(payload: any): payload is null {
  return payload === null;
}

export function isNumber(payload: any): payload is number {
  return typeof payload === "number" || payload instanceof Number;
}

export function isObject(payload: any): payload is object {
  return (
    typeof payload === "object" && payload !== null && !Array.isArray(payload)
  );
}

export function isString(payload: any): payload is string {
  return typeof payload === "string" || payload instanceof String;
}

export function isUndefined(payload: any): payload is undefined {
  return typeof payload === "undefined";
}
