import React from "react"

import Layout from "../components/layouts/layout"

import Contact from "../components/fragments/contact"

const projects = [
  {
    title: "Small Project",
  },
  {
    title: "Small Project",
  },
  {
    title: "Small Project",
  },
  {
    title: "Small Project",
  },
]

const ProjectCard = ({ title }) => <p>{title}</p>

const Projects = () => (
  <Layout
    title="Projects"
    headerChild={
      <header classes="h-screen">Welcome to the Projects Page</header>
    }
  >
    {projects.map((prj, i) => (
      <ProjectCard key={i} project={prj} />
    ))}
    <Contact />
  </Layout>
)

export default Projects
