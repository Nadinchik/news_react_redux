import React from 'react'
import newsItem from "../../components/NewsItem";

const NewsList = (news) => (
  <ul className="NewsList">
    {news.map((item) => (
      <newsItem
        key={item.id}
        title={item.title}
        text={item.text}
        date={item.date}
        author={item.author}
      />
    ))
    }
  </ul>
);

export default NewsList;