import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SecretPanel from './SecretPanel'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar selection={"Home"}/>
        <Sidebar />
        <SecretPanel category={this.props.match.params.category}/>
      </div>
    );
  }
};

export default Home;
