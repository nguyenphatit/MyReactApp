import React, { Component } from 'react';
import Home from '../../components/home/Home';
import { connect } from 'react-redux';

class HomeContainer extends Component {

    render() {
        return (
            <Home />
        );
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);