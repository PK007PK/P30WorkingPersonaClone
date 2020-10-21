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
}) => {
  const leadTxt = text.substr(0, 200);
  const cardTxt = leadTxt.substr(
    0,
    Math.min(leadTxt.length, leadTxt.lastIndexOf(' '))
  );
  return (
    <StyledContainer to={`/blog/${slug}`}>
      {youtube ? (
        <>
          <StyledYouTubeIcon />
        </>
      ) : null}
      <span className="date">{date}</span>

      {background ? <StyledImg fluid={background} /> : <ImgPlaceholder light />}
      <h3>{title}</h3>
      <p className="text">{cardTxt} ...</p>
    </StyledContainer>
  );
};

CardVerticalBlogEntry.propTypes = {
  background: PropTypes.object,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CardVerticalBlogEntry;
