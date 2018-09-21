import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const Products = ({ classes, children }) => (
    <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
            <Grid container justify="center">
                <Typography variant="display2" gutterBottom>
                    Musics
                </Typography>
            </Grid>
        </Grid>
        {children}
    </Grid>
)

const styles = {
    root: {
        flexGrow: 1,
        marginTop: 20,
    },
    paper: {
        height: 140,
        width: 100,
    },
};

Products.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Products);
