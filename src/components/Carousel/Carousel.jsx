import React, { useState } from 'react'

import ProjectCard from '../ProjectCard/ProjectCard'
import projects from '../../data/projects'

import leftArrow from '../../assets/images/carousel-left-arrow.png'
import rightArrow from '../../assets/images/carousel-right-arrow.png'

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

         <ProjectCard project={projects[counter]} />

         <div className="carousel__arrows">
            <img
               src={leftArrow}
               alt="left arrow"
               onClick={handleDecrement}
               className="carousel__arrows-arrow"
            />
            <img
               src={rightArrow}
               alt="right arrow"
               onClick={handleIncrement}
               className="carousel__arrows-arrow"
            />
         </div>

      </div>
   )
}

export default Carousel
