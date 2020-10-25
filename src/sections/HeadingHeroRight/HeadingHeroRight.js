import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import IconYT from '../../components/IconYT/IconYT';
import IconFB from '../../components/IconFB/IconFB';

import {
  StyledSection,
  StyledTxtWrapper,
  StyledImage,
  StyledButton,
} from './HeadingHeroRight.styles.js';

const HeadingHeroRight = () => {
  const data = useStaticQuery(query);
  return (
    <header>
      <StyledSection>
        <StyledTxtWrapper>
          <div />
          <div>
            <p className="subtitle">{data.datoCmsSiteSetup.mainPageMotto}</p>
            <h1>Prawo Ochrony Zdrowia</h1>
            <p className="subtitle2">
              {data.datoCmsSiteSetup.mainPageDescription}
            </p>
            <div className="buttonWrapper">
              <a
                href={data.datoCmsSiteSetup.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <IconFB />
              </a>
              <StyledButton
                small
                href={data.datoCmsSiteSetup.youtubeChanelLink}
              >
                {' '}
                Sprawdź mój vlog <IconYT small />
              </StyledButton>
            </div>
          </div>
          <div />
        </StyledTxtWrapper>
        <StyledImage
          fluid={data.datoCmsSiteSetup.mainPageHeroImage.fluid}
          alt={data.datoCmsSiteSetup.mainPageHeroImage.alt}
        />
      </StyledSection>
    </header>
  );
};

const query = graphql`
  {
    datoCmsSiteSetup {
      mainPageMotto
      mainPageAdditionalText
      mainPageDescription
      youtubeChanelLink
      facebookLink
      mainPageHeroImage {
        fluid(maxWidth: 700) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
        alt
      }
    }
  }
`;

export default HeadingHeroRight;
