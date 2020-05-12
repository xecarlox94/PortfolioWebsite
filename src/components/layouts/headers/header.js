import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h2>{siteTitle}</h2>
      <h3>Header</h3>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
