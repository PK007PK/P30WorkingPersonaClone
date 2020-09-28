import React from "react"
import PropTypes from "prop-types"

import { StyledDiv } from "./HeadingWrapper.style"

const HeadingWrapper = ({ title, txtColor, backgroundColor, className }) => (
  <>
    <StyledDiv
      className={className}
      txtColor={txtColor}
      backgroundColor={backgroundColor}
    >
      <h2 className="title">{title}</h2>
    </StyledDiv>
  </>
)

HeadingWrapper.propTypes = {
  title: PropTypes.string,
  // color: PropTypes.func,
  backgroundColor: PropTypes.func,
  className: PropTypes.string,
}

export default HeadingWrapper
