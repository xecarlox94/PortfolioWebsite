import React from "react"

import Page from "../components/page"

import Contact from "../components/fragments/contact"
import Image from "../components/utils/image"

const projects = [
  {
    title: "Project title",
    img:
      "https://images.pexels.com/photos/1251299/pexels-photo-1251299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Project title",
    img:
      "https://images.pexels.com/photos/1251299/pexels-photo-1251299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Project title",
    img:
      "https://images.pexels.com/photos/1251299/pexels-photo-1251299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
]

const ProjectDesc = ({ project }) => {
  const { title, description } = project
  return (
    <div>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}

const ProjectImg = ({ project }) => (
  <div>
    <Image src={project.img} />
  </div>
)

const Card = ({ child1, child2 }) => {
  return (
    <div className="rounded overflow-hidden shadow-md grid my-64 grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {child1}
      {child2}
    </div>
  )
}

const Projects = () => (
  <Page
    seoAttr={{ title: "Projects" }}
    headerChild={<header>Welcome to the Projects Page</header>}
  >
    <section>
      {projects.map((prj, i) => {
        const img = <ProjectImg project={prj} />
        const desc = <ProjectDesc project={prj} />
        if (i % 2 === 0) {
          return <Card key={i} child1={img} child2={desc} />
        }
        return <Card key={i} child1={desc} child2={img} />
      })}
    </section>
    <Contact />
  </Page>
)

export default Projects
