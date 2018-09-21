import React, { Component } from 'react';
import './Search.scss';
import { TextField } from '@material-ui/core';

class Search extends Component {
    render() {
        return (
            <React.Fragment>
                <TextField
                    id="outlined-search"
                    label="Search field"
                    type="search"
                    margin="normal"
                    variant="outlined"
                    className="search"
                />
            </React.Fragment>
        );
    }
}

export default Search;