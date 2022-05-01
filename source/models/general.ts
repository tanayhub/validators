export type Hybrid<Type> = Type | Type[];

export type Equality = Hybrid<number> | Hybrid<string> | boolean;

export type Class = new () => unknown;

export class Violation {
  public path?: string;
  public message: string;
  public readonly expected: unknown;
  public readonly received: unknown;

  constructor(message: string, expected: unknown, received: unknown) {
    this.message = message;
    this.expected = expected;
    this.received = received;
  }
}

export type Primitive = number | string | boolean;

export type ValidationFunction = (payload: any) => Violation[];
