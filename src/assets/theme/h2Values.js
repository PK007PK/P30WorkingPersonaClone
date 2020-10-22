import h2ValuesCustom from '../../customization/themeCustom/h2ValuesCustom';

const { fontSize, lineHeight, fontWeight, letterSpacing } = h2ValuesCustom;

const h2Values = {
  fontSize: {
    base: fontSize.base || '3rem',
    xs: fontSize.xs || null,
    sm: fontSize.sm || null,
    md: fontSize.md || null,
    lg: fontSize.lg || null,
    xxl: fontSize.xxl || null,
  },
  lineHeight: {
    base: lineHeight.base || '1.5',
    xs: lineHeight.xs || null,
    sm: lineHeight.sm || null,
    md: lineHeight.md || null,
    lg: lineHeight.lg || null,
    xl: lineHeight.xl || null,
  },
  fontWeight: fontWeight || 700,
  letterSpacing: letterSpacing || null,
};

export default h2Values;
