import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import HomeButton from "./buttons/homeButton"
import BurgerButton from "./buttons/burgerButton"

export const getPages = () => [
  {
    target: "/projects/",
    title: "Projects",
    callAction: false,
  },
  {
    target: `#contact`,
    title: "Contact",
    callAction: true,
  },
]

const getNavStyling = (fixed, isTop) => {
  const navbarOpacity = 0.95

  let styles = {
    btnClrFill: "#000",
    opacity: 1,
  }

  let navClasses =
    "flex items-center justify-between px-4 py-3 z-40 w-full shadow-2xl "

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

  const handleResize = ({
    currentTarget: {
      window: { innerWidth },
    },
  }) => setIsMobile(innerWidth <= 500)

  const handleScroll = ({
    currentTarget: {
      window: { scrollY },
    },
  }) => setIsTop(scrollY === 0)

  useEffect(() => {
    const {
      scrollY,
      innerWidth,
      addEventListener,
      removeEventListener,
    } = window

    setIsTop(scrollY === 0)
    setIsMobile(innerWidth <= 500)

    addEventListener("resize", handleResize)
    addEventListener("scroll", handleScroll)

    return () => {
      removeEventListener("scroll", handleScroll)
      removeEventListener("resize", handleResize)
    }
  }, [])

  const { navClasses, styles } = getNavStyling(fixed, isTop)

  let menu

  if (!isMobile) {
    menu = (
      <ul>
        {getPages().map(({ target, title, callAction }, i) => {
          let button

          if (!callAction) {
            button = <Link to={target}>{title}</Link>
          } else {
            let classes =
              "transition ease-in-out delay-300 duration-700 py-2 px-3 rounded border "

            if (fixed && isTop) {
              classes +=
                " bg-transparent border-white hover:bg-white hover:text-black "
            } else {
              classes +=
                " bg-white border-black hover:bg-black hover:text-white "
            }

            button = (
              <a href={target} className={classes}>
                {title}
              </a>
            )
          }

          return (
            <li
              key={i}
              className="inline-block pl-5"
              style={{ marginBottom: 0 }}
            >
              {button}
            </li>
          )
        })}
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
