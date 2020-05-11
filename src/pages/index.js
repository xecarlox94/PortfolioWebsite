import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"

const IndexPage = () => (
  <Layout title="Home">
    <h1>Home</h1>
    <Link to="/portfolio/">Go to Portfolio</Link>
    <br />
    <br />
    <Link to="/404/">Go to not found</Link>
  </Layout>
)

export default IndexPage
