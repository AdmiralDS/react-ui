export const createItems = (length: number) => {
  return Array.from({ length }).map((option, index) => ({ label: `${index}0000`, id: String(index) }));
};
