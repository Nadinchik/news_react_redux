import React, {Component} from 'react'
import newsItem from "../../components/NewsItem";

class NewsList extends Component {
  render() {
    const {news} = this.props;
    console.log('this.props -->', this.props);
    return (
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
    )
  }
}

export default NewsList;