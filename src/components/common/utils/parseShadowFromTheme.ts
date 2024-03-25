/** Утилита, введенная на время перехода с styled-components theme на custom css properties
 * Утилита будет удалена одновременно со старым механизмом темизации
 */
export const parseShadow = (token: string) => {
  let result = token;
  result = result.replace('box-shadow: ', '');
  result = result.replace(';', '');
  return result;
};
