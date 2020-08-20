import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../assets/styles/theme"
import { Helmet } from "react-helmet"

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

const MainLayout = ({ children }) => {
  const data = useStaticQuery(query)
  const content = data.datoCmsSiteSetup.siteDescription
  const keywords = data.datoCmsSiteSetup.siteKeywords
  return (
    <ThemeProvider theme={theme}>
      <>
        <Helmet
          meta={[
            { name: "description", content: content },
            { name: "keywords", content: keywords },
          ]}
        >
          <html lang="pl" />
        </Helmet>
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
}

const query = graphql`
  {
    datoCmsSiteSetup {
      siteDescription
      siteKeywords
    }
  }
`

export default MainLayout
