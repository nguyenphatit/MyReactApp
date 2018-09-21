import React, { Component } from 'react';
import { TableRow, TableCell, Button, Chip, Avatar } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

class CartItem extends Component {

    showAmountItem = (price, quantity) => {
        return price * quantity;
    }

    onDelete(product) {
        var { onDeleteProductInCart } = this.props;
        onDeleteProductInCart(product);
    }

    changeQuantity = (product, quantity) => {
        if (quantity > 0) {
            this.props.onUpdateProductInCart(product, quantity);
        }
    }

    render() {
        const { item, index } = this.props;
        let { quantity } = item;
        return (
            <TableRow>
                <TableCell component="th" scope="row">
                    {index + 1}
                </TableCell>
                <TableCell>{item.product.name}</TableCell>
                <TableCell>{item.product.singer}</TableCell>
                <TableCell>{item.product.album}</TableCell>
                <TableCell numeric>{item.product.price}$</TableCell>
                <TableCell numeric>
                    <Chip
                        avatar={<Avatar><ArrowDropDownIcon /></Avatar>}
                        label="Decrease"
                        variant="outlined"
                        color="primary"
                        onClick={() => this.changeQuantity(item.product, item.quantity - 1)}
                    />
                    <Chip
                        label={quantity}
                        color="primary"
                        variant="outlined"
                    />
                    <Chip
                        avatar={<Avatar><ArrowDropUpIcon /></Avatar>}
                        label="Increase"
                        variant="outlined"
                        color="primary"
                        onClick={() => this.changeQuantity(item.product, item.quantity + 1)}
                    />
                </TableCell>
                <TableCell numeric>{this.showAmountItem(item.product.price, item.quantity).toFixed(2)}$</TableCell>
                <TableCell>
                    <Button color="secondary" onClick={() => this.onDelete(item.product)}>
                        <DeleteIcon />
                    </Button>
                </TableCell>
            </TableRow>
        );
    }
}


export default CartItem;
