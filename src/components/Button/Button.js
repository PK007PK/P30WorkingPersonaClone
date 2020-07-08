import React from "react"
import { StyledButton } from "./Button.style"

const Button = ({ children, className }) => (
  <>
    <StyledButton className={className}>{children}</StyledButton>
  </>
)

export default Button
