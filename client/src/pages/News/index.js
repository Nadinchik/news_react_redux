import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import SearchField from "react-search-field";
import SearchInput from 'react-search-input';

import * as newsActions from '../../redux/actions/news';
import NewsList from '../../components/NewsList';

// const KEYS_TO_FILTERS = ['posts.title', 'posts.text', 'posts.author'];

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isError: true,
      searchTerm: '',
      value: '',
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }


  // handleChange = event => {
  //   const { value } = event.target;
  //   this.setState({ value });
  // };

  render() {
    const {posts} = this.props;
    console.log('posts', posts);
    return (
      <div className="container">
        <div className="">
          <h1 className="display-3">
            Новости
          </h1>
          <div>
            <SearchInput className="search-input" onChange={this.searchUpdated}/>
          </div>
          <div className="LinkGo">
            <Link to="/login">Login</Link>
          </div>
          <div className="LinkGoUser">
            <Link to="/profile">Profile</Link>
          </div>
        </div>
        <br/>
          <div>
            <NewsList posts={posts}/>
          </div>
      </div>
    );
  }

  searchUpdated(term) {
    this.setState({searchTerm: term});
  }
}

const mapStateToProps = state => ({
  posts: state.newsReducer.posts,
  error: state.newsReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (posts) => dispatch(newsActions.newsRequest(posts))
});

export default connect(mapStateToProps, mapDispatchToProps)(News);