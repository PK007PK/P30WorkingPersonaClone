import React from 'react';
import PropTypes from 'prop-types';

import ImgPlaceholder from '../ImgPlaceholder/ImgPlaceholder';

import {
  StyledWrapper,
  StyledImg,
  StyledDate,
  StyledTitle,
  StyledYouTubeIcon,
} from './CardFeaturedNews.style';

const CardFeaturedNews = ({
  className,
  background,
  date,
  title,
  slug,
  youtube,
}) => (
  <StyledWrapper className={className} to={`/blog/${slug}`}>
    {youtube ? <StyledYouTubeIcon /> : null}
    {background ? <StyledImg fluid={background} /> : <ImgPlaceholder />}
    <StyledDate>{date}</StyledDate>
    <StyledTitle>{title}</StyledTitle>
  </StyledWrapper>
);

CardFeaturedNews.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  background: PropTypes.object,
  date: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
  youtube: PropTypes.string,
};

export default CardFeaturedNews;
