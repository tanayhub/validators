export type Hybrid<Type> = Type | Type[];

export type Equality = Hybrid<number> | Hybrid<string> | boolean;

export class Violation {
  public path?: string;
  public readonly error: string;
  public readonly expected: unknown;
  public readonly received: unknown;

  constructor(error: string, expected: unknown, received: unknown) {
    this.error = error;
    this.expected = expected;
    this.received = received;
  }
}

export type Primitive = number | string | boolean;

export type ValidationFunction = (payload: any) => Violation[];
