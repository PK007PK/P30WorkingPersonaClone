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
  <StyledLink to={`/articles/${slug}`}>
    <StyledImgWrapper className={className}>
      <StyledImg fluid={background} />
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
  background: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  youtube: PropTypes.string,
};

export default CardFullWidthBlogEntry;
