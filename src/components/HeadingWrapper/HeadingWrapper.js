import React from "react"
import PropTypes from "prop-types"

import { StyledDiv } from "./HeadingWrapper.style"

const HeadingWrapper = ({
  title,
  inputColor,
  inputBackgroundColor,
  className,
}) => (
  <>
    <StyledDiv
      className={className}
      inputColor={inputColor}
      inputBackgroundColor={inputBackgroundColor}
    >
      <h2 className="title">{title}</h2>
    </StyledDiv>
  </>
)

HeadingWrapper.propTypes = {
  title: PropTypes.string,
  inputColor: PropTypes.func,
  inputBackgroundColor: PropTypes.func,
  className: PropTypes.string,
}

export default HeadingWrapper
