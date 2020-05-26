import React from "react"

const Copyright = () => {
  const currentDate = new Date().getFullYear()
  return (
    <p>
      Copyright © {currentDate === 2020 ? currentDate : `2020 - ${currentDate}`}{" "}
      Jose Fernandes, all rights reserved
    </p>
  )
}
const Footer = () => (
  <footer className="bg-black text-white py-10">
    <div className="container mx-auto text-center">
      <Copyright />
    </div>
  </footer>
)

// https://medium.com/mojoverse-the-business-weekly/how-to-improve-google-ranking-by-optimising-website-footer-24d6b2e30e96

export default Footer
