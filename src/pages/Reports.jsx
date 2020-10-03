import React from 'react';
import {PageHeader} from '../resources/constants';

function Reports({setPage}) {

    setPage(PageHeader.REPORTS);

    return (
        <div className='reports'>
            <h1>Reports</h1>
        </div>
    );
}

export default Reports;
