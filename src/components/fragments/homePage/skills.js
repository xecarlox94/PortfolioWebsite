import React from "react"

const SkillTile = ({ title, subtitle }) => (
  <div className="text-center py-32">
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <p>Expand accordion</p>
  </div>
)

const Skills = () => (
  <section className="my-40">
    <h1 className="text-center">What do I do?</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 divide-x divide-gray-400">
      <SkillTile title="Web Development" subtitle="Full Stack Developer" />
      <SkillTile title="Software Development" subtitle="Versatile Programmer" />
    </div>
  </section>
)

export default Skills
