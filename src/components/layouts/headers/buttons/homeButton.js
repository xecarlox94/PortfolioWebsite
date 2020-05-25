import React from "react"

import { graphql, Link, StaticQuery } from "gatsby"

const HomeButton = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title },
      },
    }) => <Link to="/">{title}</Link>}
  />
)

export default HomeButton
