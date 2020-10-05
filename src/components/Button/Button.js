import React from "react"
import PropTypes from "prop-types"

import {
  StyledWrapper,
  StyledA,
  StyledLink,
  StyledButton,
} from "./Button.style"

const Button = ({ children, className, href, to }) => (
  <StyledWrapper className={className}>
    {href && (
      <StyledA
        href={href}
        target="_blank"
        className={"inner"}
        rel="noopener noreferrer"
      >
        {children}
      </StyledA>
    )}
    {to && (
      <StyledLink to={to} className={"inner"}>
        {children}
      </StyledLink>
    )}
    {!to && !href && (
      <StyledButton to={to} className={"inner"} type="submit">
        {children}
      </StyledButton>
    )}
  </StyledWrapper>
)

Button.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.string,
}

export default Button
