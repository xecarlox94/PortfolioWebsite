// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import PageLayout from "../components/layouts/globals/pageLayout"

const About = props => (
  <PageLayout>
    <h1>About</h1>
    <p>Welcome to page 2 ({props.path})</p>
  </PageLayout>
)

export default About
