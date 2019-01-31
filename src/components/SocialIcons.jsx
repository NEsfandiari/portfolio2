import React, { Component } from 'react'
import styled from 'styled-components'
import { FaGithub, FaAngellist, FaLinkedin, FaMailBulk } from 'react-icons/fa'

const Container = styled.div`
  max-width: 20rem;
  @media (max-width: 420px) {
    display: flex;
    justify-content: center;
  }
  svg {
    margin: 0.4rem;
    transition: 0.3s ease;
  }
  svg:hover {
    opacity: 1 !important;
  }
`

class FooterSocialIcons extends Component {
  state = {
    hover: 1,
  }
  hoverEnter = () => {
    this.setState({
      hover: 0.5,
    })
  }
  hoverExit = () => {
    this.setState({
      hover: 1,
    })
  }
  render() {
    const opacity = this.state.hover
    return (
      <Container>
        <a
          href="https://github.com/NEsfandiari"
          target="_blank"
          rel="noopener noreferrer"
          title="Lipslut Instagram Account"
        >
          <FaGithub
            size="2.2rem"
            color="white"
            style={{ opacity: opacity }}
            onMouseEnter={this.hoverEnter}
            onMouseLeave={this.hoverExit}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/niki-esfandiari-1800a5b7/"
          target="_blank"
          rel="noopener noreferrer"
          title="Lipslut Twitter Account"
        >
          <FaLinkedin
            size="2.2rem"
            color="white"
            style={{ opacity: opacity }}
            onMouseEnter={this.hoverEnter}
            onMouseLeave={this.hoverExit}
          />
        </a>
        <a
          href="mailto:nesfandiari37@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title=""
        >
          <FaMailBulk
            size="2.2rem"
            color="white"
            style={{ opacity: opacity }}
            onMouseEnter={this.hoverEnter}
            onMouseLeave={this.hoverExit}
          />
        </a>
      </Container>
    )
  }
}

export default FooterSocialIcons
