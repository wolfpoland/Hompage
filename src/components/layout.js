import React, {memo} from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const siteTitle = graphql`
query SiteTitleQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`

const Layout = memo(({ children }) => (
  <StaticQuery
    query={siteTitle}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
        </div>
      </>
    )}
  />
))

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
