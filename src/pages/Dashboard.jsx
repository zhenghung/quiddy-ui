import React from 'react';
import {PageHeader} from '../resources/constants';
import Table from 'react-bootstrap/Table';
import Navbar from '../components/Navbar';

function Dashboard({page, setPage}) {

    setPage(PageHeader.DASHBOARD);

    return (
        <div className='main'>
            <Navbar page={page}/>
            <div className='dashboard'>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Dashboard;
