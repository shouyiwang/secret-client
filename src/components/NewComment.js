import React, { Component } from 'react';
import { Route , withRouter} from 'react-router-dom';
import axios from 'axios';

const COMMENT_URL = 'https://secret-share-server.herokuapp.com/comments.json';

class NewComment extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this.saveComment = this.saveComment.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    if(this.state.content.length === 0)  return;

    this.saveComment(this.state);
    this.setState({
      content: '',
    });
  }

  _handleChange(e) {
    this.setState( { content: e.target.value } );
  }

  saveComment({content}) {
    console.log(this.props.id);
    axios.post(COMMENT_URL, {content: content, secret_id: this.props.id}).then((results) => {
      window.location.reload();
    });
  }


  render() {
    return (
      <form onSubmit={ this._handleSubmit }>
        <textarea onChange={ this._handleChange } placeholder="Your comment..." value={ this.state.content }></textarea>
        <input type="submit" value="Post Comment" />
      </form>
    );
  }
}

export default NewComment;
