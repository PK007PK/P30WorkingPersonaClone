import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../assets/styles/theme"

import GlobalStyle from "../assets/styles/GlobalStyle"

import BootstrapContainer from "../utilities/BootstrapContainer/BootstrapContainer"
import TopMenuBar from "../components/TopMenuBar/TopMenuBar"
import Footer from "../components/Footer/Footer"

const StyledTopMenuBar = styled(TopMenuBar)`
  margin-top: 30px;
`

const BodyWrapper = styled.div`
  min-height: calc(100vh - 162px);
`

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <BootstrapContainer>
        <StyledTopMenuBar />
      </BootstrapContainer>
      <BodyWrapper>
        <main>{children}</main>
      </BodyWrapper>
      <Footer />
    </>
  </ThemeProvider>
)

export default MainLayout
