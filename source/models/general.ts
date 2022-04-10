export type ForcedArray<Type> = [Type, Type, ...Type[]];

export type ValidationFunction = (payload: any) => true | string[];
