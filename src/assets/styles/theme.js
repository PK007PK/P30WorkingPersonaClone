const colorValues = {
  lightBlue: "#EDF7FF",
  blue: "#ADCCE4",
  deepBlue: "#313548",
  pink: "#EB4962",
  //
  white: "#FFFFFF",
  black: "#000000",
  //
  color1: "#EDF7FF",
  color2: "#ADCCE4",
  color3: "#313548",
  color4: "#EB4962",
  background1: "#313548",
  background2: null,
  background3: null,
  background4: null,
  //
  mainBody: "#313548",
  mainLogo: "#4C4C4C",
  additionalLogo: "#4C4C4C",
  mainHeading: null,
  extraHeading: null,
  naviColor: "#4F4C4C",
  lead: null,
  active: "#EB4962",
  mainButton: "#EB4962",
  secondaryButton: "#313548",
}

const bodyValues = {
  fontSize: {
    base: "1.6rem",
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xxl: null,
  },
  lineHeight: {
    base: "1.5em",
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xxl: null,
  },
  fontWeight: "500",
  letterSpacing: null,
}

const paragraphValues = {
  fontSize: {
    base: "1.6rem",
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xxl: null,
  },
  lineHeight: {
    base: "2em",
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xxl: null,
  },
  fontWeight: "500",
  letterSpacing: null,
}

const h1Values = {
  fontSize: {
    base: "5rem",
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xxl: null,
  },
  lineHeight: {
    base: "1.2em",
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xxl: null,
  },
  fontWeight: "700",
  letterSpacing: "-3px",
}

const h2Values = {
  fontSize: {
    base: "3rem",
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xxl: null,
  },
  lineHeight: {
    base: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xxl: null,
  },
  fontWeight: 700,
  letterSpacing: null,
}

const h3Values = {
  fontSize: {
    base: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xxl: null,
  },
  lineHeight: {
    base: "1.5em",
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xxl: null,
  },
  fontWeight: null,
  letterSpacing: null,
}

const leadValues = {
  fontSize: {
    base: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xxl: null,
  },
  lineHeight: {
    base: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xxl: null,
  },
  fontWeight: null,
  letterSpacing: null,
}

const buttonValues = {
  fontSize: {
    base: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xxl: null,
  },
  lineHeight: {
    base: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xxl: null,
  },
  fontWeight: null,
  letterSpacing: null,
}

const naviValues = {
  fontSize: {
    base: "1.8rem",
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xxl: null,
  },
  lineHeight: {
    base: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xxl: null,
  },
  fontWeight: "300",
  letterSpacing: "-1px",
}

