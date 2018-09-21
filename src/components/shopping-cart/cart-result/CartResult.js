import React, { Component } from 'react';
import { TableRow, TableCell, Button, Typography } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

class CartResult extends Component {

    render() {
        let { cart, classes } = this.props;
        return (
            <TableRow>
                <TableCell colSpan="6">
                    <Typography variant="display1" gutterBottom align="right">
                        Total: ${this.showTotal(cart).toFixed(2)}
                    </Typography>
                </TableCell>
                <TableCell numeric colSpan="2">
                    <NavLink to="/check-out" className={classes.navlink}>
                        <Button variant="contained" color="primary">
                            Check out
                            <KeyboardArrowRightIcon />
                        </Button>
                    </NavLink>
                </TableCell>
            </TableRow>
        );
    }

    showTotal = cart => {
        let total = 0;
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                total += (cart[i].product.price * cart[i].quantity);
            }
        }
        return total;
    }
}

const styles = {
    navlink: {
        textDecoration: 'none',
    },
};

CartResult.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CartResult);
