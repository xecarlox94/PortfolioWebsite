// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/utils/seo"

const Portfolio = props => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Portfolio</h1>
    <p>Welcome to page 2 ({props.path})</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Portfolio
