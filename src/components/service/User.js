import React from 'react';

export default class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            users: [],
            error: null
        };
    }

    fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(responseJson => {
                this.setState({
                    users: responseJson,
                    isLoading: false    // เพื่อเช็คสถานะการ fetch
                })
                console.warn('check', this.state.users);
            }).catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchUsers();
    }

    render() {
        const { isLoading, users, error } = this.state;
        return (
          <React.Fragment>
            {(
              users.map(user => {
                const { username, name, email, phone } = user;
                return (
                  <div key={username}>
                    <p>Name: {name}</p>
                    <p>Email Address: {email}</p>
                    <p>Phone: {phone}</p>
                    <hr />
                  </div>
                );
              })
            // If there is a delay in data, let's let the user know it's loading
            ) }
          </React.Fragment>
        );
      }
}