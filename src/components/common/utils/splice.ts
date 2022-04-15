export function splice(oldString: string, start: number, delCount: number, newSubStr: string): string {
  return oldString.slice(0, start) + newSubStr + oldString.slice(start + Math.abs(delCount));
}
