import { Hybrid } from "./models/helper";

export function hybridToArray<Type>(value: Hybrid<Type>): Type[] {
  return Array.isArray(value) ? value : [value];
}
