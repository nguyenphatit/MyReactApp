import React, { Component } from 'react';
import Login from '../../components/login/Login';
import { connect } from 'react-redux';
import { actionFetchUserReq, actionLogin } from '../../actions';
import { Redirect } from 'react-router-dom';

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLogin: false,
            error: null,
        }
    }

    onSubmit = (data) => {
        let result = null;
        const { users } = this.props;
        if (users.length > 0) {
            users.map((user, index) => {
                if (data.email === user.email && data.password === user.password) {
                    result = user;
                    this.setState({
                        error: false
                    })
                    return result;
                } else {
                    this.setState({
                        error: true
                    })
                    return null;
                }
            });
        }
        if (result !== null) {
            this.props.login(result);
            return true;
        }
        return false;
    }

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        let isLogged = sessionStorage.getItem('__user');
        if (isLogged !== null) {
            return <Redirect to="/" />
        }
        // console.log(this.state.error);
        return (
            <Login onChange={this.onChange} onSubmit={this.onSubmit} error={this.state.error}>

            </Login>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.login
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchUsers: () => {
            dispatch(actionFetchUserReq())
        },
        login: user => {
            dispatch(actionLogin(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);