import React from 'react'

import { ReactComponent as Arrow } from '../../assets/icons/arrow-right.svg'

import './ProjectCard.scss'

const ProjectCard = (props) => {
   const { project } = props
   const technologyJSX = project.technology.map((tech, index) => {
      return (
         <p className="projectcard__technologies--list-items" key={tech + index}>{tech}</p>
      )
   })


   return (
      <div className="projectcard">
         <img className="projectcard__photo" src={project.photo} alt={project.name} />
         <h3 className="projectcard__name">{project.name}</h3>
         <p className="projectcard__description">{project.description}</p>
         <div className="projectcard__technologies">
            <p className="projectcard__technologies--label">Tech stack:</p>
            <div className="projectcard__technologies--list">
               {technologyJSX}
            </div>
         </div>
         <div className="projectcard__links">
            <a className="projectcard__links--item" href={project.hostedURL} target="_blank" rel="noreferrer">demo<Arrow className="arrow" /></a>
            <a className="projectcard__links--item" href={project.githubURL} target="_blank" rel="noreferrer">github<Arrow className="arrow" /></a>
         </div>

      </div>
   )
}

export default ProjectCard
