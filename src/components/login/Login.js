import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextField, Typography, Button } from '@material-ui/core';
import './Login.scss';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        let { error } = this.props;
        return (
            <React.Fragment>
                <div className="LoginBackground"></div>
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={16}>
                    <Grid item xs={12}>
                        <Paper>
                            <div className="Login">
                                <Typography variant="display1" align="center" className="login-title" gutterBottom>
                                    Login
                                </Typography>
                                {
                                    (error) ? <Typography color="error" variant="subheading" gutterBottom>Email or password incorrect!</Typography> : ``

                                }
                                <form className="form" onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <TextField
                                            id="filled-email-input"
                                            label="Email"
                                            type="email"
                                            name="email"
                                            required
                                            className="form-control"
                                            autoComplete="email"
                                            margin="normal"
                                            variant="filled"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <TextField
                                            id="filled-password-input"
                                            label="Password"
                                            type="password"
                                            name="password"
                                            required
                                            className="form-control"
                                            autoComplete="current-password"
                                            margin="normal"
                                            variant="filled"
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div align="right" className="form-button">
                                        <Button variant="contained" type="submit" color="primary">
                                            Login
                                    </Button>
                                    </div>
                                </form>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Login;