import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
/*
"Please select a Category..",
"a dream",
"a fantasy",
"a first experience",
"a guilt",
"a lie",
"a pain",
"a random feeling",
"a truth",
"a wild experience",
"Other"
*/

function Sidebar(props) {
  return (
    <div className="sidebar w3-sidebar w3-bar-block w3-border-right">
      <a href="/home/all" className="w3-bar-item w3-button Other">ALL SECRETS</a>
      <a href="/home/a dream" className="w3-bar-item w3-button a-dream">A DREAM</a>
      <a href="/home/a fantasy" className="w3-bar-item w3-button a-fantasy">A FANTASY</a>
      <a href="/home/a first experience" className="w3-bar-item w3-button a-first-experience">A FIRST EXPERIENCE</a>
      <a href="/home/a guilt" className="w3-bar-item w3-button a-guilt">A GUILT</a>
      <a href="/home/a lie" className="w3-bar-item w3-button a-lie">A LIE</a>
      <a href="/home/a pain" className="w3-bar-item w3-button a-pain">A PAIN</a>
      <a href="/home/a random feeling" className="w3-bar-item w3-button a-random-feeling">A RANDOM FEELING</a>
      <a href="/home/a truth" className="w3-bar-item w3-button a-truth">A TRUTH</a>
      <a href="/home/a wild experience" className="w3-bar-item w3-button a-wild-experience">A WILD EXPERIENCE</a>
      <a href="/home/Other" className="w3-bar-item w3-button Other">OTHER</a>

    </div>
  );

}

export default Sidebar;
