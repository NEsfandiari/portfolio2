import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import GLView from '../components/gl-view'

import Layout from '../components/layout'

const Container = styled.div``

class projects extends Component {
  render() {
    return (
      <Layout>
        <GLView />
      </Layout>
    )
  }
}

export default projects
