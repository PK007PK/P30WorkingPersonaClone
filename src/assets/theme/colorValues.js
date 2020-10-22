import colorValuesCustom from '../../customization/themeCustom/colorValuesCustom';

const {
  lightBlue,
  blue,
  deepBlue,
  pink,
  white,
  black,
  color1,
  color2,
  color3,
  color4,
  background1,
  background2,
  background3,
  background4,
  mainBody,
  mainLogo,
  additionalLogo,
  mainHeading,
  extraHeading,
  naviColor,
  lead,
  active,
  mainButton,
  secondaryButton,
} = colorValuesCustom;

const colorValues = {
  lightBlue: lightBlue || '#EDF7FF',
  blue: blue || '#ADCCE4',
  deepBlue: deepBlue || '#313548',
  pink: pink || '#EB4962',
  //
  white: white || '#FFFFFF',
  black: black || '#000000',
  //
  color1: color1 || '#EDF7FF',
  color2: color2 || '#ADCCE4',
  color3: color3 || '#313548',
  color4: color4 || '#EB4962',
  background1: background1 || '#313548',
  background2: background2 || null,
  background3: background3 || null,
  background4: background4 || null,
  //
  mainBody: mainBody || '#313548',
  mainLogo: mainLogo || '#4C4C4C',
  additionalLogo: additionalLogo || '#4C4C4C',
  mainHeading: mainHeading || null,
  extraHeading: extraHeading || null,
  naviColor: naviColor || '#4F4C4C',
  lead: lead || null,
  active: active || '#EB4962',
  mainButton: mainButton || '#EB4962',
  secondaryButton: secondaryButton || '#313548',
};

export default colorValues;
