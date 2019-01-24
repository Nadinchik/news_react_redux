import React, {Component} from 'react';
import * as newsActions from "../../redux/actions/news";
import {connect} from "react-redux";

import ModalWindow from "../../components/Modal";
import FormAddNews from "../../components/FormAddNews"
import NewsList from "../../components/NewsList";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isError: true
    }
  }

  // const getPostsByIdUsers = (name) => ({
  //   type: 'authenticate',
  //   name: name
  // });

  componentDidMount() {
    console.log('this.props -->', this.props);
    const {posts} = this.state;
    const {getPosts} = this.props;
    getPosts(posts);
  }

  // handleAddNews = () => {
  //     this.props.addNews({title: this.state.title})
  // };

  // handleInput = (event) => {
  //   const {name, value} = event.target;
  //   this.setState(prevState => ({news: {...prevState.news, [name]: value}}));
  // };

  toggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      isError: false
    }));
  };


  render() {
    const {isOpen, isError} = this.state;
    const {addPost, posts} = this.props;
    return (
      <div className="container">
        <div className="LinkGoBack">
          <Link to="/news">Back to News page</Link>
        </div>
        <div>
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
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => dispatch(newsActions.addNewsRequest(post)),
  getPosts: (posts) => dispatch(newsActions.getNewsByIdRequest(posts, 1))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
