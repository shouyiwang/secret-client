import React, { Component } from 'react';
import axios from 'axios';
import SecretCard from './SecretCard';
import "./style.css";

const SECRET_URL = 'https://secret-share-server.herokuapp.com/secrets.json';

class SecretPanel extends Component {
  constructor() {
    super();
    this.state = {
      secrets: []
    };
  }

  componentDidMount() {
    this.fetchSecrets();
  }

  fetchSecrets = () => {
    //if no category is provided, such as localhost:3001, we'll display all secrets
    let cat;
    if (!this.props.category || this.props.category.length === 0) {
      cat = "all";
    }
    else {
      cat = this.props.category;
    }

    axios.get(SECRET_URL, {
    params: {
      category: cat
    }}).then( (results) => {
      this.setState({secrets: results.data});
    });
  };

  render() {
    return (
      <div className = "secret-panel">
        <ul>
          { this.state.secrets.map( (s) => <li className="inline" key={s.id}><SecretCard secret={s}/></li> ) }
        </ul>
      </div>
    );
  }
}

export default SecretPanel;
