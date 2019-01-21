import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux"

import ModalWindow from "../../components/Modal";
import FormAddNews from "../../components/FormAddNews"
import SearchInput from '../../components/SearchInput'
import {addNews} from "../../redux/actions/news";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isEdit: false,
      news:{
        title: '',
        text: '',
        date: 0,
        author: '',
      }
    }
  }

  AddNews = (e) => {
    e.preventDefault();
    const {news: {title, text, author, date}} = this.state;
    if(title.trim() && text.trim() && author.trim() && date.trim()){
      this.props.addNews(this.state);
      this.setState({
        news:{
          title:'',
          text:'',
          author:'',
          date:0
        }
      })
    }
  };

  handleInput = (event) => {
    const {name, value} = event.target;
    this.setState(prevState => ({news: { ...prevState.news, [name]: value }}));
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
          <ul>
            {this.props.news.map((news, index) =>
              <li key={index}>
                <h2>{news.title}</h2>
                <p>{news.text}</p>
                <span>{news.author}</span>
                <h5>{news.date}</h5>
              </li>
            )}
          </ul>
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