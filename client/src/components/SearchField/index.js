import React, {Component} from 'react'

class SeachInput extends Component {
  render() {
    return (
      <div className="col-lg-6">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search for..."/>
          <span className="input-group-btn">
        <button className="btn btn-default" type="button">Go!</button>
      </span>
        </div>
        <div>
          <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
            <option selected>Choose...</option>
            <option value="1">all</option>
            <option value="2">tags</option>
            <option value="3">authors</option>
          </select>
        </div>
      </div>
    )
  }
}


export default SeachInput;