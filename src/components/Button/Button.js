import React from "react"

import { StyledButton, StyledA } from "./Button.style"

const Button = ({ children, className, href }) => (
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
      <StyledButton className={className}>{children}</StyledButton>
    )}
  </>
)

export default Button
