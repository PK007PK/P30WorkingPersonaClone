import React from 'react';
import PropTypes from 'prop-types';

import { StyledI } from './IconYT.style.js';

const IconYT = ({ className, small }) => (
  <StyledI small={small} className={className} />
);

IconYT.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default IconYT;
