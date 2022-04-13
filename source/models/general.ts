export type ForcedArray<Type> = [Type, Type, ...Type[]];

export type Hybrid<Type> = Type | ForcedArray<Type>;

export type ValidationFunction = (payload: any) => true | string[];
