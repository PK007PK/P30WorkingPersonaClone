import React from 'react';
import PropTypes from 'prop-types';

import ImgPlaceholder from '../ImgPlaceholder/ImgPlaceholder';

import {
  StyledContainer,
  StyledImg,
  StyledYouTubeIcon,
} from './CardVerticalBlogEntry.style';

const CardVerticalBlogEntry = ({
  background,
  date,
  title,
  slug,
  text,
  youtube,
}) => (
  <StyledContainer to={`/blog/${slug}`}>
    {youtube ? (
      <>
        <StyledYouTubeIcon />
      </>
    ) : null}
    <span className="date">{date}</span>

    {background ? <StyledImg fluid={background} /> : <ImgPlaceholder light />}
    <h3>{title}</h3>
    <p className="text">{text}</p>
  </StyledContainer>
);

CardVerticalBlogEntry.propTypes = {
  background: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CardVerticalBlogEntry;
