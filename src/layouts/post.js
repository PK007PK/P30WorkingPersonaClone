import React from "react"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"

import YouTube from "../components/YouTube/YouTube"

import { StyledSectionLayout, StyledPostNavigation } from "./post.style"

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsNews(id: { eq: $id }) {
      title
      date
      youtube
      featuredImage {
        fluid(maxWidth: 1000) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      author
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
            fluid(maxWidth: 1000) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          id
        }
      }
    }
  }
`

const PostLayout = ({ data }) => {
  return (
    <StyledSectionLayout>
      <div className="headingWrapper">
        <div className="imgWrapper">
          {data.datoCmsNews.youtube ? (
            <>
              <YouTube videoId={data.datoCmsNews.youtube} />
            </>
          ) : (
            <>
              <Image
                className="image"
                fluid={data.datoCmsNews.featuredImage.fluid}
              />
            </>
          )}
        </div>
        <div className="textWrapper">
          <h1>{data.datoCmsNews.title}</h1>
          <div>
            <p className="author">Autor: {data.datoCmsNews.author}</p>
            <span className="date">Data: {data.datoCmsNews.date}</span>
          </div>
        </div>
      </div>
      <div className="mainPostBody">
        {data.datoCmsNews.articleContent.map(item => {
          const itemKey = Object.keys(item)[1]
          switch (itemKey) {
            case "paragraphContentNode":
              return (
                <div key={item.id}>
                  <MDXRenderer>
                    {item.paragraphContentNode.childMdx.body}
                  </MDXRenderer>
                </div>
              )
            case "headingContent":
              return <h2 key={item.id}>{item.headingContent}</h2>
            case "imageData":
              return (
                <Image
                  className="articleImg"
                  key={item.id}
                  fluid={item[itemKey].fluid}
                />
              )
            default:
              return null
          }
        })}
      </div>
      <StyledPostNavigation>
        <ul>
          <li>
            <a href="javascript:history.back()">Powrót</a>
          </li>
          <li>
            <Link to="/blog">Wszystkie artykuły</Link>
          </li>
        </ul>
      </StyledPostNavigation>
    </StyledSectionLayout>
  )
}

export default PostLayout
