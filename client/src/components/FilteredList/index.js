
// import React, {Component} from 'react'
// import NewsList from "../NewsList";
//
// class FilteredList extends Component {
//
//   filterList = (event) => {
//     let updatedList = this.props.posts;
//     updatedList = updatedList.filter(function (item) {
//       return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
//     });
//     this.setState({posts: updatedList});
//   };
//
//   componentWillMount() {
//     this.setState({items: this.props.posts})
//   }
//
//   render() {
//     const {posts} = this.props;
//     return (
//       <div className="filter-list">
//         <form>
//           <fieldset className="form-group">
//             <input type="text" className="form-control form-control-lg" placeholder="Search"
//                    onChange={this.filterList}/>
//           </fieldset>
//         </form>
//         <NewsList posts={posts}/>
//       </div>
//     );
//   }
// }
//
// export default FilteredList;