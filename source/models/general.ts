export type ValidationFunction = (payload: any) => void;

export class ValidationError extends Error {
    public readonly path: string;
    public readonly type: string;
    public readonly expected: string;
    public readonly received: string;

    constructor(path: string, type: string, expected: string, received: string) {
        super();
        this.path = path;
        this.type = type;
        this.expected = expected;
        this.received = received;
    }
}
