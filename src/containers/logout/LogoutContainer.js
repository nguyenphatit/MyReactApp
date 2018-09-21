import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionLogout } from '../../actions';

class LogoutContainer extends Component {

    componentWillMount() {
        this.props.logout();
    }

    render() {
        return (
            <Redirect to="/login" />
        );
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        logout: () => {
            dispatch(actionLogout());
        }
    }
}

export default connect(null, mapDispatchToProps)(LogoutContainer);