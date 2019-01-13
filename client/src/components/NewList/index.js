// import React, {Component} from 'react'
//
//
// class NewsList extends Component {
//
//   render() {
//     const {news} = this.props;
//     const ListNews = news.map((item) => (
//       <div className="card">
//         <div className="card-header">
//           {item.title}
//         </div>
//         <div className="card-body">
//           <h6 className="card-subtitle text-muted">
//             creation date: {(new Date(item.date)).toDateString()}
//           </h6>
//           <section className="card-text">{item.text}</section>
//           <div>
//             {item.author}
//           </div>
//         </div>
//       </div>
//     ));
//     return (
//       <ul className="NewsList">
//         {ListNews}
//       </ul>
//     )
//   };
// }
//
// export default NewsList;