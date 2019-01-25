import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SearchInput from '../../components/SearchField';

import * as newsActions from '../../redux/actions/news';
import NewsList from '../../components/NewsList';


class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isError: true,
    };
  }


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
           <SearchInput />
            </div>
          </div>
          <div className="LinkGo">
            <Link to="/login">Login</Link>
          </div>
          <div className="LinkGoUser">
            <Link to="/profile">Profile</Link>
          </div>
        <br/>
          <div>
            <NewsList posts={posts}/>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.newsReducer.posts,
  error: state.newsReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (posts) => dispatch(newsActions.newsRequest(posts)),

});

export default connect(mapStateToProps, mapDispatchToProps)(News);