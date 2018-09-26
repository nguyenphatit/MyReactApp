import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography, Grow } from '@material-ui/core';

class Home extends Component {

    render() {
        return (
            <Grid container spacing={16}>
                <Grow
                    in={true}
                    style={{ transformOrigin: '0 0 0' }}
                    enter={true}
                    exit={true}
                >
                    <Grid item xs={12}>
                        <Paper>
                            <Typography variant="display1" style={{ padding: '10px 10px' }} gutterBottom>
                                Hello
                            </Typography>
                        </Paper>
                    </Grid>
                </Grow>
                <Grid item xs={6} sm={3}>
                    <Paper>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper>xs=6 sm=3</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper>xs=6 sm=3</Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Home;