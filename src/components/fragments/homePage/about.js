import React from "react"

import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

const About = () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        imageSharp(fixed: { originalName: { eq: "portrait.jpeg" } }) {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    `}
    render={({ imageSharp: { fluid } }) => (
      <section className="my-20 px-4">
        <h1 className="text-center mb-10" style={{}}>
          About me
        </h1>
        <Img
          className="mx-auto "
          fluid={fluid}
          alt="Jose Fernandes"
          style={{
            minHeight: "10rem",
            minWidth: "10rem",
            height: "33%",
            width: "33%",
          }}
          imgStyle={{
            objectFit: "contain",
            borderRadius: "1rem",
          }}
        />
        <div className="text-center">
          <p>Description</p>
        </div>
      </section>
    )}
  />
)

export default About
