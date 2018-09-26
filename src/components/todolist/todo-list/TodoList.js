import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper, Button, Divider, List, Collapse } from '@material-ui/core';
import './TodoList.scss';
import FormItem from '../form-item/FormItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkShowForm: false,
        }
    }

    handleChange = () => {
        this.setState(state => ({ checkShowForm: !state.checkShowForm }));
    };

    changeStatusCollapse = () => {
        let { checkShowForm } = this.state;
        this.setState({
            checkShowForm: !checkShowForm,
        })
    }

    onSubmit = (task) => {
        this.props.onSubmit(task);
        this.setState({
            checkShowForm: false,
        })
    }


    render() {
        let { checkShowForm } = this.state;
        return (
            <React.Fragment>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                    spacing={0}
                    style={{ "marginTop": "100px" }}
                >
                    <Grid item sm={12} className="TodoList">
                        <Paper>
                            <Grid
                                container
                                spacing={0}
                                className="TodoList__header"
                            >
                                <Grid item xs={6} align="left">
                                    <span className="button-control control-1"></span>
                                    <span className="button-control control-2"></span>
                                    <span className="button-control control-3"></span>
                                </Grid>
                                <Grid item xs={6} align="right">
                                    <Button variant="contained" color="primary" onClick={this.changeStatusCollapse} onChange={this.handleChange} aria-label="Collapse">
                                        Add task
                                    </Button>
                                </Grid>
                            </Grid>
                            <Collapse in={checkShowForm} style={(!checkShowForm) ? { "display": "none", "transition": "1s all" } : { "display": "block", "transition": "1s all" }}>
                                <div className="add-task">
                                    <Divider />
                                    <FormItem onSubmit={this.onSubmit} />
                                </div>
                            </Collapse >
                            <Divider />
                            <List>
                                {this.props.children}
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default TodoList;