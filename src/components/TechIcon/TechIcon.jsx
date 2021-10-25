import React from 'react'

import html from '../../assets/icons/html-5.svg'

import './TechIcon.scss'

const TechIcon = (props) => {
   const { name } = props

   const iconJSX = () => {
      switch (name) {
         case "html":
            return (
               <img src={html} className="techicon__icon" />
            )
      }
   }

   return (
      <div className="techicon">
         {iconJSX()}
      </div>
   )
}

export default TechIcon
