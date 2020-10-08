import React from "react"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  WhatsappShareButton,
  EmailShareButton,
  LinkedinShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  WhatsappIcon,
  EmailIcon,
  LinkedinIcon,
} from "react-share"

import YouTube from "../components/YouTube/YouTube"
import Button from "../components/Button/Button"

import { BootsRow, BootsColumn } from "../utils/BootsElements/BootsElements"
import { StyledSectionLayout } from "./post.style"

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

const PostLayout = ({ data, pageContext }) => {
  console.log(pageContext)
  return (
    <>
      <Helmet title={data.datoCmsNews.title} />
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
            <BootsColumn md="8" lg="9">
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
            <BootsColumn md="4" lg="3">
              <div className="buttons">
                <Button to="/blog">Wszystkie artykuły</Button>
                <Button to="/blog">Poprzedni artykuł</Button>
                <Button to="/blog">Następny artykuły</Button>
              </div>
              <div className="socials">
                <FacebookShareButton
                  className="social__button"
                  url={
                    typeof window !== "undefined" ? window.location.href : ""
                  }
                >
                  <FacebookIcon size={45} round />
                </FacebookShareButton>
                <FacebookMessengerShareButton
                  url={
                    typeof window !== "undefined" ? window.location.href : ""
                  }
                  appId="xxx"
                  className="social__button"
                >
                  <FacebookMessengerIcon size={45} round />
                </FacebookMessengerShareButton>
                <WhatsappShareButton
                  url={
                    typeof window !== "undefined" ? window.location.href : ""
                  }
                  title={data.datoCmsNews.title}
                  separator=":: "
                  className="social__button"
                >
                  <WhatsappIcon size={45} round />
                </WhatsappShareButton>
                <EmailShareButton
                  className="social__button"
                  url={
                    typeof window !== "undefined" ? window.location.href : ""
                  }
                  subject={data.datoCmsNews.title}
                  body={
                    data.datoCmsNews.articleContent[0].paragraphContentNode
                      .childMdx.excerpt
                  }
                  separator="<br></br><br></br>"
                >
                  <EmailIcon size={45} round />
                </EmailShareButton>

                <LinkedinShareButton
                  className="social__button"
                  title={data.datoCmsNews.title}
                  summary={
                    data.datoCmsNews.articleContent[0].paragraphContentNode
                      .childMdx.excerpt
                  }
                  source={
                    typeof window !== "undefined" ? window.location.href : ""
                  }
                  url={
                    typeof window !== "undefined" ? window.location.href : ""
                  }
                >
                  <LinkedinIcon size={45} round />
                </LinkedinShareButton>
              </div>
            </BootsColumn>
          </BootsRow>
        </div>
      </StyledSectionLayout>
    </>
  )
}

export default PostLayout
