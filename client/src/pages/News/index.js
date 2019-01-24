import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import SearchField from "react-search-field";
import SearchInput from 'react-search-input';

import ModalWindow from '../../components/Modal';
import FormAddNews from '../../components/FormAddNews';
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


  toggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      isEdit: false,
      isError: false
    }));
  };

  // handleChange = event => {
  //   const { value } = event.target;
  //   this.setState({ value });
  // };

  render() {
    const {isOpen, isError} = this.state;
    const {addPost, posts} = this.props;
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
            isError={this.isError}
          />
        </ModalWindow>
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
  addPost: (post) => dispatch(newsActions.addNewRequest(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);