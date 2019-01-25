import React, {Component} from 'react';
import * as newsActions from "../../redux/actions/news";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import ModalWindow from "../../components/Modal";
import FormAddNews from "../../components/FormAddNews"
import NewsList from "../../components/NewsList";


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isError: true
    }
  }

  componentDidMount() {
    console.log('this.props -->', this.props);
    const {getPosts, posts} = this.props;
    getPosts(posts);
  }


  toggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      isError: false
    }));
  };

  render() {
    const {isOpen, isError} = this.state;
    const {addPost, posts, error, loading,} = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container">
        <div className="LinkGoBack">
          <Link to="/news">Back to News page</Link>
        </div>
        <div>
          <br/>
          <button
            className="addButton"
            onClick={this.toggleModal}>
            Добавить новость
          </button>
          <div>
            <NewsList posts={posts}/>
          </div>
        </div>

        <ModalWindow
          isOpen={isOpen}
          handleOpen={this.toggleModal}
        >
          <FormAddNews
            onSubmit={addPost}
            onClose={this.toggleModal}
            isError={isError}
          />
        </ModalWindow>
      </div>
    )
  }
}

Profile.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

Profile.defaultTypes = {
  posts: [],
};

const mapStateToProps = state => ({
  posts: state.newsReducer.posts,
  error: state.newsReducer.error,
  loading: state.newsReducer.loading
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => dispatch(newsActions.addNewsRequest(post)),
  getPosts: (posts) => dispatch(newsActions.getNewsByIdSuccess(posts))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
