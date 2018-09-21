import React, { Component } from 'react';
import { Typography, Button, Snackbar, Slide } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
}

class CheckOutResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            Transition: null,
        };
    }

    handleClick = Transition => () => {
        this.setState({ open: true, Transition });
        setTimeout(() => {
            this.onCheckOut();
        }, 2000);
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        let { cart } = this.props;
        return (
            <React.Fragment>
                <div align="right">
                    <Typography variant="headline" gutterBottom>
                        Amount: ${this.showTotal(cart).toFixed(2)}
                    </Typography>
                    <Button variant="contained" color="primary" onClick={this.handleClick(TransitionUp)}>
                        Buy now!
                    </Button>
                </div>
                <Snackbar
                    open={this.state.open}
                    onClose={this.handleClose}
                    TransitionComponent={this.state.Transition}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Thank you for buying!</span>}
                />
            </React.Fragment>
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

    onCheckOut = () => {
        let { checkOutCart } = this.props;
        checkOutCart();
        window.location.reload();
    }
}

const styles = {
    navlink: {
        textDecoration: 'none',
    },
};

CheckOutResult.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CheckOutResult);
