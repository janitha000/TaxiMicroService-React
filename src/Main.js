import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './Header/Header'
import Signin from './Auth/Signin'
import SignUp from './Auth/Signup'
import Home from './Home/HomePage'

import Login from './Auth/Class/LoginClass'
import SignUpClass from './Auth/Class/SignupClass'

import Clock from './Clock/Clock';

import FilterProductTable from './ThinkReact/FilerProductTable'
import DriverList from './Driver/DriverListMain'

class Main extends React.Component {
    render() {
        return (
            <Router>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/driver" component = {DriverList} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={SignUpClass} />
            </Router>
        )
    }
}



export default Main;