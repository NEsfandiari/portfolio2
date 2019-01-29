import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import GLView from '../components/gl-view'

import Layout from '../components/layout'

const Container = styled.div`
  ul {
    position: fixed;
    z-index: 4;
    left: 0;
    margin-top: 10rem;
    list-style-type: none;
  }
  h4 {
    color: white;
    cursor: pointer;
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
        </Container>
      </Layout>
    )
  }
}

export default projects
