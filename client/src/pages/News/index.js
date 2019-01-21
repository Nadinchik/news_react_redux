import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux"

import ModalWindow from "../../components/Modal";
import FormAddNews from "../../components/FormAddNews"
import SearchInput from '../../components/SearchInput'
import {addNews} from "../../redux/actions/news";
import NewsList from "../../components/NewsList";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isEdit: false,
      news: {
        title: '',
        text: '',
        date: new Date(),
        author: '',
      }
    }
  }

  // const guid = () => {
  //   function s4() {
  //     return Math.floor((1 + Math.random()) * 0x10000)
  //       .toString(16)
  //       .substring(1);
  //   }
  //   return s4() + s4() + '-' + s4();
  // };

  AddNews = (e) => {
    e.preventDefault();
    const {news: {title, text, author}} = this.state;
    if (title.trim() && text.trim() && author.trim()) {
      this.props.addNews(this.state.news);
    }
  };

  handleInput = (event) => {
    const {name, value} = event.target;
    this.setState(prevState => ({news: {...prevState.news, [name]: value}}));
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      isEdit: false
    }));
  };

  render() {
    const {isOpen, news} = this.state;
    console.log('news', news);
    return (
      <div className="container">
        <div className=''>
          <h1 className="display-3">
            Новости
          </h1>
          <SearchInput/>
          <div className="LinkGo">
            <Link to="/login">Login</Link>
          </div>
          <div className="LinkGoUser">
            <Link to="/user">User</Link>
          </div>
        </div>
        <div>
          <button
            className="addButton"
            onClick={this.toggleModal}>
            Добавить новость
          </button>
          <NewsList
            news={news}
          />
        </div>

        <ModalWindow
          isOpen={isOpen}
          handleOpen={this.toggleModal}
        >
          <FormAddNews
            news={news}
            handleInput={this.handleInput}
            AddNews={this.AddNews}
            onClose={this.toggleModal}
          />
        </ModalWindow>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.newsReducer.news,
});

const mapDispatchToProps = {
  addNews
};

export default connect(mapStateToProps, mapDispatchToProps)(News);