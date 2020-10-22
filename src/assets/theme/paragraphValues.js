import paragraphValuesCustom from '../../customization/themeCustom/paragraphValuesCustom';

const {
  fontSize,
  lineHeight,
  fontWeight,
  letterSpacing,
} = paragraphValuesCustom;

const paragraphValues = {
  fontSize: {
    base: fontSize.base || '1.6rem',
    xs: fontSize.xs || null,
    sm: fontSize.sm || null,
    md: fontSize.md || '1.8rem',
    lg: fontSize.lg || null,
    xxl: fontSize.xxl || null,
  },
  lineHeight: {
    base: lineHeight.base || '1.6',
    xs: lineHeight.xs || null,
    sm: lineHeight.sm || null,
    md: lineHeight.md || null,
    lg: lineHeight.lg || null,
    xl: lineHeight.xl || null,
  },
  fontWeight: fontWeight || '500',
  letterSpacing: letterSpacing || null,
};

export default paragraphValues;
