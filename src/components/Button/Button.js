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
    {!to && !href && diseabled && (
      <button
        className="inner"
        type="submit"
        diseabled=""
        style={{ backgroundColor: `gray`, cursor: 'default' }}
      >
        {children}
      </button>
    )}
    {!to && !href && !diseabled && (
      <button className="inner" type="submit" diseabled="">
        {children}
      </button>
    )}
  </StyledWrapper>
);

Button.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.bool,
  ]),
  href: PropTypes.string,
  to: PropTypes.string,
  diseabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Button;
