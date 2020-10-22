import React from 'react';
import PropTypes from 'prop-types';
import LogoCustom from '../../customization/componentsCustom/CustomLogo/CustomLogo';

import { LogoStyle } from './Logo.style';

const DefaultLogo = () => (
  <LogoStyle>
    <span className="logoTxtSec">modern</span>
    <p>WebPersona</p>
  </LogoStyle>
);

const Logo = ({ className, light }) => (
  <>
    {LogoCustom ? (
      <LogoCustom className={className} light={light} />
    ) : (
      <DefaultLogo className={className} light={light} />
    )}
  </>
);

Logo.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  light: PropTypes.bool,
};

export default Logo;
