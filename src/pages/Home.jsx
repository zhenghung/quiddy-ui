import React from 'react';
import {PageHeader} from '../resources/constants';

function Home({setPage}) {

    setPage(PageHeader.HOME);

    return (
        <div className='home'>
            <h1>Home</h1>
        </div>
    );
}

export default Home;
