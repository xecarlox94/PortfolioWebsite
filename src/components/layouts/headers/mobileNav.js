import React from "react"
import { Link } from "gatsby"

import { getPages } from "./navbar"

class ButtonClose extends React.Component {
  render() {
    return (
      <svg
        className="float-right"
        onClick={this.props.menuClose}
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <path
            d="M12.5 23a11.5 11.5 0 100-23 11.5 11.5 0 000 23zm0-1a10.5 10.5 0 100-21 10.5 10.5 0 000 21zm-4.24-5.55l-.71-.7 4.24-4.25-4.24-4.24.7-.71 4.25 4.24 4.24-4.24.71.7-4.24 4.25 4.24 4.24-.7.71-4.25-4.24-4.24 4.24z"
            fill="#000"
          />
        </g>
      </svg>
    )
  }
}

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
        <ButtonClose menuClose={this.props.menuClose} />
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
