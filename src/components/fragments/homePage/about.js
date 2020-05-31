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
      <section className="my-24 px-3">
        <h1 className="text-center mb-12">About me</h1>
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
        <div className="max-w-sm m-auto py-20">
          <h1 className="pb-16">Hello, nice to meet you!</h1>
          D e s c r i p t i o n D e s c r i p t i o n D e s c r i p t i o n D e
          s c r i p t i o n D e s c r i p t i o n D e s c r i p t i o n D e s c
          r i p t i o n D e s c r i p t i o n D e s c r i p t i o n D e s c r i
          p t i o n D e s c r i p t i o n D e s c r i p t i o n D e s c r i p t
          i o n D e s c r i p t i o n D e s c r i p t i o n
          <br />
          <ul className="pt-16 pl-3" style={{ listStyle: "circle" }}>
            <li className="mb-6">adsfdsaf</li>
            <li className="mb-6">adsfdsaf</li>
            <li className="mb-6">adsfdsaf</li>
            <li className="mb-6">adsfdsaf</li>
            <li className="mb-6">adsfdsaf</li>
          </ul>
        </div>
      </section>
    )}
  />
)

export default About
