import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import GLView from '../components/gl-view'

import Layout from '../components/layout'

const Container = styled.div`
  ul {
    position: fixed;
    left: 0;
    margin-top: 10rem;
  }
`

class projects extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <ul>
            <li>Lipslut</li>
            <li>Groupmuse</li>
            <li>Cherries</li>
            <li>Warbler</li>
            <li>Memory Game</li>
          </ul>
          <GLView />
        </Container>
      </Layout>
    )
  }
}

export default projects
