import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"

const Header = ({ navbarFixed, classes, styles, children }) => {
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
    <>
      {/* <div className="z-50 w-full h-full bg-gray-300">
        <div className="z-50 w-full h-full bg-gray-300">asd</div>
      </div> */}
      <Navbar fixed={navbarFixed} title={data.site.siteMetadata.title} />
      {children && (
        <header className={classes} style={styles}>
          {children}
        </header>
      )}
    </>
  )
}

export default Header
