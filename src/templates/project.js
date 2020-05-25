import React from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image"

import Page from "../components/page"

const Project = ({
  data: {
    markdownRemark: {
      excerpt,
      frontmatter: { date, title, image },
    },
  },
}) => {
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
        <p>date: {date}</p>
        <p>{excerpt}</p>
      </section>
    </Page>
  )
}

export default Project

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      frontmatter {
        date
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
