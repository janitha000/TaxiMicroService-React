import React from 'react';
import { Route, Link } from 'react-router-dom'


class Driver extends React.Component {
    render() {
        const { url } = this.props.match
        return (
            <div>
                <h1>Driver</h1>
                <strong>Select a driver</strong>
                <ul><li><Link to="/driver/1"> Driver 1</Link></li></ul>
                <ul><li><Link to="/driver/2"> Driver 2</Link></li></ul>
                <ul><li><Link to="/driver/3"> Driver 3</Link></li></ul>
              <Route path="/users/:id" component ={Driver}/> 
            </div>
        )
    }
}

export default Driver;