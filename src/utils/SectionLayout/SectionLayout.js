import React from 'react';

import { BootsContainer } from '../BootsElements/BootsElements';

import { StyledSection } from './SectionLayout.styles';

const SectionLayout = ({ className, padding, children }) => (
  <StyledSection padding={padding} className={className}>
    <BootsContainer className="innerContainer">{children}</BootsContainer>
  </StyledSection>
);

export default SectionLayout;
