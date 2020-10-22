import buttonValuesCustom from '../../customization/themeCustom/buttonValuesCustom';

const { fontSize, lineHeight, fontWeight, letterSpacing } = buttonValuesCustom;

const buttonValues = {
  fontSize: {
    base: fontSize.base || null,
    xs: fontSize.xs || null,
    sm: fontSize.sm || null,
    md: fontSize.md || null,
    lg: fontSize.lg || null,
    xxl: fontSize.xxl || null,
  },
  lineHeight: {
    base: lineHeight.base || null,
    xs: lineHeight.xs || null,
    sm: lineHeight.sm || null,
    md: lineHeight.md || null,
    lg: lineHeight.lg || null,
    xl: lineHeight.xl || null,
  },
  fontWeight: fontWeight || null,
  letterSpacing: letterSpacing || null,
};

export default buttonValues;
