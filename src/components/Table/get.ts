export const get = <T extends object>(source: T, path: string, defaultValue = undefined) => {
  const arrPath = typeof path === 'string' ? path.match(/[^[\].]+/g) : path;
  if (!(arrPath && arrPath.length)) return;
  const result = arrPath.reduce<any>((obj, key) => obj && obj[key], source);
  return result || defaultValue;
};
