import React from 'react'


import './ProjectCard.scss'

const ProjectCard = (props) => {
   const { project } = props
   const technologyJSX = project.technology.map((tech, index) => {
      return (
         <p className="projectcard__technologies--tech" key={tech + index}>{tech}</p>
      )
   })


   return (
      <div className="projectcard">
         <img className="projectcard__photo" src={project.photo} alt={project.name} />
         <h2 className="projectcard__name">{project.name}</h2>
         <h3 className="projectcard__description">{project.description}</h3>
         <div className="projectcard__technologies">
            {technologyJSX}
         </div>
         <div className="projectcard__links">
            <a className="projectcard__links--item" href={project.hostedURL} target="_blank" rel="noreferrer">demo</a>
            <a className="projectcard__links--item" href={project.githubURL} target="_blank" rel="noreferrer">github</a>
         </div>

      </div>
   )
}

export default ProjectCard
