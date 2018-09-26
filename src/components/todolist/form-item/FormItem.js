import React, { Component } from 'react';
import { TextField, Button, FormControlLabel, Switch } from '@material-ui/core';

class FormItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: '',
            priority: false,
        }
    }

    handleChange = (event) => {
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
        this.onClear();
    }

    onClear = () => {
        this.setState({
            id: '',
            name: '',
            status: false,
            priority: false,
        })
    }

    render() {
        return (
            <React.Fragment>
                <form className="formAdd" onSubmit={this.onSubmit}>
                    <div>
                        <TextField
                            id="standard-name"
                            label="Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            margin="normal"
                            className="form-control"
                        />
                    </div>
                    <div>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.state.status}
                                    name="status"
                                    onChange={this.handleChange}
                                    color="primary"
                                />
                            }
                            label="Done"
                        />
                    </div>
                    <div>
                        <TextField
                            id="filled-select-priority-native"
                            select
                            label="Priority select"
                            name="priority"
                            className="form-control"
                            value={this.state.priority}
                            onChange={this.handleChange}
                            SelectProps={{
                                native: true,
                            }}
                            helperText="Please select your priority"
                            margin="normal"
                            variant="filled"
                        >
                            {currencies.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </div>
                    <div align="right" className="mt-2">
                        <Button variant="contained" type="submit" color="primary">
                            Save
                        </Button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

const currencies = [
    {
        value: false,
        label: 'Low',
    },
    {
        value: true,
        label: 'High',
    }
];

export default FormItem;