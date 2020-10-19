import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import IconFB from '../../components/IconFB/IconFB';
import { BootsRow, BootsColumn } from '../../utils/BootsElements/BootsElements';

import { StyledSectionLayout } from './ThanksSection.style';

const thanksSection = () => {
  const data = useStaticQuery(query);
  return (
    <StyledSectionLayout>
      <BootsRow className="contactWrap">
        <BootsColumn className="formWrap" md="7" lg="8">
          <p>Dziękuję za wysłanie wiadomości</p>
        </BootsColumn>
        <BootsColumn className="sidebar" md="5" lg="4">
          {' '}
          <h2>Dane kontaktowe:</h2>
          <div>
            <p>Telefon: {data.datoCmsSiteSetup.phone}</p>
          </div>
          <div>
            <p>Email: {data.datoCmsSiteSetup.email} </p>
          </div>
          <a
            href={data.datoCmsSiteSetup.facebookLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconFB />
          </a>
        </BootsColumn>
      </BootsRow>
    </StyledSectionLayout>
  );
};

const query = graphql`
  {
    datoCmsSiteSetup {
      phone
      email
      youtubeChanelLink
      facebookLink
    }
  }
`;

export default thanksSection;
