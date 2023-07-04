/**
 * Pick<T, Exclude<keyof T, Keys>> return the set of properties which are the keys of T, but not included in Keys
 *
 * for each K in Keys generate type where K is required and other props in Keys are optional
 * { [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>> }[Keys]
 *
 * return the union type of previously mentioned results
 */

export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];
