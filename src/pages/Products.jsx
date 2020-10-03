import React from 'react';
import {PageHeader} from '../resources/constants';

function Products({setPage}) {

    setPage(PageHeader.PRODUCTS);

    return (
        <div className='products'>
            <h1>Products</h1>
        </div>
    );
}

export default Products;
