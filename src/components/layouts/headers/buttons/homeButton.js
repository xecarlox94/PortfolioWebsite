import React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"

const HomeButton = () => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return <Link to="/">{site.siteMetadata.title}</Link>
}

export default HomeButton
