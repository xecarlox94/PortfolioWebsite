import React from "react"
import { Link } from "gatsby"

import CloseButton from "./buttons/closeButton"
import { getPages } from "./navbar"

class MobileNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = { scrollY: 0 }
  }
  componentDidMount() {
    // code to disable scrolling
  }

  componentWillUnmount() {
    // code to disable scrolling
  }

  render() {
    const pages = getPages()
    return (
      <div
        className="fixed top-0 z-50 h-screen px-2 py-3  w-full bg-white"
        style={{ opacity: 0.87 }}
      >
        <CloseButton />
        <nav className="flex items-center h-screen">
          <ul className="w-full">
            {pages.map((page, i) => (
              <li key={i} className="text-center my-10">
                <Link
                  to={page.link}
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
}

export default MobileNav
