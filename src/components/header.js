import React, { memo } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import HeaderStyled from "../blocks/header/index"

const Header = memo(({ siteTitle }) => (
  <HeaderStyled>
    <HeaderStyled.Content>
      <HeaderStyled.Title>
        <Link to="/">{siteTitle}</Link>
      </HeaderStyled.Title>
    </HeaderStyled.Content>
  </HeaderStyled>
))

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
