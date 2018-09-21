import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
// import CartResult from './../cart-result/CartResult';
class Cart extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Singer</TableCell>
                            <TableCell>Album</TableCell>
                            <TableCell numeric>Price ($)</TableCell>
                            <TableCell numeric>Quantity</TableCell>
                            <TableCell numeric>Amount ($)</TableCell>
                            <TableCell>Remove</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.children}
                        {/* <CartResult /> */}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

const styles = {
    root: {
        width: '100%',
        overflowX: 'auto',
        marginTop: 20,
    },
    table: {
        minWidth: 700,
    },
};

Cart.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cart);
