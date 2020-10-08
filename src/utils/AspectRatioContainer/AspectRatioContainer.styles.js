import styled from "styled-components"
import Image from "gatsby-image"

export const StyledImg = styled(Image)`
  position: relative;
  background-color: red;
  width: 100%;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: ${props => (props.height / props.width) * 100}%;
  }

  /* .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  } */
`
