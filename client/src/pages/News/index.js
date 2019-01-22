import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux"
// import SearchField from "react-search-field";
import SearchInput from 'react-search-input';

import ModalWindow from "../../components/Modal";
import FormAddNews from "../../components/FormAddNews"
import * as newsActions from "../../redux/actions/news";
import NewsList from "../../components/NewsList";

// const KEYS_TO_FILTERS = ['posts.title', 'posts.text', 'posts.author'];

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isError: true,
            searchTerm: '',
            value: '',
            posts: [],
            post: {}
        };
        this.searchUpdated = this.searchUpdated.bind(this)
    }

    AddPost = (e) => {
        e.preventDefault();
        const {post} = this.state;
        const {add} = this.props;
        add(post);
        this.setState({post})
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
        const {isOpen, post, posts, isError} = this.state;
        console.log('post', post);
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
                        onSubmit={this.props.AddPost}
                        onClose={this.toggleModal}
                        iserror={isError}
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
    post: state.newsReducer.post,
    error: state.newsReducer.error
});

const mapDispatchToProps = (dispatch) => ({
    add: (post) => dispatch(newsActions.newsRequest(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(News);