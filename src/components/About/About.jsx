import React from 'react'
import TechIcon from '../TechIcon/TechIcon'

import profilePhoto from '../../assets/images/istvan-profile.jpg'

import './About.scss'
import about from '../../data/about'


const About = () => {
   const { intro, techStack, photo, experience } = about

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
         </div>


      </div >
   )
}

export default About
