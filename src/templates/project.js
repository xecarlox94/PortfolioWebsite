import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Img from "gatsby-image"
import Page from "../components/page"

const PageHeader = ({ image }) => (
  <header>
    <Img
      fluid={image}
      style={{ maxHeight: "60vh" }}
      imgStyle={{ objectFit: "contain" }}
    />
  </header>
)

// https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/

// https://www.gatsbyjs.org/packages/gatsby-remark-images/

const Project = ({
  data: {
    mdx: {
      body,
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
      <MDXRenderer>{body}</MDXRenderer>
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
      body
    }
  }
`
