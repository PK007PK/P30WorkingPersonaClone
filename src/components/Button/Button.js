import React from "react"
import PropTypes from "prop-types"

import { StyledButton, StyledA } from "./Button.style"

const Button = ({ children, className, href, type }) => (
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
      <StyledButton className={className} type="submit">
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
