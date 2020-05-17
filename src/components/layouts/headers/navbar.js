import React from "react"

import PropTypes from "prop-types"
import { Link } from "gatsby"

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isTop: true,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    if (window.scrollY === 0) {
      this.setState({ isTop: true })
    } else {
      this.setState({ isTop: false })
    }
  }

  render() {
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

    const { fixed } = this.props

    let navClasses = "flex items-center justify-between px-2 py-3 z-40 w-full "

    if (fixed) {
      navClasses += " fixed transition ease-in-out delay-300 duration-700 "
      if (this.state.isTop) {
        navClasses += " bg-black bg-opacity-25 text-white "
      } else {
        navClasses += " bg-white bg-opacity-75 shadow-lg"
      }
    } else {
      navClasses += " sticky top-0 bg-white bg-opacity-75 shadow-lg"
    }

    return (
      <nav className={navClasses}>
        <Link to="/">{this.props.title}</Link>
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
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar
