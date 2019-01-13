export function auth(data) {
    return dispatch => {
        return fetch('/api/auth',{
            method: 'POST'
        })
            .then(response => response.json())
            .then(data => this.setState({data}))
    }
}