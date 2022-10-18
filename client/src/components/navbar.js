import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import  {SideBarData}   from './sidebar'
import Button from "react-bootstrap/Button"



const Navigation = ({user, setUser}) => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    function handleLogoutClick(){
        fetch("/logout",{method: "DELETE"})
        .then((r)=>{
            if(r.ok){
                setUser(null)    
            }
        })

    }

    return (
         <>
            <div fixed='top' className='navbar'>
                
                <Link to='#' className='menu_bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                    <h3 id='logo'><span id='pj'>Abo</span>Jani</h3>
                </Link>
                
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
                    <li>
                        <Button variant="outline-danger" onClick={handleLogoutClick}>

                            < AiIcons.AiOutlineLogout /> 
                            Log Out
                        </Button>
                    </li>
                </ul> 
                              
            </nav>
            
            
         </>
    )
}

export default Navigation;