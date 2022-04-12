export const hexToRgba = (hex: string, opacity?: number) => {
  const hexValue = hex.replace('#', '');
  const hexValueDivided = hexValue.match(new RegExp(`(.{${hexValue.length / 3}})`, 'g'));
  const rgbaValue = [];

  if (!hexValueDivided) {
    throw new Error('Incorrect color srting');
  }

  for (let i = 0; i < hexValueDivided.length; i++) {
    rgbaValue[i] = parseInt(
      hexValueDivided[i].length == 1 ? hexValueDivided[i] + hexValueDivided[i] : hexValueDivided[i],
      16,
    );
  }

  if (opacity !== undefined) {
    rgbaValue.push(opacity);
  }

  return `rgba(${rgbaValue.join(',')})`;
};
