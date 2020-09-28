// export const theme = {
//   fontSize: {
//     xs: "1.2rem",
//     sm: "1.6rem",
//     md: "2.5rem",
//     lg: "3.5rem",
//     xxl: "5rem",
//   },

//   lineHeight: {
//     regular: "1.5",
//   },

//   fontWeight: {
//     regular: "300",
//     medium: "500",
//     bold: "700",
//   },

//   color: {
//     white: "#FFFFFF",
//     black: "#000000",
//     lightBlue: "#EDF7FF",
//     blue: "#ADCCE4",
//     deepBlue: "#313548",
//     pink: "#EB4962",
//     mainTextColor: "#0F3554",
//     active: "#D3AFA0",
//   },
//   media: {
//     xsAbove: `@media (min-width: 576px)`,
//     xsBelow: `@media (max-width: 575px)`,
//     smAbove: `@media (min-width: 768px)`,
//     smBelow: `@media (max-width: 767px)`,
//     mdAbove: `@media (min-width: 992px)`,
//     mdBelow: `@media (max-width: 991px)`,
//     lgAbove: `@media (min-width: 1200px)`,
//     lgBelow: `@media (max-width: 1199px)`,
//     xlAbove: `@media (min-width: 1550px)`,
//     xlBelow: `@media (max-width: 1549px)`,
//   },
// }

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
  background1: "#1C1C1C",
  background2: null,
  background3: null,
  background4: null,
  //
  mainBody: "#1C1C1C",
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
  fontWeight: "400",
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
  fontWeight: "300",
  letterSpacing: null,
}

const h1Values = {
  fontSize: {
    base: "3rem",
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
  letterSpacing: "-2%",
}

const h2Values = {
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
