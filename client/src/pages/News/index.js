import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux"

import SearchInput from '../../components/SearchInput'
import { addNews } from "../../store/actions/news";

class News extends Component {
    state = { title: ''};

    handleAddNews = () => {
        this.props.addNews({title: this.state.title})
    };

    handleInput = (event) => {
        this.setState({
            title: event.target.value
        })
    };

    render() {
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
                        <Link to="/User">User</Link>
                    </div>
                </div>
                <div>
                    <input type="text" onChange={this.handleInput} value={this.state.title}/>
                    <button className="addNews" onClick={this.handleAddNews}>
                        Add news
                    </button>
                    <ul>
                        {this.props.news.map((news, index) =>
                            <li key={index}>{news.title}</li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    news: state.newsReducer.news,
});

const mapDispatchToProps = {
    addNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(News);