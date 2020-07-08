import React from "react"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import Wrapper from "../utilities/SectionLayout/SectionLayout"

export const query = graphql`
  query querySingleArticle($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        author
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 800) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      body
    }
  }
`

const PostLayout = ({ data }) => {
  return (
    <Wrapper>
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>{data.mdx.frontmatter.author}</p>
      <span>{data.mdx.frontmatter.date}</span>
      <Image fluid={data.mdx.frontmatter.featuredImage.childImageSharp.fluid} />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Wrapper>
  )
}

export default PostLayout
