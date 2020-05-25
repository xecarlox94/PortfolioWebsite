import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Page from "../components/page"

export const query = graphql`
  query($slug: String!) {
    productsJson(slug: { eq: $slug }) {
      title
      description
      price
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Project = ({ data: { productsJson } }) => {
  const { title, description, price, image } = productsJson
  return (
    <Page
      seoAttr={{ title }}
      headerChild={
        <header
          className="bg-fixed bg-cover flex items-center justify-center h-screen"
          style={{
            background: `url(https://picsum.photos/1920/1920/?random)`,
          }}
        >
          <div className="bg-white mx-4 p-4 text-center md:p-8">
            <h1>{title}</h1>
          </div>
        </header>
      }
    >
      <section className="container mx-auto max-w-5xl px-3">
        <Img fluid={image.childImageSharp.fluid} alt={title} />
        <div>{description}</div>
        <p>PRICE: {price}</p>
      </section>
    </Page>
  )
}

export default Project
