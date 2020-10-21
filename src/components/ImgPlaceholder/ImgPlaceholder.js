import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo/Logo';
import { ImgPlaceholderStyle } from './ImgPlaceholder.style';

const ImgPlaceholder = ({ className, light }) => (
  <ImgPlaceholderStyle light={light} className={className}>
    <Logo light={light} />
  </ImgPlaceholderStyle>
);

ImgPlaceholder.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  light: PropTypes.bool,
};

export default ImgPlaceholder;
