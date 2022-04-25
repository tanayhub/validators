export default class ValidationError extends Error {
  public readonly name: string = "ValidationError";
  public readonly type: string = "unknown";
  public path: string = "";
  public readonly received: string;
  public readonly expected: string;

  constructor(received: any, expected: any) {
    super();
    this.received = JSON.stringify(received) ?? received.toString();
    this.expected = JSON.stringify(expected) ?? expected.toString();
  }
}
