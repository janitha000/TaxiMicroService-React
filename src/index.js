import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import * as serviceWorker from './serviceWorker';
import Notfound from './NotFound';
import Driver from './Driver';

import Main from './Main';


import ButtonAppBar from './ButtonAppBar';
import Home from './Home/HomePage';



//ReactDOM.render((
    // <Router>
    //     <div>
    //         {/* <Route path="/" component={Home} /> */}
    //         <Route path="/login" component={Signin} />
    //         <Route path="/signup" component={SignUp} />
    //         <Route path="/driver/:id" component={Driver} />
    //         <Route component={Notfound} />
    //     </div>
    // </Router>), document.getElementById('root'));

ReactDOM.render(<Main />, document.getElementById('root'));
//ReactDOM.render(<ButtonAppBar />, document.getElementById('root'));

serviceWorker.unregister();