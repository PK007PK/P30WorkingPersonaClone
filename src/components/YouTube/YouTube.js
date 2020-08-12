import React from "react"
import { render } from "react-dom"

import { StyledWrapper } from "./YouTube.style"

class YouTube extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StyledWrapper>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${this.props.videoId}?rel=0`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </StyledWrapper>
    )
  }
}

export default YouTube
