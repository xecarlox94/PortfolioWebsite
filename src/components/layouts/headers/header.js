import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header>
      <div>
        <h1>{data.site.siteMetadata.title}</h1>
        <Link to="/">Home page</Link>
        <br />
        <br />
        <Link to="/about/">About page</Link>
        <br />
        <br />
        <Link to="/404/">Error page</Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
