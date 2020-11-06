import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import HeadingSubpage from '../sections/HeadingSubpage/HeadingSubpage';
import PlainTextSection from '../sections/PlainTextSection/PlainTextSection';

const UslugiPage = ({ data }) => {
  const title = `${data.datoCmsSiteSetup.siteTitle} - usługi`;
  return (
    <>
      <Helmet title={title} />
      <article>
        <HeadingSubpage
          fluid={data.datoCmsSiteSetup.uslugiPageHeroImage.fluid}
          title="usługi"
          slug="#usługi"
          description={data.datoCmsSiteSetup.uslugiPageDescription}
          alt={data.datoCmsSiteSetup.uslugiPageHeroImage.alt}
        />
        <PlainTextSection data={data.datoCmsSiteSetup.uslugiArticleContent} />
      </article>
    </>
  );
};

export const query = graphql`
  {
    datoCmsSiteSetup {
      siteTitle
      uslugiPageDescription
      uslugiArticleContent {
        ... on DatoCmsParagraph {
          paragraphContentNode {
            childMdx {
              body
            }
          }
          id
        }
        ... on DatoCmsHeading {
          headingContent
          id
        }
        ... on DatoCmsArticleImage {
          imageData {
            fluid(maxWidth: 600) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
            alt
          }
          id
        }
      }
      uslugiPageHeroImage {
        fluid(maxWidth: 650, maxHeight: 500) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`;

export default UslugiPage;
