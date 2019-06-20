import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import ButtonAppBar from './ButtonAppBar';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: 'Janitha'
    }
    this.updateName = this.updateName.bind(this);
  };
  updateName() {
    this.setState({ Name: 'Vindya' })
  }
  render() {
    return (
      // <div>
      //       <ul>
      //       <li> <Link to="/">Home</Link></li>
      //       <li><Link to="/login">Login</Link></li>
      //       <li><Link to="/driver">Driver</Link></li>
      //       <li><Link to="/contact">Contact</Link></li>
      //       </ul>
      //       {this.props.children}
      //    </div>

      <div>
        <ButtonAppBar />
      </div>
    );
  }
}


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        Content page
      </div>

    );
  }
}
export default App;

