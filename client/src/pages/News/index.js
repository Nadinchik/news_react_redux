import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux"
// import SearchField from "react-search-field";
import SearchInput from 'react-search-input';

import ModalWindow from "../../components/Modal";
import FormAddNews from "../../components/FormAddNews"
import {addNews} from "../../redux/actions/news";
import NewsList from "../../components/NewsList";

// const KEYS_TO_FILTERS = ['posts.title', 'posts.text', 'posts.author'];

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isEdit: false,
            searchTerm: '',
            value: '',
            posts: {
                title: '',
                text: '',
                date: new Date(),
                author: '',
            }
        };
        this.searchUpdated = this.searchUpdated.bind(this)
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
        const {posts: {title, text, author}} = this.state;
        if (title.trim() && text.trim() && author.trim()) {
            this.props.addNews(this.state);
        }
    };

    handleInput = (event) => {
        const {name, value} = event.target;
        this.setState(prevState => ({posts: {...prevState.posts, [name]: value}}));
    };

    toggleModal = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
            isEdit: false
        }));
    };

    // handleChange = event => {
    //   const { value } = event.target;
    //   this.setState({ value });
    // };

    render() {
        const {isOpen, posts} = this.state;
        console.log('posts', posts);
        return (
            <div className="container">
                <div className=''>
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
                        posts={posts}
                    />
                </div>

                <ModalWindow
                    isOpen={isOpen}
                    handleOpen={this.toggleModal}
                >
                    <FormAddNews
                        posts={posts}
                        handleInput={this.handleInput}
                        AddNews={this.AddNews}
                        onClose={this.toggleModal}
                    />
                </ModalWindow>
            </div>
        )
    }

    searchUpdated(term) {
        this.setState({searchTerm: term})
    }
}


const mapStateToProps = state => ({
    posts: state.newsReducer.posts,
});

const mapDispatchToProps = ()=> ({
    addNews
});

export default connect(mapStateToProps, mapDispatchToProps)(News);