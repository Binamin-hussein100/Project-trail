import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import  {SideBarData}   from './sidebar'


const Navigation = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
         <>
            <div fixed='top' className='navbar'>
                <Link to='#' className='menu_bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <h3 id='logo'><span id='pj'>Prj</span>ALLIANCE</h3>
            </div>
            <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    {SideBarData.map((item, index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
         </>
    )
}

export default Navigation;