import React from 'react';


const NewsItem = ({ data: { title, text, date } }) => {
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
      </div>
    </li>
  );
};


export default NewsItem;