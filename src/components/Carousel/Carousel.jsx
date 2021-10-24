import React, { useState } from 'react'

import ProjectCard from '../ProjectCard/ProjectCard'
import projects from '../../data/projects'

import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";

import './Carousel.scss'

const Carousel = (props) => {

   const [counter, setCounter] = useState(0);
   const handleIncrement = () => {
      if (counter === projects.length - 1) {
         setCounter(0);
      } else {
         setCounter(counter + 1);
      }
   };

   const handleDecrement = () => {
      if (counter === 0) {
         setCounter(projects.length - 1);
      } else {
         setCounter(counter - 1);
      }
   };
   return (
      <div className="carousel">
         <img
            src={leftArrow}
            alt="left arrow"
            onClick={handleDecrement}
            className="carousel__arrow carousel__arrow--left"
         />
         <ProjectCard project={projects[counter]} />
         <img
            src={rightArrow}
            alt="right arrow"
            onClick={handleIncrement}
            className="carousel__arrow carousel__arrow--right"
         />

      </div>
   )
}

export default Carousel
