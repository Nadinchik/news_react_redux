import React, {Component} from 'react'

class ProfileData extends Component{
  render() {
    return (
      <form>
        <div className="form-group flex-row">
          <picture>
            <source srcSet="..." type="image/svg+xml"/>
              <img src="..." className="img-fluid img-thumbnail" alt="..."/>
          </picture>
          <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
          <div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Fullname</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputEmail3"/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputEmail3"/>
            </div>
          </div>
          </div>
        </div>
      </form>
  )
  }
  }

  export default ProfileData;