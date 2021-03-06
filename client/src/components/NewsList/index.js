import React from 'react';
import NewsItem from '../../components/NewsItem';
import PropTypes from 'prop-types';


const NewsList = ({ posts, handleDeletePost }) => {
  return (
    <ul className="NewsList">
      {posts.length > 0 && posts.map((item) => (
        <NewsItem data={item} key={item._id} handleDeletePost={handleDeletePost} />
      ))
      }
    </ul>
  );
};

NewsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

NewsList.defaultTypes = {
  posts: [],
};

export default NewsList;
