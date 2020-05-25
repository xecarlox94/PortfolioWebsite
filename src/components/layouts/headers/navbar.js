import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import HomeButton from "./buttons/homeButton"
import BurgerButton from "./buttons/burgerButton"

export const getPages = () => [
  {
    link: "/projects/",
    title: "Projects",
  },
]

const getNavStyling = (fixed, isTop) => {
  const navbarOpacity = 0.95

  let styles = {
    btnClrFill: "#000",
    opacity: 1,
  }

  let navClasses =
    "flex items-center justify-between px-2 py-3 z-40 w-full shadow-2xl "

  if (fixed) {
    navClasses += " fixed transition ease-in-out delay-300 duration-700 "
    if (isTop) {
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

const Navbar = ({ fixed }) => {
  const [isTop, setIsTop] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = e => {
    const w = e.currentTarget
    setIsMobile(w.innerWidth <= 450)
  }

  const handleScroll = e => {
    const w = e.currentTarget
    setIsTop(w.scrollY === 0)
  }

  useEffect(() => {
    let { classList } = document.body
    if (!classList.contains("relative")) classList.add("relative")

    setIsTop(window.scrollY === 0)
    setIsMobile(window.innerWidth <= 450)

    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const { navClasses, styles } = getNavStyling(fixed, isTop)

  let menu

  if (!isMobile) {
    menu = (
      <ul>
        {getPages().map((page, i) => (
          <li key={i} className="inline-block pl-5" style={{ marginBottom: 0 }}>
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

export default Navbar