export const theme = {
  fontSize: {
    xs: "1.2rem",
    sm: "1.6rem",
    md: "2.5rem",
    lg: "3.5rem",
    xxl: "8rem",
  },

  lineHeight: {
    regular: "1.5",
  },

  font: {
    mainFont: "Montserrat",
    headingFonts: null,
    logoFonts: "Ubuntu",
    fancyFonts: `Covered By Your Grace`,
  },

  fontWeight: {
    light: "300",
    regular: "400",
    medium: "500",
    bold: "700",
  },

  transition: {
    custom: `all 0.3s cubic-bezier(.25,.8,.25,1);`,
    material: ``,
  },

  elevation: {
    dp1: `0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);`,
    dp2: `0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);`,
    dp3: `0 3px 3px -2px rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12);`,
    dp4: `0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);`,
    dp5: `0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);`,
    dp6: `0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);`,
    dp7: `0 4px 5px -2px rgba(0,0,0,.2), 0 7px 10px 1px rgba(0,0,0,.14), 0 2px 16px 1px rgba(0,0,0,.12);`,
    dp8: `0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);`,
    dp9: `0 5px 6px -3px rgba(0,0,0,.2), 0 9px 12px 1px rgba(0,0,0,.14), 0 3px 16px 2px rgba(0,0,0,.12);`,
    dp10: `0 6px 6px -3px rgba(0,0,0,.2), 0 10px 14px 1px rgba(0,0,0,.14), 0 4px 18px 3px rgba(0,0,0,.12);}`,
    dp11: `0 6px 7px -4px rgba(0,0,0,.2), 0 11px 15px 1px rgba(0,0,0,.14), 0 4px 20px 3px rgba(0,0,0,.12);`,
    dp12: `0 7px 8px -4px rgba(0,0,0,.2), 0 12px 17px 2px rgba(0,0,0,.14), 0 5px 22px 4px rgba(0,0,0,.12);`,
    dp13: `0 7px 8px -4px rgba(0,0,0,.2), 0 13px 19px 2px rgba(0,0,0,.14), 0 5px 24px 4px rgba(0,0,0,.12);`,
    dp14: `0 7px 9px -4px rgba(0,0,0,.2), 0 14px 21px 2px rgba(0,0,0,.14), 0 5px 26px 4px rgba(0,0,0,.12);`,
    dp15: `0 8px 9px -5px rgba(0,0,0,.2), 0 15px 22px 2px rgba(0,0,0,.14), 0 6px 28px 5px rgba(0,0,0,.12)`,
    dp16: `0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12)`,
    dp17: `0 8px 11px -5px rgba(0,0,0,.2), 0 17px 26px 2px rgba(0,0,0,.14), 0 6px 32px 5px rgba(0,0,0,.12)`,
    dp18: `0 9px 11px -5px rgba(0,0,0,.2), 0 18px 28px 2px rgba(0,0,0,.14), 0 7px 34px 6px rgba(0,0,0,.12)`,
    dp19: `0 9px 12px -6px rgba(0,0,0,.2), 0 19px 29px 2px rgba(0,0,0,.14), 0 7px 36px 6px rgba(0,0,0,.12)`,
    dp20: `0 10px 13px -6px rgba(0,0,0,.2), 0 20px 31px 3px rgba(0,0,0,.14), 0 8px 38px 7px rgba(0,0,0,.12)`,
    dp21: `0 10px 13px -6px rgba(0,0,0,.2), 0 21px 33px 3px rgba(0,0,0,.14), 0 8px 40px 7px rgba(0,0,0,.12)`,
    dp22: `0 10px 14px -6px rgba(0,0,0,.2), 0 22px 35px 3px rgba(0,0,0,.14), 0 8px 42px 7px rgba(0,0,0,.12)`,
    dp23: `0 11px 14px -7px rgba(0,0,0,.2), 0 23px 36px 3px rgba(0,0,0,.14), 0 9px 44px 8px rgba(0,0,0,.12)`,
    dp24: `0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)`,
  },

  body: {
    fontSize: {
      base: bodyValues.fontSize.base,
      xs: bodyValues.fontSize.xs,
      sm: bodyValues.fontSize.sm,
      md: bodyValues.fontSize.md,
      lg: bodyValues.fontSize.lg,
      xxl: bodyValues.fontSize.xxl,
    },
    lineHeight: {
      base: bodyValues.lineHeight.base,
      xs: bodyValues.lineHeight.xs,
      sm: bodyValues.lineHeight.sm,
      md: bodyValues.lineHeight.md,
      lg: bodyValues.lineHeight.lg,
      xxl: bodyValues.lineHeight.xxl,
    },
    fontWeight: bodyValues.fontWeight,
    letterSpacing: bodyValues.letterSpacing,
  },

  paragraph: {
    fontSize: {
      base: paragraphValues.fontSize.base,
      xs: paragraphValues.fontSize.xs,
      sm: paragraphValues.fontSize.sm,
      md: paragraphValues.fontSize.md,
      lg: paragraphValues.fontSize.lg,
      xxl: paragraphValues.fontSize.xxl,
    },
    lineHeight: {
      base: paragraphValues.lineHeight.base,
      xs: paragraphValues.lineHeight.xs,
      sm: paragraphValues.lineHeight.sm,
      md: paragraphValues.lineHeight.md,
      lg: paragraphValues.lineHeight.lg,
      xxl: paragraphValues.lineHeight.xxl,
    },
    fontWeight: paragraphValues.fontWeight,
    letterSpacing: paragraphValues.letterSpacing,
  },

  h1: {
    fontSize: {
      base: h1Values.fontSize.base,
      xs: h1Values.fontSize.xs,
      sm: h1Values.fontSize.sm,
      md: h1Values.fontSize.md,
      lg: h1Values.fontSize.lg,
      xxl: h1Values.fontSize.xxl,
    },
    lineHeight: {
      base: h1Values.lineHeight.base,
      xs: h1Values.lineHeight.xs,
      sm: h1Values.lineHeight.sm,
      md: h1Values.lineHeight.md,
      lg: h1Values.lineHeight.lg,
      xxl: h1Values.lineHeight.xxl,
    },
    fontWeight: h1Values.fontWeight,
    letterSpacing: h1Values.letterSpacing,
  },

  h2: {
    fontSize: {
      base: h2Values.fontSize.base,
      sm: h2Values.fontSize.sm,
      xs: h2Values.fontSize.xs,
      md: h2Values.fontSize.md,
      lg: h2Values.fontSize.lg,
      xxl: h2Values.fontSize.xxl,
    },
    lineHeight: {
      base: h2Values.lineHeight.base,
      xs: h2Values.lineHeight.xs,
      sm: h2Values.lineHeight.sm,
      md: h2Values.lineHeight.md,
      lg: h2Values.lineHeight.lg,
      xxl: h2Values.lineHeight.xxl,
    },
    fontWeight: h2Values.fontWeight,
    letterSpacing: h2Values.letterSpacing,
  },

  h3: {
    fontSize: {
      base: h3Values.fontSize.base,
      sm: h3Values.fontSize.sm,
      xs: h3Values.fontSize.xs,
      md: h3Values.fontSize.md,
      lg: h3Values.fontSize.lg,
      xxl: h3Values.fontSize.xxl,
    },
    lineHeight: {
      base: h3Values.lineHeight.base,
      xs: h3Values.lineHeight.xs,
      sm: h3Values.lineHeight.sm,
      md: h3Values.lineHeight.md,
      lg: h3Values.lineHeight.lg,
      xxl: h3Values.lineHeight.xxl,
    },
    fontWeight: h3Values.fontWeight,
    letterSpacing: h3Values.letterSpacing,
  },

  lead: {
    fontSize: {
      base: leadValues.fontSize.base,
      sm: leadValues.fontSize.sm,
      xs: leadValues.fontSize.xs,
      md: leadValues.fontSize.md,
      lg: leadValues.fontSize.lg,
      xxl: leadValues.fontSize.xxl,
    },
    lineHeight: {
      base: leadValues.lineHeight.base,
      xs: leadValues.lineHeight.xs,
      sm: leadValues.lineHeight.sm,
      md: leadValues.lineHeight.md,
      lg: leadValues.lineHeight.lg,
      xxl: leadValues.lineHeight.xxl,
    },
    fontWeight: leadValues.fontWeight,
    letterSpacing: leadValues.letterSpacing,
  },

  button: {
    fontSize: {
      base: buttonValues.fontSize.base,
      sm: buttonValues.fontSize.sm,
      xs: buttonValues.fontSize.xs,
      md: buttonValues.fontSize.md,
      lg: buttonValues.fontSize.lg,
      xxl: buttonValues.fontSize.xxl,
    },
    lineHeight: {
      base: buttonValues.lineHeight.base,
      xs: buttonValues.lineHeight.xs,
      sm: buttonValues.lineHeight.sm,
      md: buttonValues.lineHeight.md,
      lg: buttonValues.lineHeight.lg,
      xxl: buttonValues.lineHeight.xxl,
    },
    fontWeight: buttonValues.fontWeight,
    letterSpacing: buttonValues.letterSpacing,
  },

  navi: {
    fontSize: {
      base: naviValues.fontSize.base,
      sm: naviValues.fontSize.sm,
      xs: naviValues.fontSize.xs,
      md: naviValues.fontSize.md,
      lg: naviValues.fontSize.lg,
      xxl: naviValues.fontSize.xxl,
    },
    lineHeight: {
      base: naviValues.lineHeight.base,
      xs: naviValues.lineHeight.xs,
      sm: naviValues.lineHeight.sm,
      md: naviValues.lineHeight.md,
      lg: naviValues.lineHeight.lg,
      xxl: naviValues.lineHeight.xxl,
    },
    fontWeight: naviValues.fontWeight,
    letterSpacing: naviValues.letterSpacing,
  },

  color: {
    white: colorValues.white,
    black: colorValues.black,
    //
    color1: colorValues.color1,
    color2: colorValues.color2,
    color3: colorValues.color3,
    color4: colorValues.color4,
    background1: colorValues.background1,
    background2: colorValues.background2,
    background3: colorValues.background3,
    background4: colorValues.background4,
    //
    mainBody: colorValues.mainBody,
    mainLogo: colorValues.mainLogo,
    additionalLogo: colorValues.additionalLogo,
    mainHeading: colorValues.mainHeading,
    extraHeading: colorValues.extraHeading,
    naviColor: colorValues.naviColor,
    lead: colorValues.lead,
    active: colorValues.active,
    mainButton: colorValues.mainButton,
    secondaryButton: colorValues.secondaryButton,
  },

  breakpoint: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1550,
  },
  media: {
    xsAbove: `@media (min-width: 576px)`,
    xsBelow: `@media (max-width: 575px)`,
    smAbove: `@media (min-width: 768px)`,
    smBelow: `@media (max-width: 767px)`,
    mdAbove: `@media (min-width: 992px)`,
    mdBelow: `@media (max-width: 991px)`,
    lgAbove: `@media (min-width: 1200px)`,
    lgBelow: `@media (max-width: 1199px)`,
    xlAbove: `@media (min-width: 1550px)`,
    xlBelow: `@media (max-width: 1549px)`,
  },
}
