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
    font-size: 1rem;
    a {
      text-decoration: none;
      color: white;
      :hover {
        color: lightgray;
        text-decoration: azure underline;
      }
    }
    h5 {
      line-height: 1.3rem;
    }
    p {
      line-height: 1.3rem;
      font-size: 0.85rem;
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
  @media (max-width: 420px) {
    .info {
      right: 20%;
      margin-top: 15rem;
      text-shadow: 0px 0px 10px #000000;
    }
    ul {
      margin-top: 3rem;
      display: flex;
      flex-wrap: wrap;
      width: 20rem;
      align-items: center;
      justify-content: center;
      h4 {
        margin: 1rem;
      }
    }
  }
`

class projects extends Component {
  componentDidMount() {
    AOS.init()
  }
  state = {
    camera: 'original',
  }
  click = e => {
    this.setState({ camera: e.target.className })
  }
  render() {
    const info = this.props[this.state.camera]
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
              <h5>
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Link
                </a>
              </h5>
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
      'Birthed in the aftermath of the 2016 presidential election, Lipslut is a politcally charged cosmetics brand vowing for justice by donating 50% of profits to charity. I created the web system to replatorm them off of Squarespace.',
    technologies:
      'React.js, AWS Lambda, Firebase, Contentful, Stripe, Shopify, GraphQL',
  },
  groupmuse: {
    link: 'https://itunes.apple.com/us/app/groupmuse/id942675649',
    blurb:
      'An online social network that connects young classical musicians to local audiences through concert house parties. I worked on their IOS app (which is now released).',
    technologies: 'React-Native, Redux, Storybook, Stripe, Ruby',
  },
  cherries: {
    link: 'https://jamstack-cherries.netlify.com/',
    blurb:
      'A fake E-commerce brand I developed and used to test many of the technologies (JAMstack paradigm) that I used while working for Lipslut.',
    technologies: 'React.js, Fuse.js, AWS Lambda, Contentful, Shopify, GraphQL',
  },
  warbler: {
    link: 'https://warbler-project.herokuapp.com/',
    blurb:
      'A Twitter clone with a new face! Users can create profiles, add messages, and interact with other users.',
    technologies: 'Python, Flask, PostgreSQL, jQuery, JWT',
  },
  memory: {
    link: 'https://nikiesfandiari-memory-game.herokuapp.com/index.html',
    blurb:
      'A game where players click on cards to reveal images and match pairs as quickly as possible.',
    technologies: 'jQuery',
  },
}
