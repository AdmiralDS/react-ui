// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isValidDate(d: any) {
  return d instanceof Date && !isNaN(d.getTime());
}
