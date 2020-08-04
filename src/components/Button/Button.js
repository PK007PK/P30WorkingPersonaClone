import React from "react"
import styled from "styled-components"
import Link from "gatsby"

import { StyledButton } from "./Button.style"

const Button = ({ children, className }) => (
  <>
    <StyledButton className={className}>{children}</StyledButton>
  </>
)

export default Button
