import { camelCase, isArray, isObject, mapKeys } from "lodash";

export function convertKeysToCamelCase(obj: any): any {
  if (isArray(obj)) {
    return obj.map((item) => convertKeysToCamelCase(item));
  } else if (isObject(obj)) {
    return mapKeys(obj, (value, key) => camelCase(key));
  }
  return obj;
}