import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Container = styled.header`
  background: #f3fafb;
  height: 10vh;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Title = styled.h1`
  margin: 0;
  a {
    color: #546b6e;
    text-decoration: none;
  }
`

const Header = ({ siteTitle }) => (
  <Container>
    <Content>
      <Title>
        <Link to="/">{siteTitle}</Link>
      </Title>
    </Content>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
