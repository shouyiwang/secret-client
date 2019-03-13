import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import SecretPage from './SecretPage';
import axios from 'axios';
import {SINGLE_SECRET_URL} from './Constants';

class SecretCard extends Component {
  constructor(props) {
    super();
    this.state = {
      likes: props.secret.likes,
      dislikes: props.secret.dislikes
    };
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {
    if(e.target.className.includes("up")) {
      this.updateSecret(this.state.likes + 1, this.state.dislikes);
    }
    else {
      this.updateSecret(this.state.likes, this.state.dislikes + 1);
    }
  }

  updateSecret(likes, dislikes) {
    axios.put(`${SINGLE_SECRET_URL}${this.props.secret.id}.json`, {likes: likes, dislikes: dislikes}).then((results) => {
      this.setState( { likes: likes, dislikes: dislikes} );
    });
  }

  render() {
    return (
      <div className="card">
        <div className="label-div">
          <label className={"category " + this.props.secret.category.replace(/ /g, "-")}>  {this.props.secret.category}</label>
        </div>
        <Link to={`/secret_page/${this.props.secret.id}`}>{this.props.secret.content}</Link>

        <br />
        <div className="likes-icons">
          <i className="far fa-thumbs-up" onClick={this._handleClick}></i> {this.state.likes} &nbsp; &nbsp;
          <i className="far fa-thumbs-down" onClick={this._handleClick}></i> {this.state.dislikes}  &nbsp; &nbsp;
          <i className="far fa-comment"></i> {this.props.secret.comments_size}
        </div>
      </div>
    );
  }
}

export default SecretCard;
