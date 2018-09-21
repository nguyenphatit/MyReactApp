import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './Product.scss';
import { Grow } from '@material-ui/core';

class Product extends Component {
    render() {
        let { classes, product } = this.props;
        return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Paper>
                    <Grow
                        in={true}
                        style={{ transformOrigin: '0 0 0' }}
                        enter={true}
                        exit={true}
                    >
                        <Card className={classes.card + ` card`}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={product.image}
                                    title={product.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="headline" color="secondary" component="h2">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="title" gutterBottom>
                                        {product.singer}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Year: {product.year}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Genres: {product.genres}
                                    </Typography>
                                    <Typography variant="body1" gutterBottom>
                                        Album: {product.album}
                                    </Typography>
                                    <Typography gutterBottom>
                                        {product.description}
                                    </Typography>
                                    <Typography variant="title" color="error" gutterBottom>
                                        ${product.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="secondary" variant="outlined" onClick={() => this.onAddToCart(product)}>
                                    Buy
                            </Button>
                            </CardActions>
                        </Card>
                    </Grow>
                </Paper>
            </Grid>
        );
    }

    onAddToCart = product => {
        this.props.onAddToCart(product)
    }
}

const styles = {
    root: {
        width: '100%',
        maxHeight: 600,
    },
    media: {
        height: 200,
    },
};

Product.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Product);
