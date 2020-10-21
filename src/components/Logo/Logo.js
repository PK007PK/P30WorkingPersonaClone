import React from 'react';
import PropTypes from 'prop-types';

import { StyledWrap, StyledP, StyledSpan } from './Logo.style';

const Logo = ({ className, secondary }) => (
  <StyledP secondary={secondary} className={className}>
    Obywatel
    <StyledSpan className="logoTxtSec">kontra ZUS</StyledSpan>
  </StyledP>
);

Logo.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  secondary: PropTypes.bool,
};

export default Logo;
