import React from 'react';
import './AppRoot.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';

function AppRoot() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/reports' component={Reports}/>
                <Route path='/products' component={Products}/>
            </Switch>
        </Router>
    );
}

export default AppRoot;
