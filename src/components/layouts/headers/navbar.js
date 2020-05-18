import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const getPages = () => [
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

const HomeLink = () => {
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

class MenuBurger extends React.Component {
  render() {
    return (
      <svg
        onClick={this.props.menuOpen}
        style={{ fill: "white", cursor: "pointer" }}
        height="25"
        width="25"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M64 128a64 64 0 1164-64 64 64 0 01-64 64zM64 4a60 60 0 1060 60A60 60 0 0064 4z" />
        <path d="M95 44H33a2 2 0 010-4h62a2 2 0 010 4zM95 66H33a2 2 0 010-4h62a2 2 0 010 4zM95 88H33a2 2 0 010-4h62a2 2 0 010 4z" />
      </svg>
    )
  }
}

// class MenuClose extends React.Component {
//   render() {
//     return (
//       <svg
//         onClick={this.props.menuClose}
//         height="24"
//         width="24"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <g fill="none" fillRule="evenodd">
//           <path
//             d="M12.5 23a11.5 11.5 0 100-23 11.5 11.5 0 000 23zm0-1a10.5 10.5 0 100-21 10.5 10.5 0 000 21zm-4.24-5.55l-.71-.7 4.24-4.25-4.24-4.24.7-.71 4.25 4.24 4.24-4.24.71.7-4.24 4.25 4.24 4.24-.7.71-4.25-4.24-4.24 4.24z"
//             fill="#000"
//           />
//         </g>
//       </svg>
//     )
//   }
// }

// const MobileMenu = () => (
//   <div className="absolute top-0 z-50 w-full h-full bg-gray-300">
//     <div>asd</div>
//   </div>
// )

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
    return (
      <nav className={navClasses} style={styles}>
        <HomeLink />
        {this.getMenu()}
      </nav>
    )
  }

  getMenu = () => {
    const pages = getPages()

    if (!this.state.isMobile) {
      return (
        <ul>
          {pages.map((page, i) => (
            <li key={i} className="inline-block pl-5">
              <Link to={page.link}>{page.title}</Link>
            </li>
          ))}
        </ul>
      )
    }

    return <MenuBurger />
  }

  getNavStyling = () => {
    const navbarOpacity = 0.95
    const { fixed } = this.props

    let styles = {}
    let navClasses = "flex items-center justify-between px-2 py-3 z-40 w-full "

    if (fixed) {
      navClasses += " fixed transition ease-in-out delay-300 duration-700 "
      if (this.state.isTop) {
        navClasses += " bg-black bg-opacity-25 text-white "
      } else {
        navClasses += " bg-white shadow-md"
        styles.opacity = navbarOpacity
      }
    } else {
      navClasses += " sticky top-0 bg-white shadow-md"
      styles.opacity = navbarOpacity
    }

    return {
      styles,
      navClasses,
    }
  }
}

export default Navbar
