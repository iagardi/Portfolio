import React from 'react'
import { useMediaQuery } from 'react-responsive'

import projects from '../../data/projects'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel'

import './Projects.scss'

const Projects = () => {
   const isNotMobile = useMediaQuery({ minWidth: 768 })


   const projectsJSX = projects.map((project, index) => {
      return <ProjectCard project={project} key={project.name + index} />
   })


   return (
      <div className="projects">
         <div className="projects__background"></div>
         <div className="projects__display">
            {isNotMobile ? projectsJSX : <ProjectCarousel />}
         </div>
      </div>
   )
}

export default Projects
