import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import '../styles/Navbar.css'
import { IconContext } from 'react-icons/lib'

function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  // EventListeners
  const showSidebar = () => setSidebar(!sidebar)

  // Auxiliary Functions

  // Render
  return (<>
    <IconContext.Provider value={{color:'#fff'}}>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
          </li>

          {
            SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </IconContext.Provider>
  </>)
}

export default Navbar
