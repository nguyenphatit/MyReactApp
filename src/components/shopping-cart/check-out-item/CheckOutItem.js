import React, { Component } from 'react';
import { Paper, Grid, Typography, Card, CardContent, CardActions, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

class CheckOutItem extends Component {

    showAmountItem = (price, quantity) => {
        return price * quantity;
    }

    render() {
        const { item, classes } = this.props;
        return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Paper className={classes.paper}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary">
                                {item.product.singer}
                            </Typography>
                            <Typography variant="headline" component="h2">
                                {item.product.name}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                Genres: {item.product.genres} - Year: {item.product.year}
                            </Typography>
                            <Typography component="p">
                                {`$${item.product.price} x ${item.quantity}`}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="outlined" color="primary">${this.showAmountItem(item.product.price, item.quantity).toFixed(2)}</Button>
                        </CardActions>
                    </Card>
                </Paper>
            </Grid>
        );
    }
}

const styles = {
    root: {
        flexGrow: 1,
    },
};

CheckOutItem.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CheckOutItem);
