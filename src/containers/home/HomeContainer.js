import React, { Component } from 'react';
import Home from '../../components/home/Home';
import { connect } from 'react-redux';

class HomeContainer extends Component {

    render() {
        const { user } = this.props;
        return (
            <Home user={user} />
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.login
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);