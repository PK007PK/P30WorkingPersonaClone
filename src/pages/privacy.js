import React from "react"
import { graphql } from "gatsby"

import HeadingSubpage from "../components/Sections/HeadingSubpage/HeadingSubpage"

import PlainTextSection from "../components/Sections/PlainTextSection/PlainTextSection"

const KontaktPage = ({ data }) => (
  <>
    <HeadingSubpage
      data={data}
      title={"polityka prywatności"}
      slug={"#polityka"}
      description={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel odio at leo euismod dignissim id eu risus. Aliquam quis consectetur nisi, vel ullamcorper lorem. Q"
      }
    />
    <PlainTextSection />
  </>
)

export const query = graphql`
  {
    file(name: { eq: "privacy" }) {
      childImageSharp {
        fluid(maxWidth: 550, maxHeight: 395, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default KontaktPage
