import React, {useState} from 'react';
import './AppRoot.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';

function AppRoot() {
    const [page, setPage] = useState('');

    return (
        <Router>
            <Navbar page={page}/>
            <Switch>
                <Route path='/' exact component={() => <Home setPage={setPage}/>}/>
                <Route path='/dashboard' component={() => <Dashboard setPage={setPage}/>}/>
                <Route path='/reports' component={() => <Reports setPage={setPage}/>}/>
                <Route path='/products' component={() => <Products setPage={setPage}/>}/>
            </Switch>
        </Router>
    );
}

export default AppRoot;
