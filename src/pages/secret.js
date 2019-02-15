import React, { Component } from 'react'
import styled from 'styled-components'

import Plato from '../components/plato-cave'
import Layout from '../components/layout'

const Container = styled.div``

class secret extends Component {
  state = {}
  render() {
    return (
      <Layout>
        <Container>
          <Plato />
        </Container>
      </Layout>
    )
  }
}

export default secret
