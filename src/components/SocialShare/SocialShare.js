import React from 'react';
import PropTypes from 'prop-types';

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
      <FacebookIcon size={38} round />
    </FacebookShareButton>
    <FacebookMessengerShareButton
      url={typeof window !== 'undefined' ? window.location.href : ''}
      appId={messengerId}
      className="social__button"
    >
      <FacebookMessengerIcon size={38} round />
    </FacebookMessengerShareButton>
    <WhatsappShareButton
      url={typeof window !== 'undefined' ? window.location.href : ''}
      title={title}
      separator=":: "
      className="social__button"
    >
      <WhatsappIcon size={38} round />
    </WhatsappShareButton>
    <EmailShareButton
      className="social__button"
      url={typeof window !== 'undefined' ? window.location.href : ''}
      subject={title}
      body={excerpt}
      separator="<br></br><br></br>"
    >
      <EmailIcon size={38} round />
    </EmailShareButton>
    <LinkedinShareButton
      className="social__button"
      title={title}
      summary={excerpt}
      source={typeof window !== 'undefined' ? window.location.href : ''}
      url={typeof window !== 'undefined' ? window.location.href : ''}
    >
      <LinkedinIcon size={38} round />
    </LinkedinShareButton>
  </SocialShareStyle>
);

SocialShare.propTypes = {
  title: PropTypes.string,
  messengerId: PropTypes.string,
};

export default SocialShare;
