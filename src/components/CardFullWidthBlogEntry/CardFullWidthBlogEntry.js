import React from 'react';
import PropTypes from 'prop-types';

import ImgPlaceholder from '../ImgPlaceholder/ImgPlaceholder';

import {
  StyledLink,
  StyledImgWrapper,
  StyledImg,
  StyledTxtWrapper,
  StyledDate,
  StyledTitle,
  StyledYouTubeIcon,
} from './CardFullWidthBlogEntry.styles';

const CardFullWidthBlogEntry = ({
  className,
  background,
  date,
  title,
  slug,
  youtube,
}) => (
  <StyledLink to={`/blog/${slug}`}>
    <StyledImgWrapper className={className}>
      {background ? <StyledImg fluid={background} /> : <ImgPlaceholder light />}
      {youtube ? (
        <>
          <StyledYouTubeIcon />
        </>
      ) : null}
      <StyledDate>{date}</StyledDate>
    </StyledImgWrapper>
    <StyledTxtWrapper>
      <StyledTitle>{title}</StyledTitle>
    </StyledTxtWrapper>
  </StyledLink>
);

CardFullWidthBlogEntry.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  background: PropTypes.object,
  date: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
  youtube: PropTypes.string,
};

export default CardFullWidthBlogEntry;
