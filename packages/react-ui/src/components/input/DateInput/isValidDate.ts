export function isValidDate(d: any) {
  return d instanceof Date && !isNaN(d.getTime());
}
