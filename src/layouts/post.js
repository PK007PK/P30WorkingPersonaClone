import React from 'react';
import Image from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import YouTube from '../components/YouTube/YouTube';
import Button from '../components/Button/Button';
import SocialShare from '../components/SocialShare/SocialShare';

import { BootsRow, BootsColumn } from '../utils/BootsElements/BootsElements';
import { StyledSectionLayout, StyledImgPlaceholder } from './post.style';

const slugify = require('slugify');

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsNews(id: { eq: $id }) {
      articleContent {
        ... on DatoCmsParagraph {
          paragraphContentNode {
            childMdx {
              excerpt(pruneLength: 400)
            }
          }
        }
      }
      title
      date
      youtube
      featuredImage {
        fluid(maxWidth: 600) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      author
      leadText
      articleContent {
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
    }
    allDatoCmsNews {
      edges {
        previous {
          id
        }
        next {
          id
        }
        node {
          title
          date
          youtube
          author
        }
      }
    }
    datoCmsSiteSetup {
      messengerId
    }
  }
`;

const PostLayout = ({ data, pageContext }) => {
  const nextArticleLink =
    pageContext.nextArticle &&
    `/blog/${slugify(pageContext.nextArticle, { lower: true })}`;
  const previousArticleLink =
    pageContext.previousArticle &&
    `/blog/${slugify(pageContext.previousArticle, { lower: true })}`;

  return (
    <>
      <Helmet title={data.datoCmsNews.title} />
      <StyledSectionLayout>
        <div className="headingWrapper">
          <div className="imgWrapper">
            {data.datoCmsNews.youtube ? (
              <YouTube videoId={data.datoCmsNews.youtube} />
            ) : data.datoCmsNews.featuredImage ? (
              <Image
                className="image"
                fluid={data.datoCmsNews.featuredImage.fluid}
                alt={data.datoCmsNews.featuredImage.alt}
              />
            ) : (
              <StyledImgPlaceholder light />
            )}
          </div>
          <div className="textWrapper">
            <h1>{data.datoCmsNews.title}</h1>
            <div>
              {data.datoCmsNews.author && (
                <p className="author">`Autor: ${data.datoCmsNews.author}`</p>
              )}
              <span className="date">Data: {data.datoCmsNews.date}</span>
            </div>
          </div>
        </div>
        <div className="mainPostBody">
          <BootsRow>
            <BootsColumn md="8" lg="9">
              <div className="mainText">
                {data.datoCmsNews.articleContent.map(item => {
                  const itemKey = Object.keys(item)[1];
                  switch (itemKey) {
                    case 'paragraphContentNode':
                      return (
                        <div key={item.id}>
                          <p className="lead">{data.datoCmsNews.leadText}</p>
                          <MDXRenderer>
                            {item.paragraphContentNode.childMdx.body}
                          </MDXRenderer>
                        </div>
                      );
                    case 'headingContent':
                      return <h2 key={item.id}>{item.headingContent}</h2>;
                    case 'imageData':
                      return (
                        <Image
                          className="articleImg"
                          key={item.id}
                          fluid={item[itemKey].fluid}
                        />
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            </BootsColumn>
            <BootsColumn md="4" lg="3">
              <div className="buttons">
                <Button to="/blog/1">Wszystkie artykuły</Button>
                <Button
                  to={previousArticleLink}
                  className={!previousArticleLink && 'diseabled'}
                  diseabled={!previousArticleLink && ''}
                >
                  Następny artykuł
                </Button>
                <Button
                  to={nextArticleLink}
                  className={!nextArticleLink && 'diseabled'}
                  diseabled={!nextArticleLink && ''}
                >
                  Poprzedni artykuł
                </Button>
              </div>
              <div className="socials">
                <SocialShare
                  title={data.datoCmsNews.title}
                  excerpt={
                    data.datoCmsNews.articleContent[0].paragraphContentNode
                      .childMdx.excerpt
                  }
                  messengerID={data.datoCmsSiteSetup.messengerID}
                />
              </div>
            </BootsColumn>
          </BootsRow>
        </div>
      </StyledSectionLayout>
    </>
  );
};

export default PostLayout;
