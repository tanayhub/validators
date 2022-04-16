export type Tuple<Type> = [Type, Type, ...Type[]];

export type Hybrid<Type> = Type | Tuple<Type>;

export type ValidationFunction = (payload: any) => null | string[];

export interface BasicValidator {
  validate: ValidationFunction;
}

export interface BasicSchemaValidator extends BasicValidator {
  validateType(payload: any): null | string[];
}
