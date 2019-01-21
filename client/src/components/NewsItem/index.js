import React from 'react';

const newsItem = ({news: {title, text, author, date}}) => (
    <li>
      <div className="card">
        <div className="card-header">
          {title}
        </div>
        <div className="card-body">
          <section className="card-text">{text}</section>
          <div>
            {author}
          </div>
          <h6 className="card-subtitle text-muted">
            creation date: {date}
          </h6>
        </div>
      </div>
    </li>
);


export default newsItem;