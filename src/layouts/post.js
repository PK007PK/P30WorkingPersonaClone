import React from "react"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import { StyledSectionLayout } from "./post.style"

export const query = graphql`
  query querySingleArticle($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        author
        date
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
    <StyledSectionLayout>
      <Image fluid={data.mdx.frontmatter.featuredImage.childImageSharp.fluid} />
      <h1>{data.mdx.frontmatter.title}</h1>
      <div className="wrapper">
        <p className="author">Autor: {data.mdx.frontmatter.author}</p>
        <span className="date">Data: {data.mdx.frontmatter.date}</span>
      </div>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </StyledSectionLayout>
  )
}

export default PostLayout
