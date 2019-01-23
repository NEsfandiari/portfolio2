import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Face from '../components/face'
import SEO from '../components/seo'
import SocialIcons from '../components/SocialIcons'

const Container = styled.div`
  canvas {
    width: 100%;
    height: 100%;
  }
  .splash-text {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .face {
    animation: 18s ease 0s infinite spin;
    max-width: 15rem;
    max-height: 15rem;
    margin: 3rem auto;
  }
  @keyframes spin {
    25% {
      transform: rotate3d(0.25, 0.25, 0.25);
    }
    50% {
      transform: scale(0.95) rotate3d(0.5, 0.5, 0.5, 360deg);
    }
    75% {
      transform: rotate3d(0.75, 0.75, 0.75);
    }

    100% {
      transform: scale(1) rotate3d(1, 1, 1, -360deg);
    }
  }
`

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="face">
        <Face />
      </div>
      <div className="splash-text">
        <h1>Hello!</h1>
        <p>
          Im Niki Esfandiari, a Software Engineer in the San Francisco Bay Area.{' '}
          <br />
          Click around and please don't hesitate to reach out.
        </p>
        <SocialIcons />
      </div>
    </Container>
  </Layout>
)

export default IndexPage
