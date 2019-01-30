import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import './layout.css'
import Header from './header'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3080b5;
  height: 101vh;
  width: 102.5%;
  * {
    font-family: 'Ubuntu';
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        <link
          rel="stylesheet"
          href="//brick.freetls.fastly.net/Ubuntu:300,400,500,700"
        />
        <Header />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </Container>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
