import React, { Component } from 'react'
import styled from 'styled-components'
import GLView from '../components/gl-view'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Layout from '../components/layout'

const Container = styled.div`
  ul {
    position: fixed;
    z-index: 4;
    left: 0;
    margin-top: 10rem;
    list-style-type: none;
  }
  .info {
    position: fixed;
    z-index: 4;
    right: 12%;
    margin-top: 10rem;
    color: white;
    max-width: 15rem;
    font-size: 0.9rem;
    a {
      text-decoration: none;
      color: white;
    }
  }
  h4 {
    color: white;
    cursor: pointer;
    transition: 0.3s;
    :hover {
      color: lightgray;
      text-decoration: azure underline;
    }
  }
`

class projects extends Component {
  state = {
    camera: 'original',
  }
  click = e => {
    this.setState({ camera: e.target.className })
  }
  render() {
    AOS.init()
    const info = this.props[this.state.camera]
    debugger
    return (
      <Layout>
        <Container>
          <ul>
            <h4 className="lipslut" onClick={this.click}>
              Lipslut
            </h4>
            <h4 className="groupmuse" onClick={this.click}>
              Groupmuse
            </h4>
            <h4 className="cherries" onClick={this.click}>
              Cherries
            </h4>
            <h4 className="warbler" onClick={this.click}>
              Warbler
            </h4>
            <h4 className="memory" onClick={this.click}>
              Memory Game
            </h4>
          </ul>
          <GLView camera={this.state.camera} />
          {this.state.camera !== 'original' ? (
            <div className="info">
              <h5 data-aos="fade-down">
                Technologies Used:
                <br /> {info.technologies}
              </h5>
              <p data-aos="fade-in" data-aos-delay="100">
                {info.blurb}
              </p>
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Link
              </a>
            </div>
          ) : (
            ''
          )}
        </Container>
      </Layout>
    )
  }
}

export default projects

projects.defaultProps = {
  lipslut: {
    link: 'https://lipslut-beta.netlify.com/',
    blurb:
      'Birthed in the aftermath of the 2016 presidential election, Lipslut is a politcally charged cosmetics brand vowing for justice by donating 50% of profits to charity. I created the web app to replatorm them off of Squarespace.',
    technologies:
      'Gatsby.js, React.js, AWS Lambda, Firebase, Contentful, Stripe, Shopify, GraphQL',
  },
  groupmuse: {
    link: 'https://itunes.apple.com/us/app/groupmuse/id942675649',
    blurb:
      'An online social network that connects young classical musicians to local audiences through concert house parties. I worked on their IOS app.',
    technologies: 'React-Native, Redux, Redux-Thunk, Storybook, Stripe, Ruby',
  },
  cherries: {
    link: 'https://jamstack-cherries.netlify.com/',
    blurb:
      'A fake E-commerce brand I developed and used to test many of the technologies (in the JAMstack paradigm) that I used while working for Lipslut.',
    technologies:
      'Gatsby.js, React.js, Fuse.js, AWS Lambda, Contentful, Shopify, GraphQL',
  },
  warbler: {
    link: 'https://warbler-project.herokuapp.com/',
    blurb:
      'A Twitter clone with a new face! Users can create profiles, add messages, and interact with other users.',
    technologies: 'Python3, Flask, jQuery, JWT',
  },
  memory: {
    link: 'https://nikiesfandiari-memory-game.herokuapp.com/index.html',
    blurb:
      'A game where players click on cards to reveal images and match pairs as quickly as possible.',
    technologies: 'jQuery',
  },
}
