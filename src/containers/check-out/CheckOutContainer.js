import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckOutItem from '../../components/shopping-cart/check-out-item/CheckOutItem';
import { Grid, Divider } from '@material-ui/core';
import CheckOutResult from '../../components/shopping-cart/check-out-result/CheckOutResult';
import { actionCheckOutCart } from '../../actions/index';
import { Redirect } from 'react-router-dom';

class CheckOutContainer extends Component {

    showCart = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CheckOutItem
                        key={index}
                        index={index}
                        item={item}
                    />
                )
            });
        }
        return result;
    }

    showTotal = cart => {
        let { checkOutCart } = this.props;
        let result = null;
        if (cart.length > 0) {
            result = <CheckOutResult
                cart={cart}
                checkOutCart={checkOutCart}
            />
        }
        return result;
    }

    render() {
        var { cart } = this.props;
        let bool = cart.length === 0 ? true : false;
        if (bool) {
            return (
                <Redirect to='/' />
            )
        }
        return (
            <React.Fragment>
                <Grid container spacing={16}>
                    {this.showCart(cart)}
                </Grid>
                <Divider style={my1} />
                {this.showTotal(cart)}
            </React.Fragment>
        );
    }
};

const my1 = {
    marginTop: 10,
    marginBottom: 10,
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        checkOutCart: () => {
            dispatch(actionCheckOutCart())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutContainer);