import React from "react"

import Layout from "../components/layouts/layout"

import Contact from "../components/fragments/contact"

const projects = [
  {
    title: "Project title",
  },
  {
    title: "Project title",
  },
  {
    title: "Project title",
  },
  {
    title: "Project title",
  },
]

const ProjectCard = ({ project }) => <p>{project.title}</p>

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
