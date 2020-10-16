import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import slugify from 'slugify';

import HeadingWrapper from '../../components/HeadingWrapper/HeadingWrapper';
import Button from '../../components/Button/Button';

import {
  StyledSectionLayout,
  StyledCardFullWidthBlogPostEntry,
  StyledButtonWrapper,
} from './RecentlyAdded.style';

const FeaturedNewsSection = () => {
  const data = useStaticQuery(query);
  return (
    <StyledSectionLayout padding="50px 0 50px 0px">
      <HeadingWrapper
        title="Najnowsze wpisy"
        txtColor={({ theme }) => theme.color.color3}
        backgroundColor={({ theme }) => theme.color.white}
      />

      {data.allDatoCmsNews.nodes.map(item => (
        <StyledCardFullWidthBlogPostEntry
          date={item.date}
          title={item.title}
          slug={slugify(item.title, { lower: true })}
          key={item.id}
          background={item.featuredImage && item.featuredImage.fluid}
          youtube={item.youtube}
        />
      ))}
      <StyledButtonWrapper>
        <Button to="/blog">Wszystkie wpisy na blogu</Button>
      </StyledButtonWrapper>
    </StyledSectionLayout>
  );
};

const query = graphql`
  {
    allDatoCmsNews(sort: { fields: [date], order: DESC }, limit: 3) {
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
                excerpt(pruneLength: 120)
              }
            }
          }
        }
      }
    }
  }
`;

export default FeaturedNewsSection;
