import h3ValuesCustom from '../../customization/themeCustom/h3ValuesCustom';

const { fontSize, lineHeight, fontWeight, letterSpacing } = h3ValuesCustom;

const h3Values = {
  fontSize: {
    base: fontSize.base || null,
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
  fontWeight: fontWeight || null,
  letterSpacing: letterSpacing || null,
};

export default h3Values;
