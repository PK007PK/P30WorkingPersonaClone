import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "gatsby-image"

import { StyledSectionLayout } from "./PlainTextSection.style"

const PlainTextSection = data => (
  <StyledSectionLayout padding="0px">
    {data.data.map(item => {
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
  </StyledSectionLayout>
)

export default PlainTextSection
