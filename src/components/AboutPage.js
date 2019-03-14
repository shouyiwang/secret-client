import React, { Component } from 'react';
import Navbar from './Navbar'
import logo from './rescources/secret_logo.png'

function AboutPage (props) {

  return (
    <div>
      <Navbar selection={"About"}/>
      <div className= "page">
        <h1>About Secret</h1>
        <img src={logo} />
        <br />
        <br />
        <p>There are thoughts and deeds that you might not be able to reveal to anyone, although sometimes you feel like your mind might explode or your chest might burst if you don’t. What if you could make your own confessions without revealing your identity?</p>
        <br />
        <p>Imagine yourself in a room, alone. You take a piece of paper and you start writing your deepest fears, your wildest fantasies, your craziest memories. No one to judge, no one physically there to criticize, just you and your confessions.</p>
        <br />
        <p>What if you could say out loud what you’ve been keeping inside? What if you could say the whole truth and nothing but the truth? What if you could make your confessions to total strangers without having to fear their reactions? Would you take the leap?</p>
      </div>
    </div>
  );
}

export default AboutPage;
