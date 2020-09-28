import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import HeadingSubpage from "../Sections/HeadingSubpage/HeadingSubpage"
import MainBlogSection from "../Sections/MainBlogSection/MainBlogSection"
const BlogPage = ({ data }) => {
  const title = data.datoCmsSiteSetup.siteTitle + " - blog"
  return (
    <>
      <Helmet title={title} />
      <article>
        <HeadingSubpage
          fluid={data.datoCmsSiteSetup.blogPageHeroImage.fluid}
          title={"blog"}
          slug={"#blog"}
          description={data.datoCmsSiteSetup.blogPageDescription}
        />
        <MainBlogSection />
      </article>
    </>
  )
}

export const query = graphql`
  {
    datoCmsSiteSetup {
      siteTitle
      blogPageDescription
      blogPageHeroImage {
        fluid(maxWidth: 650, maxHeight: 500) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`

export default BlogPage
