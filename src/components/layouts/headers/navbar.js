import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Navbar = () => {
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
    <nav className="flex">
      <ul>
        <li>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </li>
        <li>
          <Link to="/about/">About page</Link>
        </li>
        <li>
          <Link to="/404/">Error page</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
