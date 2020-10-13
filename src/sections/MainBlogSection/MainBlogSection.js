import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import slugify from 'slugify';
import SectionLayout from '../../utils/SectionLayout/SectionLayout';

import {
  StyledCardVerticalBlogEntry,
  StyledWrapper,
} from './MainBlogSection.style';

const MainBlogSection = () => {
  const data = useStaticQuery(query);
  return (
    <SectionLayout padding="50px 0 50px 0px">
      <StyledWrapper>
        {data.allDatoCmsNews.nodes.map(item => (
          <StyledCardVerticalBlogEntry
            date={item.date}
            title={item.title}
            text={item.articleContent[0].paragraphContentNode.childMdx.excerpt}
            slug={slugify(item.title, { lower: true })}
            key={item.id}
            background={item.featuredImage && item.featuredImage.fluid}
            youtube={item.youtube}
          />
        ))}
      </StyledWrapper>
    </SectionLayout>
  );
};

const query = graphql`
  {
    allDatoCmsNews(sort: { fields: [date], order: DESC }) {
      nodes {
        author
        date
        title
        id
        youtube
        featuredImage {
          fluid(maxWidth: 500) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
        articleContent {
          ... on DatoCmsParagraph {
            paragraphContentNode {
              childMdx {
                body
                excerpt(pruneLength: 220)
              }
            }
          }
        }
      }
    }
  }
`;

export default MainBlogSection;
