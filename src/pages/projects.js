import React from "react"

import Page from "../components/page"

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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
]

const Card = ({ project }) => {
  const { title, img, description } = project
  return (
    <div className="max-w-2xl mx-auto my-56">
      <div className="rounded-lg overflow-hidden shadow-lg mx-5">
        <Img className="w-full" src={img} alt={description} />
        <div className="p-6">
          <div className="mb-2 pb-5">{title}</div>
          <p>{description}</p>
        </div>
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
  </Page>
)

export default Projects
