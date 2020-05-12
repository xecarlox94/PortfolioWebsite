// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"
import PageLayout from "../components/layouts/globals/pageLayout"

const Portfolio = props => (
  <PageLayout>
    <h1>Portfolio</h1>
    <p>Welcome to page 2 ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
  </PageLayout>
)

export default Portfolio
