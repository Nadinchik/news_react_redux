import React, { Component } from 'react';

class SearchInput extends Component {
    constructor(props) {
        super(props);
    }

    onInputChange(term) {
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="searchbar form-group">
                <input className="form-control"
                       type="text"
                       placeholder="Search..."
                       onChange={ event => this.onInputChange(event.target.value)} />
            </div>
        )
    }
}

export default SearchInput;