import React from "react"

class MenuClose extends React.Component {
  render() {
    return (
      <svg
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
  }
  componentDidMount() {
    // let body = document.body
    // body.style.position = "fixed"
    // body.style.top = `-${window.scrollY}px`
    // this.setState({ scrollY: body.style.top })
  }

  componentWillUnmount() {
    // const scrollY = document.body.style.top
    // let body = document.body
    // body.style.position = ""
    // body.style.top = ""
    // window.scrollTo(0, parseInt(scrollY || "0") * -1)
  }

  render() {
    return (
      <div className="absolute top-0 z-50 h-screen w-screen bg-gray-300">
        <div>
          <MenuClose menuClose={() => this.props.onMenuClose} />
        </div>
      </div>
    )
  }
}

export default MobileNav
