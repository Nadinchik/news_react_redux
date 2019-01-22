import React from 'react'
import newsItem from "../../components/NewsItem";
import PropTypes from 'prop-types';


const NewsList = ({posts}) => {
    console.log('posts--->', posts);
    return (
        <ul className="NewsList">
            {posts.length > 0 && posts.map((item) => (
                <newsItem data={item}/>
            ))
            }
        </ul>
    );
};

NewsList.propTypes={
    posts: PropTypes.arrayOf([PropTypes.object]),
};

NewsList.defaultTypes={
    posts: []
};

export default NewsList;