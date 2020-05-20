import React from "react"

import Page from "../components/page"

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
  <Page
    seoAttr={{ title: "Projects" }}
    headerChild={
      <header classes="h-screen">Welcome to the Projects Page</header>
    }
  >
    {projects.map((prj, i) => (
      <ProjectCard key={i} project={prj} />
    ))}
    <Contact />
  </Page>
)

export default Projects
