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

const getNavStyling = (isFixed, isTop) => {
  const navbarOpacity = 0.95

  let styles = {
    btnClrFill: "#000",
    opacity: 1,
  }

  let navClasses =
    "flex items-center justify-between px-4 py-3 z-40 w-full shadow-2xl "

  if (isFixed) {
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

const ActionButton = ({ isTop, isFixed, link: { target, title } }) => {
  let classes =
    "transition ease-in-out delay-300 duration-700 py-2 px-3 rounded border "

  if (isFixed && isTop) {
    classes += " bg-transparent border-white hover:bg-white hover:text-black "
  } else classes += " bg-white border-black hover:bg-black hover:text-white "

  return (
    <a href={target} className={classes}>
      {title}
    </a>
  )
}

const Menu = ({ isMobile, isTop, isFixed, styles: { btnClrFill } }) => {
  if (!isMobile) {
    return (
      <ul>
        {getPages().map((link, i) => (
          <li key={i} className="inline-block pl-5" style={{ marginBottom: 0 }}>
            {!link.callAction ? (
              <Link to={link.target}>{link.title}</Link>
            ) : (
              <ActionButton link={link} isTop={isTop} isFixed={isFixed} />
            )}
          </li>
        ))}
      </ul>
    )
  }

  return <BurgerButton colorFill={btnClrFill} />
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

  return (
    <nav className={navClasses} style={styles}>
      <HomeButton />
      <Menu isMobile={isMobile} isTop={isTop} isFixed={fixed} styles={styles} />
    </nav>
  )
}

export default Navbar
