function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const bigint = parseInt(hex.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

function rgbToString({ r, g, b }: { r: number; g: number; b: number }): string {
  return `rgb(${r}, ${g}, ${b})`;
}

function rgbaToString(
  { r, g, b }: { r: number; g: number; b: number },
  a: number
): string {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function hexToRgbaString(hex: string, a: number): string {
  return a ? rgbaToString(hexToRgb(hex), a) : rgbToString(hexToRgb(hex));
}

export default function generateBackground(
  colors: string[],
  alpha: number
): string {
  const gradientBreakpoints: string[] =
    colors.length > 1
      ? colors
          .slice(0, 2)
          .map((color, idx) => `${hexToRgbaString(color, alpha)} ${idx * 100}%`)
      : ['blue'];

  const backgroundGradient =
    colors.length > 1
      ? `linear-gradient(90deg, ${gradientBreakpoints.join(', ')})`
      : hexToRgbaString(colors[0], alpha);

  return backgroundGradient;
}
