import React from 'react';

import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  WhatsappShareButton,
  EmailShareButton,
  LinkedinShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  WhatsappIcon,
  EmailIcon,
  LinkedinIcon,
} from 'react-share';

import { SocialShareStyle } from './SocialShare.styles';

const SocialShare = ({ title, excerpt, messengerId }) => (
  <SocialShareStyle>
    <FacebookShareButton
      className="social__button"
      url={typeof window !== 'undefined' ? window.location.href : ''}
    >
      <FacebookIcon size={45} round />
    </FacebookShareButton>
    <FacebookMessengerShareButton
      url={typeof window !== 'undefined' ? window.location.href : ''}
      appId={messengerId}
      className="social__button"
    >
      <FacebookMessengerIcon size={45} round />
    </FacebookMessengerShareButton>
    <WhatsappShareButton
      url={typeof window !== 'undefined' ? window.location.href : ''}
      title={title}
      separator=":: "
      className="social__button"
    >
      <WhatsappIcon size={45} round />
    </WhatsappShareButton>
    <EmailShareButton
      className="social__button"
      url={typeof window !== 'undefined' ? window.location.href : ''}
      subject={title}
      body={excerpt}
      separator="<br></br><br></br>"
    >
      <EmailIcon size={45} round />
    </EmailShareButton>
    <LinkedinShareButton
      className="social__button"
      title={title}
      summary={excerpt}
      source={typeof window !== 'undefined' ? window.location.href : ''}
      url={typeof window !== 'undefined' ? window.location.href : ''}
    >
      <LinkedinIcon size={45} round />
    </LinkedinShareButton>
  </SocialShareStyle>
);

export default SocialShare;
