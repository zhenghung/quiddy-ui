import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text',
    },
    {
        title: 'Spending History',
        path: '/spending',
        icon: <IoIcons.IoIosJournal/>,
        cName: 'nav-text',
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName: 'nav-text',
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <FaIcons.FaSignOutAlt/>,
        cName: 'nav-text',
    },
];
