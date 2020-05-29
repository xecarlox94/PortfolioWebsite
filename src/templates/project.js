import React from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image"
import Page from "../components/page"

const PageHeader = ({ image }) => {
  return (
    <header>
      <Img
        fluid={image}
        style={{ maxHeight: "60vh" }}
        imgStyle={{ objectFit: "contain" }}
      />
    </header>
  )
}

const Project = ({
  data: {
    mdx: {
      excerpt,
      frontmatter: {
        date,
        title,
        topic,
        image: {
          childImageSharp: { fluid },
        },
      },
    },
  },
}) => (
  <Page seoAttr={{ title }} headerChild={<PageHeader image={fluid} />}>
    <section className="container mx-auto max-w-5xl px-3">
      <h2 style={{ objectFit: "contain" }}>{topic}</h2>
      <p>date: {date}</p>
      <p>{excerpt}</p>
    </section>
  </Page>
)

export default Project

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date
        title
        topic
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      excerpt
    }
  }
`
