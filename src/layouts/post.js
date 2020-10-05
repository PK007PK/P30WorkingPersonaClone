import React from "react"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import {
  FacebookShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share"

import {
  FacebookIcon,
  EmailIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share"

import YouTube from "../components/YouTube/YouTube"
import Button from "../components/Button/Button"

import { BootsRow, BootsColumn } from "../utilities/BootsElements/BootsElements"
import { StyledSectionLayout, StyledPostNavigation } from "./post.style"

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsNews(id: { eq: $id }) {
      title
      date
      youtube
      featuredImage {
        fluid(maxWidth: 600) {
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
            fluid(maxWidth: 600) {
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
    <>
      <Helmet title={data.datoCmsNews.title}></Helmet>
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
          <BootsRow>
            <BootsColumn lg="9">
              <div className="mainText">
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
            </BootsColumn>
            <BootsColumn lg="3">
              <Button to="/blog">Wszystkie artykuły</Button>
              <FacebookShareButton>
                <FacebookIcon></FacebookIcon>
              </FacebookShareButton>
              <EmailShareButton>
                <EmailIcon></EmailIcon>
              </EmailShareButton>
              <LinkedinShareButton>
                <LinkedinIcon></LinkedinIcon>
              </LinkedinShareButton>{" "}
              <TwitterShareButton>
                <TwitterIcon></TwitterIcon>
              </TwitterShareButton>
              <WhatsappShareButton>
                <WhatsappIcon></WhatsappIcon>
              </WhatsappShareButton>
            </BootsColumn>
          </BootsRow>
        </div>
      </StyledSectionLayout>
    </>
  )
}

export default PostLayout
