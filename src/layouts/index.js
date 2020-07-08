import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../assets/styles/theme"

import GlobalStyle from "../assets/styles/GlobalStyle"

import Container from "../utilities/BootstrapContainer/BootstrapContainer"
import TopMenuBar from "../components/TopMenuBar/TopMenuBar"

const StyledTopMenuBar = styled(TopMenuBar)`
  margin-top: 30px;
`

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Container>
        <StyledTopMenuBar />
      </Container>

      {children}
    </>
  </ThemeProvider>
)

export default MainLayout
