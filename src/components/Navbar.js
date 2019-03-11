import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from './rescources/secret_logo.png'

function Navbar(props) {
  let buttonStyle = "w3-bar-item w3-button w3-padding-16";

  return (
    <div className="w3-bar nav w3-xlarge ">
      <img className = "w3-bar-item" src={logo}  height= "65"/>
      <a href="/home/all" className={"w3-bar-item w3-button w3-padding-16 " + ("Home" == props.selection ? 'bgcolor' : '')}>Home</a>
      <a href="/about" className={"w3-bar-item w3-button w3-padding-16 " + ("About" == props.selection ? 'bgcolor' : '')}>About</a>
      <a id="secretButton" href="/new_secret" className="w3-bar-item w3-round-xlarge w3-padding-small w3-orange">Submit Secret</a>
    </div>
  );
}

export default Navbar;
