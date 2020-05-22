import React from "react"

import Page from "../components/page"

import Contact from "../components/fragments/contact"
import Img from "../components/utils/img"

const projectsArr = [
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

const Card = ({ project }) => {
  const { title, img, description } = project
  return (
    <div className="max-w-2xl rounded-lg mx-auto overflow-hidden shadow-lg my-56 px-4">
      <Img className="w-full rounded-lg" src={img} alt={description} />
      <div className="p-10">
        <div className="mb-2 pb-5">{title}</div>
        <p>{description}</p>
      </div>
    </div>
  )
}

const Projects = () => (
  <Page
    seoAttr={{ title: "Projects" }}
    headerChild={<header>Welcome to the Projects Page</header>}
  >
    <section>
      {projectsArr.map((prj, i) => (
        <Card key={i} project={prj} />
      ))}
    </section>
    <Contact />
  </Page>
)

export default Projects
