import bodyValuesCustom from '../../customization/themeCustom/bodyValuesCustom';

const { fontSize, lineHeight, fontWeight, letterSpacing } = bodyValuesCustom;

const bodyValues = {
  fontSize: {
    base: fontSize.base || '1.6rem',
    xs: fontSize.xs || null,
    sm: fontSize.sm || null,
    md: fontSize.md || null,
    lg: fontSize.lg || null,
    xxl: fontSize.xxl || null,
  },
  lineHeight: {
    base: lineHeight.base || '1.5em',
    xs: lineHeight.xs || null,
    sm: lineHeight.sm || null,
    md: lineHeight.md || null,
    lg: lineHeight.lg || null,
    xl: lineHeight.xl || null,
  },
  fontWeight: fontWeight || '500',
  letterSpacing: letterSpacing || null,
};

export default bodyValues;
