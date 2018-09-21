import React, { Component } from 'react';
import Cart from '../../components/shopping-cart/cart/Cart';
import CartItem from '../../components/shopping-cart/cart-item/CartItem';
import CartResult from '../../components/shopping-cart/cart-result/CartResult';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionDeleteProductInCart, actionUpdateProductInCart } from '../../actions/index';

class CartContainer extends Component {

    showCart = (cart) => {
        let { onDeleteProductInCart, onUpdateProductInCart } = this.props;
        let result = null;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        index={index}
                        item={item}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onUpdateProductInCart={onUpdateProductInCart}
                    />
                )
            });
        }
        return result;
    }

    showTotal = cart => {
        let result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result;
    }

    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCart(cart)}
                {this.showTotal(cart)}
            </Cart>
        );
    }
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actionDeleteProductInCart(product));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actionUpdateProductInCart(product, quantity));
        }
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                singer: PropTypes.string.isRequired,
                year: PropTypes.number.isRequired,
                description: PropTypes.string.isRequired,
                genres: PropTypes.string.isRequired,
                album: PropTypes.string.isRequired,
                price: PropTypes.string.isRequired,
                inventory: PropTypes.number.isRequired,
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);