import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Navbar = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let navClasses =
    "flex items-center justify-between px-2 py-3 z-50 w-full bg-white bg-opacity-75 "

  if (fixed) navClasses += "fixed"
  else navClasses += "sticky top-0"

  const pages = [
    {
      link: "/about/",
      title: "About",
    },
    {
      link: "/projects/",
      title: "Projects",
    },
    {
      link: "/blog/",
      title: "Blog",
    },
  ]

  return (
    <nav className={navClasses}>
      <Link to="/">{data.site.siteMetadata.title}</Link>
      <ul>
        {pages.map((page, i) => {
          const link = "/" + page.link + "/"

          return (
            <li key={i} className="inline-block pl-5">
              <Link to={link}>{page.title}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
