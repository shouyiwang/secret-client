import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SecretPanel from './SecretPanel'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

class Home extends Component {
  render() {
    return (
      <div className = "home">
        <div className = "element">
          <Navbar selection={"Home"}/>
          <Sidebar />
          <SecretPanel category={this.props.match.params.category}/>
        </div>
      </div>
    );
  }
};

export default Home;
