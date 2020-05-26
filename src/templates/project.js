import React from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image"

import Page from "../components/page"

const PageHeader = ({ image }) => (
  <header>
    <Img fluid={image} />
  </header>
)

const Project = ({
  data: {
    markdownRemark: {
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
      <h2>{topic}</h2>
      <p>date: {date}</p>
      <p>{excerpt}</p>
    </section>
  </Page>
)

export default Project

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
