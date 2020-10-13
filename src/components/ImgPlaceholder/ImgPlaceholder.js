import React from 'react';

import Logo from '../Logo/Logo';
import { ImgPlaceholderStyle } from './ImgPlaceholder.style';

const ImgPlaceholder = ({ className, light }) => (
  <ImgPlaceholderStyle light={light} className={className}>
    <Logo light={light} />
  </ImgPlaceholderStyle>
);

export default ImgPlaceholder;
