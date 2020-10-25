import React from 'react';
import PropTypes from 'prop-types';

import { StyledWrap, StyledP, StyledSpan } from './CustomLogo.style';

const Logo = ({ className, secondary }) => (
  <StyledP secondary={secondary} className={className}>
    Anna Pazdro
    <StyledSpan className="logoTxtSec">#blog specjalistyczny</StyledSpan>
  </StyledP>
);

Logo.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  secondary: PropTypes.bool,
};

export default Logo;
