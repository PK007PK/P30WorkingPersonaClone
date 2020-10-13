import React from 'react';
import { StyledWrap, StyledP, StyledSpan } from './Logo.style';

const Logo = ({ className, secondary }) => (
  <StyledP secondary={secondary} className={className}>
    Obywatel
    <StyledSpan className="logoTxtSec">kontra ZUS</StyledSpan>
  </StyledP>
);

export default Logo;
