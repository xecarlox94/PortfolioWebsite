import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>Header</h1>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/portfolio/">Portfolio</Link>
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
