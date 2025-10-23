export function isValidDate(d: unknown) {
  return d instanceof Date && !Number.isNaN(d.getTime());
}
