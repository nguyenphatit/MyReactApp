import React, { Component } from 'react';
import Products from '../../components/shopping-cart/products/Products';
import Product from '../../components/shopping-cart/product/Product';
import { connect } from 'react-redux';
import { actionFetchProductsReq, actionAddToCart } from '../../actions';
import PropTypes from 'prop-types';

class ProductsContainer extends Component {

    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }

    showProducts = (products) => {
        let result = null;
        let { onAddToCart } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <Product
                        key={index}
                        product={product}
                        onAddToCart={onAddToCart}
                    />
                );
            })
        }
        return result;
    }

    componentDidMount() {
        this.props.fetchProducts();
    }
};

const mapStateToProp = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProp = (dispatch, props) => {
    return {
        fetchProducts: () => {
            dispatch(actionFetchProductsReq())
        },
        onAddToCart: product => {
            dispatch(actionAddToCart(product, 1))
        }
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
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
        })
    ).isRequired,
    onAddToCart: PropTypes.func.isRequired
}

export default connect(mapStateToProp, mapDispatchToProp)(ProductsContainer);