import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  animation: 7s ease 0s infinite spin;
  max-width: 15rem;
  max-height: 15rem;
  position: fixed;
  @keyframes spin {
    25% {
      transform: rotate3d(1, 1, 1);
    }
    50% {
      transform: scale(0.95) rotate3d(2, 2, 2);
    }
    75% {
      transform: rotate3d(3, 3, 3);
    }

    100% {
      transform: scale(1) rotate3d(4, 4, 4);
    }
  }
`

const Project = props => {
  const image = require('../images/' + props.image)
  return (
    <Container>
      <img src={image} />
    </Container>
  )
}
export default Project
