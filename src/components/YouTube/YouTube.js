import React from 'react';
import PropTypes from 'prop-types';

import { StyledWrapper } from './YouTube.style';

class YouTube extends React.Component {
  render() {
    return (
      <StyledWrapper>
        <iframe
          title="YouTube film"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${this.props.videoId}?rel=0`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </StyledWrapper>
    );
  }
}

YouTube.propTypes = {
  videoId: PropTypes.string,
};

export default YouTube;
