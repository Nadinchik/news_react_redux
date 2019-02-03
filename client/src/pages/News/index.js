import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput from '../../components/SearchField';

import * as newsActions from '../../redux/actions/news';
import NewsList from '../../components/NewsList';
import MainLayout from '../../layout/mainLayout';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isError: true,
    };
  }

  componentDidMount() {
    const { getAllPosts, posts } = this.props;
    getAllPosts(posts);
  }

  render() {
    const { posts } = this.props;
    return (
      <MainLayout>
        <div className="container">
          <h1 className="display-3">
            Новости
          </h1>
          <SearchInput />
        </div>
        <NewsList posts={posts} />
      </MainLayout>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.newsReducer.posts,
  error: state.newsReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  getAllPosts: (posts) => dispatch(newsActions.getAllNewsRequest(posts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);