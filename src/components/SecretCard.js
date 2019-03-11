import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import SecretPage from './SecretPage'

class SecretCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="label-div">
          <label className={"category " + this.props.secret.category.replace(/ /g, "-")}>  {this.props.secret.category}</label>
        </div>
        <Link to={`/secret_page/${this.props.secret.id}`}>{this.props.secret.content}</Link>

        <br />
        <div className="likes-icons">
          <i className="far fa-thumbs-up"></i> {this.props.secret.likes} &nbsp; &nbsp;
          <i className="far fa-thumbs-down"></i> {this.props.secret.dislikes}  &nbsp; &nbsp;
          <i className="far fa-comment"></i> {this.props.secret.comments_size}
        </div>
      </div>
    );
  }
}

export default SecretCard;
