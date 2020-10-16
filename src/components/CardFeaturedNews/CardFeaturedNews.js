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
    {youtube ? (
      <>
        <StyledYouTubeIcon />
      </>
    ) : null}
    {background ? <StyledImg fluid={background} /> : <ImgPlaceholder />}
    <StyledDate>{date}</StyledDate>
    <StyledTitle>{title}</StyledTitle>
  </StyledWrapper>
);

// CardFeaturedNews.propTypes = {
//   background: PropTypes.object.isRequired,
//   date: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   slug: PropTypes.string.isRequired,
//   youtube: PropTypes.string,
// };

export default CardFeaturedNews;
