import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/users';

class Users extends Component {
    componentDidMount() {
        this.props.getUsers('https://jsonplaceholder.typicode.com/users');
        console.log(this.props);
    }

    render() {
        console.log(this.props);
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <ul>
                {this.props.users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.users2,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (url) => dispatch(getUsers(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
