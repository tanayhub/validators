export type Hybrid<Type> = Type | Type[];

export interface Violation {
  path?: string;
  error: string;
  expected: unknown;
  received: unknown;
}

export type ValidationFunction = (payload: unknown) => Violation[];
