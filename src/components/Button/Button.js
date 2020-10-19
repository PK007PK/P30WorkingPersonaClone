import React from 'react';
import PropTypes from 'prop-types';

import { StyledWrapper, StyledA, StyledLink } from './Button.style';

const Button = ({ children, className, href, to, diseabled, margin }) => (
  <StyledWrapper margin={margin} className={className}>
    {href && (
      <StyledA
        href={href}
        target="_blank"
        className="inner"
        rel="noopener noreferrer"
      >
        {children}
      </StyledA>
    )}
    {to && (
      <StyledLink to={to} className="inner">
        {children}
      </StyledLink>
    )}
    {!to && !href && (
      <button
        className="inner"
        type="submit"
        diseabled=""
        style={{ backgroundColor: `gray`, cursor: 'default' }}
      >
        {children}
      </button>
    )}
  </StyledWrapper>
);

Button.propTypes = {
  // className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  // href: PropTypes.string,
  // to: PropTypes.string,
};

export default Button;
