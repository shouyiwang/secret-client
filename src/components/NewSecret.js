import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import {SECRET_URL} from "./Constants.js";


const categories = [
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
];

class NewSecret extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
      category: 'Other',
      likes: 0,
      dislikes: 0
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleSelect = this._handleSelect.bind(this);
    this._handleText = this._handleText.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    if(this.state.content.length === 0)  return;
    this.saveSecret(this.state);
    this.setState({
      content: '',
      category: 'normal',
      likes: 0,
      dislikes: 0
    });
  }

  _handleSelect(e) {
    //If user doesn't choose anything, category will be "Other"
    if(categories[0] == e.target.value) {
      this.setState( { category: categories[categories.length - 1]});
      return;
    }

    this.setState( { category: e.target.value } );
  }

  _handleText(e) {
    this.setState( { content: e.target.value } );
  }

  saveSecret({content, category, likes, dislikes}) {
    axios.post(SECRET_URL, {content: content, category: category, likes: likes, dislikes: dislikes}).then((results) => {
      let that = this;
      setTimeout(function () {
        that.props.history.push("/");
      }, 1000);

    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="page">
          <h2>Submit Secret</h2>
          <form onSubmit={ this._handleSubmit }>
            <label>Category</label>

            <select onChange={this._handleSelect}>
              { categories.map( (e) => <option>{e}</option>) }
            </select>
            <br />
            <label>Secret</label>

            <textarea className="large" onChange={ this._handleText } placeholder="Your secret..." value={ this.state.content }></textarea>

            <input type="submit" value="Post Secret" />
          </form>
        </div>
      </div >
    );
  }
}

export default NewSecret;
