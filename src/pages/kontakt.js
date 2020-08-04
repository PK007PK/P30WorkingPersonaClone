import React from "react"

import Heading from "../components/Sections/00Heading/00Heading"

const KontaktPage = ({ data }) => (
  <>
    <Heading txt={"Kontakt"} data={data} />{" "}
  </>
)

export const query = graphql`
  {
    file(name: { eq: "tlo06" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default KontaktPage
