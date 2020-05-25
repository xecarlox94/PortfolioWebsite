import React from "react"

import Page from "../components/page"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    productsJson(slug: { eq: $slug }) {
      title
      description
      price
    }
  }
`

const Project = ({ data: { productsJson } }) => {
  const { title, description, price } = productsJson
  return (
    <Page
      seoAttr={{ title }}
      headerChild={
        <header
          className="bg-fixed bg-cover flex items-center justify-center h-screen"
          style={{
            background: `url(https://images.pexels.com/photos/1251299/pexels-photo-1251299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
          }}
        >
          <div className="bg-white mx-4 p-4 text-center md:p-8">
            <h1>{title}</h1>
          </div>
        </header>
      }
    >
      <section className="container mx-auto max-w-5xl px-3">
        <div>{description}</div>
        <p>PRICE: {price}</p>
      </section>
    </Page>
  )
}

export default Project
