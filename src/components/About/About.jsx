import React from 'react'
import TechIcon from '../TechIcon/TechIcon'

import profilePhoto from '../../assets/images/istvan-profile.jpg'

import './About.scss'
import about from '../../data/about'


const About = () => {
   const { intro, techStack } = about

   return (
      <div className="about">
         <div className="about__background"></div>
         <div className="about__content">
            <div className="about__content--profile">
               <h2 className="about__content--profile-title">About me</h2>
               <img className="about__content--profile-photo" src={profilePhoto} alt="Istvan"></img>
               <p className="about__content--profile-intro">{intro}</p>
            </div>
         </div>
         <div className="about__techstack">
            <TechIcon name={techStack[0]} />
         </div>
      </div>
   )
}

export default About
