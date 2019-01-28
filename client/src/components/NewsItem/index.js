import React from 'react';

const NewsItem = ({ data: { id, title, text, date, author }, data, handleDeletePost }) => {

  if (!title && !text) return null;

  return (
    <li>
      <div className="card">
        <div className="card-header">
          {title && title}
        </div>
        <div className="card-body">
          <section className="card-text">{text && text}</section>
          <h6 className="card-subtitle text-muted">
            creation date: {date}
          </h6>
        </div>
        <h4>@{author}</h4>
      </div>
      <button
        type="submit"
        className="delPost"
        onClick={() => handleDeletePost(id)}
      >
        Del
      </button>
      <button
        type="submit"
        className="editPost"
      >
        Edit
      </button>
    </li>
  );
};


export default NewsItem;
