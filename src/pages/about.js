import React from "react"

import PageLayout from "../components/layouts/pageLayout"

const About = props => (
  <PageLayout>
    <h1>About</h1>
    <p>Welcome to page 2 ({props.path})</p>
  </PageLayout>
)

export default About
