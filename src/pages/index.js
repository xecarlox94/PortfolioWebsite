import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layouts/layout"

const IndexPage = () => (
  <Layout title="Home">
    <h1>Home page</h1>
    <Link to="/about/">Go to About</Link>
    <br />
    <br />
    <Link to="/404/">Go to not found</Link>
  </Layout>
)

export default IndexPage
