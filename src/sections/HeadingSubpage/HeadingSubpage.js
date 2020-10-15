import React from 'react';

import {
  StyledSection,
  StyledTxtWrapper,
  StyledImageWrapper,
  StyledImage,
  StyledDiv,
} from './HeadingSubpage.style.js';

import BootstrapContainer from '../../utils/BootstrapContainer/BootstrapContainer';

const HeadingSubpage = ({ fluid, alt, title, slug, description }) => (
  <BootstrapContainer>
    <StyledSection>
      <StyledTxtWrapper>
        <span className="slug">{slug}</span>
        <h1>{title}</h1>
        <p className="description">{description}</p>
      </StyledTxtWrapper>
      <StyledImageWrapper>
        <StyledImage fluid={fluid} alt={alt} />
        {console.log(alt)}
        <StyledDiv />
      </StyledImageWrapper>
    </StyledSection>
  </BootstrapContainer>
);

export default HeadingSubpage;
