import React from 'react'

import github from '../../assets/icons/github-white.svg'
import linkedin from '../../assets/icons/linkedin-white.svg'

import './Home.scss'

const Home = () => {
   return (
      <div className="home">
         <div className="home__background"></div>
         <div className="home__greeting">
            <div className="home__greeting--intro">
               <h1 >Hi, I am Istvan</h1>
               <h2 >A London based Junior Software Developer</h2>
            </div>
            <button className="home__greeting--button">See my projects</button>
         </div>
         <div className="home__socials">
            <a href="https://github.com/iagardi" target="_blank" rel="noreferrer">
               <img className="home__socials--icon" src={github} alt="github"></img>
            </a>
            <a href="https://www.linkedin.com/in/istvan-agardi-mih-91701681/" target="_blank" rel="noreferrer">
               <img className="home__socials--icon" src={linkedin} alt="linkedin"></img>
            </a>
         </div>
      </div>
   )
}

export default Home
