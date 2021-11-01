import React from 'react'
import TechIcon from '../TechIcon/TechIcon'

import gmail from '../../assets/icons/google-gmail.svg'
import linkedinLogo from '../../assets/icons/linkedin-blue.svg'
import cv from '../../assets/icons/cv.svg'
import githubIcon from '../../assets/icons/github-white.svg'

import './About.scss'
import about from '../../data/about'


const About = () => {
   const { intro, techStack, photo, experience, email, linkedin, github } = about

   const techStackJSX = techStack.map((tech, index) => {
      return <TechIcon name={tech} key={tech + index} />
   })

   const experienceJSX = experience.map((exp, index) => {
      return <p key={exp + index}>{exp}</p>
   })

   return (
      <div className="about">
         <div className="about__background"></div>
         <div className="about__content">
            <div className="about__content--profile">
               <h2 className="about__content--profile-title">About me</h2>
               <img className="about__content--profile-photo" src={photo} alt="Istvan"></img>
               <p className="about__content--profile-intro">{intro}</p>
            </div>
            <div className="about__content--stack">
               <div className="about__content--stack-tech">
                  <h2 className="about__content--stack-tech-title">Tech stack:</h2>
                  <div className="about__content--stack-tech-list">
                     {techStackJSX}
                  </div>
               </div>
               <div className="about__content--stack-exp">
                  <h2 className="about__content--stack-exp-title">Experience:</h2>
                  <div className="about__content--stack-exp-list">
                     {experienceJSX}
                  </div>
               </div>
            </div>
            <div className="about__content--contact">
               <h2 className="about__content--contact-title">Contact me</h2>
               <div className="about__content--contact-list">
                  <a href={email} className="about__content--contact-list-item" target="_blank" rel="noreferrer"><img src={gmail} alt="" /></a>
                  <a href={linkedin} className="about__content--contact-list-item" target="_blank" rel="noreferrer"><img src={linkedinLogo} alt="" /></a>
                  <a href={github} className="about__content--contact-list-item" target="_blank" rel="noreferrer"><img src={githubIcon} alt="" /></a>
                  {/* <a href="#" className="about__content--contact-list-item" target="_blank" rel="noreferrer"><img src={cv} alt="" /></a> */}
               </div>
               <div className="about__content--contact-footer">
                  Istvan Agardi, 2021
               </div>
            </div>
         </div>


      </div >
   )
}

export default About
