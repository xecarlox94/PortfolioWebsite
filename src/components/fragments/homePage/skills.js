import React from "react"

const SkillTile = ({ title, subtitle }) => (
  <div className="text-center py-32">
    <h1 className="font-bold text-xl text-center">{title}</h1>
    <h2 className="text-lg text-center">{subtitle}</h2>
  </div>
)

const Skills = () => (
  <section className="my-32 grid grid-cols-1 lg:grid-cols-2 divide-x divide-gray-400">
    <SkillTile title="Web Development" subtitle="Full Stack Developer" />
    <SkillTile title="Software Development" subtitle="Versatile Programmer" />
  </section>
)

export default Skills
