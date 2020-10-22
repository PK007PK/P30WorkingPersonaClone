import h1ValuesCustom from '../../customization/themeCustom/h1ValuesCustom';

const { fontSize, lineHeight, fontWeight, letterSpacing } = h1ValuesCustom;

const h1Values = {
  fontSize: {
    base: fontSize.base || '5rem',
    xs: fontSize.xs || null,
    sm: fontSize.sm || null,
    md: fontSize.md || null,
    lg: fontSize.lg || null,
    xxl: fontSize.xxl || null,
  },
  lineHeight: {
    base: lineHeight.base || '1.2em',
    xs: lineHeight.xs || null,
    sm: lineHeight.sm || null,
    md: lineHeight.md || null,
    lg: lineHeight.lg || null,
    xl: lineHeight.xl || null,
  },
  fontWeight: fontWeight || '700',
  letterSpacing: letterSpacing || '-3px',
};

export default h1Values;
