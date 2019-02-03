import React, { Component } from 'react';
import * as newsActions from '../../redux/actions/news';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ModalWindow from '../../components/Modal';
import FormAddNews from '../../components/FormAddNews';
import NewsList from '../../components/NewsList';
import UserSection from './UserSection';
import MainLayout from '../../layout/mainLayout';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }


  componentDidMount() {
    const { getPostsByID } = this.props;
    const idUser = localStorage.getItem('idUser');
    getPostsByID(idUser);
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleDeletePost = (id) => {
    const { onDelete } = this.props;
    onDelete(id);
  };

  render() {
    const { isOpen, handleDeletePost } = this.state;
    const { addPost, posts, authUser } = this.props;

    return (
      <MainLayout>
        <div className="container">

          {/*<ProfileData />*/}
          <UserSection user={authUser} />
          <br />
          <button
            className="addButton"
            onClick={this.toggleModal}>
            Добавить новость
          </button>
          <NewsList
            posts={posts}
            handleDeletePost={handleDeletePost}
          />

          <ModalWindow
            isOpen={isOpen}
            handleOpen={this.toggleModal}
          >
            <FormAddNews
              onSubmit={addPost}
              onClose={this.toggleModal}
            />
          </ModalWindow>
        </div>
      </MainLayout>
    );
  }
}

Profile.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

Profile.defaultTypes = {
  posts: [],
};

const mapStateToProps = state => ({
  authUser: state.loginReducer.userData,
  posts: state.newsReducer.posts,
  error: state.newsReducer.error,
  loading: state.newsReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => dispatch(newsActions.addNewsRequest(post)),
  getPostsByID: (id) => dispatch(newsActions.getNewsByIdRequest(id)),
  onDelete: (post) => dispatch(newsActions.deleteNewsRequest(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
