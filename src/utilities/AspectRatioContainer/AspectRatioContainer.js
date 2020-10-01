import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  position: relative;
  background-color: red;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: ${props => (props.height / props.width) * 100}%;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const AspectRatioContainer = ({ width, height, children }) => (
  <StyledContainer width={width} height={height}>
    <div className="content">{children}</div>
  </StyledContainer>
)

export default AspectRatioContainer
