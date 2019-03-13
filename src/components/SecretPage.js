import React, { Component } from 'react';
import axios from 'axios';
import NewComment from './NewComment'
import Navbar from './Navbar'
import './style.css'
import ShareButton from 'react-social-share-buttons'
import {SINGLE_SECRET_URL} from "./Constants"

class SecretPage extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      category: "",
      likes: 0,
      dislikes: 0,
      comments: []
    };
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchSecret();
  }

  fetchSecret = () => {
    axios.get(`${SINGLE_SECRET_URL}${this.props.match.params.id}.json`).then( (result) => {
      this.setState({
        content: result.data.content,
        category: result.data.category,
        likes: result.data.likes,
        dislikes: result.data.dislikes,
        comments: result.data.comments
      });

    });
  };

  _handleClick(e) {
    if(e.target.className.includes("up")) {
      this.updateSecret(this.state.likes + 1, this.state.dislikes);
    }
    else {
      this.updateSecret(this.state.likes, this.state.dislikes + 1);
    }
  }

  updateSecret(likes, dislikes) {
    axios.put(`${SINGLE_SECRET_URL}${this.props.match.params.id}.json`, {likes: likes, dislikes: dislikes}).then((results) => {
      this.setState( { likes: likes, dislikes: dislikes} );
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="page">
        {/*
          <div className="label-div">
            <label className={"category " + this.state.category.replace(/ /g, "-")}> {this.state.category}</label>
          </div>*/ }
          <div className="likes-icons">
            <i className="far fa-thumbs-up" onClick={this._handleClick}></i> {this.state.likes} &nbsp; &nbsp;
            <i className="far fa-thumbs-down" onClick={this._handleClick}></i> {this.state.dislikes}  &nbsp; &nbsp;
          </div>
          <br />
          <Content content={this.state.content} />

          <h3>{this.state.comments.length} Comment{this.state.comments.length === 1 ? '' : 's'}</h3>
          <div className="comments">
            <ul>
              { this.state.comments.reverse().map( (s) => <li key={s.id}>{s.content}</li> ) }
            </ul>
          </div>
          <ShareButtons id={this.props.match.params.id}/>
          <NewComment id={this.props.match.params.id}/>
        </div>
      </div>
    );
  }
}

const Content = function({content}) {
  return (<p>{content}</p> );
}

function ShareButtons({id}) {
  let url = "google.com/secret_page/" + id;
    return (
        <div className="share-block">
            <br />
            <div className= "share-button">
              <ShareButton
                socialMedia={'facebook'}
                url={url}
                media={"https://imgs.xkcd.com/comics/error_code.png"}
                text="Funny secret here"
              />
            </div>
            <div className= "share-button">
              <ShareButton
                compact
                socialMedia={'google-plus'}
                url={url}
                media={"https://imgs.xkcd.com/comics/error_code.png"}
                text="Funny secret here"
              />
            </div>
            <div className= "share-button">
              <ShareButton
                compact
                socialMedia={'twitter'}
                url={url}
                media={"https://imgs.xkcd.com/comics/error_code.png"}
                text="Funny secret here"
              />
            </div>
            <div className= "share-button">
              <ShareButton
                compact
                socialMedia={'pinterest'}
                url={url}
                media={"https://imgs.xkcd.com/comics/error_code.png"}
                text="Funny secret here"
              />
            </div>
        </div>
    );
}


export default SecretPage;
