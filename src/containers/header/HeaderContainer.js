import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './../../components/header/Header';

class HeaderContainer extends Component {

    render() {
        const { cart } = this.props;
        return (
            <Header cart={cart} />
        );
    }

}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(HeaderContainer);
