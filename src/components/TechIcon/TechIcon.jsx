import React from 'react'

import html from '../../assets/icons/html-5.svg'
import css from '../../assets/icons/css-3.svg'
import cypress from '../../assets/icons/cypress.svg'
import git from '../../assets/icons/git-icon.svg'
import github from '../../assets/icons/github-icon.svg'
import java from '../../assets/icons/java.svg'
import javascript from '../../assets/icons/javascript.svg'
import jest from '../../assets/icons/jest.svg'
import react from '../../assets/icons/react.svg'
import sass from '../../assets/icons/sass.svg'

import './TechIcon.scss'

const TechIcon = (props) => {
   const { name } = props

   const iconJSX = () => {
      switch (name) {
         case "html":
            return (
               <img src={html} className="techicon__icon" alt="html" title="Html" />
            )
         case "css":
            return (
               <img src={css} className="techicon__icon" alt="css" title="Css" />
            )
         case "cypress":
            return (
               <img src={cypress} className="techicon__icon" alt="cypress" title="Cypress" />
            )
         case "git":
            return (
               <img src={git} className="techicon__icon" alt="git" title="Git" />
            )
         case "github":
            return (
               <img src={github} className="techicon__icon" alt="github" title="Github" />
            )
         case "java":
            return (
               <img src={java} className="techicon__icon" alt="java" title="Java" />
            )
         case "javascript":
            return (
               <img src={javascript} className="techicon__icon" alt="javascript" title="JavaScript" />
            )
         case "jest":
            return (
               <img src={jest} className="techicon__icon" alt="jest" title="Jest" />
            )
         case "react":
            return (
               <img src={react} className="techicon__icon" alt="react" title="React" />
            )
         case "sass":
            return (
               <img src={sass} className="techicon__icon" alt="sass" title="Sass" />
            )
         default: return
      }
   }

   return (
      <div className="techicon">
         {iconJSX()}
      </div>
   )
}

export default TechIcon
