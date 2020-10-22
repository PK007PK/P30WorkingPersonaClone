import naviValuesCustom from '../../customization/themeCustom/naviValuesCustom';

const { fontSize, lineHeight, fontWeight, letterSpacing } = naviValuesCustom;

const naviValues = {
  fontSize: {
    base: fontSize.base || '1.8rem',
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
  fontWeight: fontWeight || '300',
  letterSpacing: letterSpacing || '-1px',
};

export default naviValues;
