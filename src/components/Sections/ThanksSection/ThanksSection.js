import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import IconYT from "../../IconYT/IconYT"
import IconFB from "../../IconFB/IconFB"
import Form from "../../Form/Form"
import Button from "../../Button/Button"

import { StyledSectionLayout } from "./ThanksSection.style"

const ContactSection = () => {
  const data = useStaticQuery(query)
  return (
    <StyledSectionLayout>
      <div className="formWrapper">
        <p>
          Dziękuję za przesłanie <br /> wiadomości
        </p>
      </div>
      <div className="txtWrapper">
        <h2>Dane kontaktowe:</h2>
        <div>
          <p>Telefon: {data.datoCmsSiteSetup.phone}</p>
        </div>
        <div>
          <p>Email: {data.datoCmsSiteSetup.email} </p>
        </div>
        <Button small href={data.datoCmsSiteSetup.youtubeChanelLink}>
          {" "}
          Mój vlog <IconYT small />
        </Button>
        <a
          href={data.datoCmsSiteSetup.facebookLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconFB />
        </a>
      </div>
    </StyledSectionLayout>
  )
}

const query = graphql`
  {
    datoCmsSiteSetup {
      phone
      email
      youtubeChanelLink
      facebookLink
    }
  }
`

export default ContactSection
