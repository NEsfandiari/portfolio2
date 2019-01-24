import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  width: 100vw;
  display: flex;
  a {
    color: white;
    text-decoration: none;
  }
  h1 {
    font-size: 1.2rem;
    margin: 1rem 0.5rem;
  }
`

const Header = () => (
  <Container>
    <h1>
      <Link to="/">Home</Link>
    </h1>
    <h1>
      <Link to="/projects">Projects</Link>
    </h1>
    <h1>
      <Link to="/writing">Writing</Link>
    </h1>
  </Container>
)

export default Header
