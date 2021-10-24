import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Download } from '../../assets/icons/download.svg'

import './NavMenu.scss'

const NavMenu = () => {
   const [showMenu, setShowMenu] = useState(false)
   const [activeNav, setActiveNav] = useState("")

   const handleNavActive = (event) => {
      setActiveNav(event.target.name)
   }

   const handleBurgerMenu = () => {
      setShowMenu(!showMenu)
   }

   return (
      <div className="nav-menu">
         <div className="nav-menu__links">
            <Link to="/home" className={activeNav === "homebutton" ? "nav-menu__links--item--active" : "nav-menu__links--item"} name="homebutton" onClick={handleNavActive}>Home</Link>
            <Link to="/projects" className={activeNav === "projectsbutton" ? "nav-menu__links--item--active" : "nav-menu__links--item"} name="projectsbutton" onClick={handleNavActive}>Projects</Link>
            <Link to="/about" className={activeNav === "aboutbutton" ? "nav-menu__links--item--active" : "nav-menu__links--item"} name="aboutbutton" onClick={handleNavActive}>About</Link>
            <div className="nav-menu__links--item--cv">Resume<Download className="icon" /></div>
         </div>
         <div className="nav-menu__burger" onClick={handleBurgerMenu}>
            <div className="nav-menu__burger--patty"></div>
            <div className="nav-menu__burger--patty"></div>
            <div className="nav-menu__burger--patty"></div>
         </div>
         {showMenu && <div className="nav-menu__temp">
            <Link to="/home" className="nav-menu__temp--item" onClick={handleBurgerMenu}>Home</Link>
            <Link to="/projects" className="nav-menu__temp--item" onClick={handleBurgerMenu}>Projects</Link>
            <Link to="/about" className="nav-menu__temp--item" onClick={handleBurgerMenu}>About</Link>
            <div className="nav-menu__temp--item--cv">Resume<Download className="icon" /></div>
         </div>}
      </div>
   )
}

export default NavMenu
