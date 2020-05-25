import React from "react"
import { Link } from "gatsby"

import HomeButton from "./buttons/homeButton"
import BurgerButton from "./buttons/burgerButton"

export const getPages = () => [
  {
    link: "/projects/",
    title: "Projects",
  },
]

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isTop: true,
      isMobile: false,
    }
  }

  componentDidMount() {
    let { classList } = document.body
    if (!classList.contains("relative")) classList.add("relative")

    this.setState({
      isTop: window.scrollY === 0,
      isMobile: window.innerWidth <= 450,
    })

    window.addEventListener("resize", this.handleResize)
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
    window.removeEventListener("resize", this.handleResize)
  }

  handleResize = e => {
    const w = e.currentTarget
    this.setState({
      isMobile: w.innerWidth <= 450,
    })
  }

  handleScroll = e => {
    const w = e.currentTarget
    this.setState({
      isTop: w.scrollY === 0,
    })
  }

  render() {
    const { navClasses, styles } = this.getNavStyling()

    let menu
    if (!this.state.isMobile) {
      const pages = getPages()

      menu = (
        <ul>
          {pages.map((page, i) => (
            <li
              key={i}
              className="inline-block pl-5"
              style={{ marginBottom: 0 }}
            >
              <Link to={page.link}>{page.title}</Link>
            </li>
          ))}
        </ul>
      )
    } else {
      menu = <BurgerButton colorFill={styles.btnClrFill} />
    }

    return (
      <nav className={navClasses} style={styles}>
        <HomeButton />
        {menu}
      </nav>
    )
  }

  getNavStyling = () => {
    const navbarOpacity = 0.95
    const { fixed } = this.props

    let styles = {
      btnClrFill: "#000",
      opacity: 1,
    }

    let navClasses =
      "flex items-center justify-between px-2 py-3 z-40 w-full shadow-2xl "

    if (fixed) {
      navClasses += " fixed transition ease-in-out delay-300 duration-700 "
      if (this.state.isTop) {
        navClasses += " bg-black bg-opacity-25 text-white "
        styles.btnClrFill = "#fff"
      } else {
        navClasses += " bg-white text-black "
        styles.opacity = navbarOpacity
      }
    } else {
      navClasses += " sticky top-0 bg-white text-black"
      styles.opacity = navbarOpacity
    }

    return {
      styles,
      navClasses,
    }
  }
}

export default Navbar
