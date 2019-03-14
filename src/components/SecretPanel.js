import React, { Component } from 'react';
import axios from 'axios';
import SecretCard from './SecretCard';
import "./style.css";
import {SECRET_URL} from "./Constants.js";
import ReactPaginate from 'react-paginate';

const SECRETS_PER_PAGE = 30;

class SecretPanel extends Component {
  constructor() {
    super();
    this.state = {
      secrets: [],
      offset: 0,
      pageCount: 0
    };
  }

  componentDidMount() {
    this.fetchSecrets(0);
  }

  fetchSecrets = (offset) => {
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
        category: cat,
        offset: offset
      }}).then( (results) => {
      this.setState({
        secrets: results.data.secrets,
        pageCount: Math.ceil(results.data.total_count / SECRETS_PER_PAGE),
      });

      window.scrollTo(0, 0);

    });
  };

  handlePageClick = e => {
    let selected = e.selected;
    console.log(e.selected);
    let offset = Math.ceil(selected * SECRETS_PER_PAGE);

    this.setState({ offset: offset }, () => {
      this.fetchSecrets(offset);
    });
  };

  render() {
    return (
      <div className = "secret-panel">
        <ul>
          { this.state.secrets.map( (s) => <li className="inline" key={s.id}><SecretCard secret={s}/></li> ) }
        </ul>
        <div className = "paginate">
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={this.handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
            />
        </div>
      </div>
    );
  }
}

export default SecretPanel;
