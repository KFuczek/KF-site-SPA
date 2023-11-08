export const getColor = (): string => {
  const hue = 360 * Math.random();
  const saturation = 100;
  const lightness = 50;

  return `hsl(${hue},${saturation}%,${lightness}%`;
};

export const getHSLColorObject = (): {
  hue: number;
  saturation: number;
  lightness: number;
} => {
  const hue = 360 * Math.random();
  const saturation = 100;
  const lightness = 50;

  return {
    hue,
    saturation,
    lightness
  };
};
