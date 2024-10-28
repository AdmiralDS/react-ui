export const createItems = (length: number) => {
  return Array.from({ length }).map((_option, index) => ({ label: `${index}0000`, id: String(index) }));
};
