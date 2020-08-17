import React from "react"
import PropTypes from "prop-types"

import { StyledButton, StyledA } from "./Button.style"

const Button = ({ children, className, href, to, type }) => (
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
      <StyledButton to={to} className={className} type={type}>
        {children}
      </StyledButton>
    )}
  </>
)

Button.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.string,
}

export default Button
