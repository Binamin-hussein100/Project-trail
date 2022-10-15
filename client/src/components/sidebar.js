import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'


export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Dashboard',
        path: '/projects',
        icon: <AiIcons.AiFillDashboard/>,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/login',
        icon: <AiIcons.AiFillSetting/>,
        cName: 'nav-text'
    },
    {
        title: 'Log Out',
        path: '/signup',
        icon: <AiIcons.AiOutlineLogout/>,
        cName: 'nav-text'
    }
]