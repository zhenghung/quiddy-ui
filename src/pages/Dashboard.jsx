import React from 'react';
import {PageHeader} from '../resources/constants';

function Dashboard({setPage}) {

    setPage(PageHeader.DASHBOARD);

    return (
        <div className='dashboard'>
            <h1>Dashboard</h1>
        </div>
    );
}

export default Dashboard;
