import React, {useState} from 'react';
import './AppRoot.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function AppRoot() {
    const [page, setPage] = useState('');

    const redirect = () => {
        return <Login/>;
        // return <Dashboard page={page} setPage={setPage}/>;
    };

    return (
        <Router>
            <Switch>
                <Route path='/' exact component={redirect}/>
                <Route path='/login' component={() => <Login/>}/>
                <Route path='/dashboard' component={() => <Dashboard page={page} setPage={setPage}/>}/>
                <Route path='/spending' component={() => <Dashboard page={page} setPage={setPage}/>}/>
                {/*<Route path='/logout' component={() => <Dashboard page={page} setPage={setPage}/>}/>*/}
            </Switch>
        </Router>
    );
}

export default AppRoot;
