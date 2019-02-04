import React from 'react';

const NewsItem = ({data: {id, title, text, date, author, tags}, data, handleDeletePost}) => {

  if (!title && !text && !tags) return null;

  return (
    <li>
      <div className="post-item flex-row">
        <div className="h2">
          {title && title}
        </div>
        <div className="post-body">
          <section className="h4 font-weight-normal">{text && text}</section>
          <section className="h6 font-weight-bold">#{tags && tags}</section>
          <span className="">
            creation date: {date}
          </span>
        </div>
        <h4>@{author}</h4>
        <div className='btn-group'>
          <button
            type="submit"
            className="editPost btn-light"
          >
            Edit
          </button>
          <button
            type="submit"
            className="delPost btn-secondary"
            onClick={() => handleDeletePost(id)}
          >
            Del
          </button>

        </div>
      </div>
    </li>
  );
};


export default NewsItem;
