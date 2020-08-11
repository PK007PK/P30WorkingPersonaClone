import React from "react"
import PropTypes from "prop-types"

import { StyledButton, StyledA } from "./Button.style"

const Button = ({ children, className, href, to }) => (
  <>
    {href ? (
      <StyledA
        href={href}
        target="_blank"
        className={className}
        rel="noopener noreferrer"
      >
        {children}
      </StyledA>
    ) : (
      <StyledButton to={to} className={className}>
        {children}
      </StyledButton>
    )}
  </>
)

Button.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
}

export default Button
