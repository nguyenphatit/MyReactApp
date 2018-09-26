import React, { Component } from 'react';
import { ListItem, Avatar, ListItemText, IconButton, Chip, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './TodoItem.scss';

class TodoItem extends Component {

    changeStatus = () => {
        this.props.changeStatus(this.props.task.id, this.props.task.status)
    }

    deleteTask = () => {
        this.props.deleteTask(this.props.task.id);
    }

    render() {
        const { index, task } = this.props;
        return (
            <React.Fragment>
                <ListItem className="TodoItem">
                    <Avatar className="avatar">{index + 1}</Avatar>
                    <ListItemText
                        primary={task.name}
                        secondary={task.priority ? <Typography color="error">High</Typography> : <Typography color="primary">Low</Typography>}
                    />
                    <Chip label={task.status ? 'Done' : 'Unfinish'} variant="outlined" color={task.status ? 'primary' : 'secondary'} />
                    <div className="TodoItem__func">
                        <IconButton onClick={this.deleteTask}>
                            <DeleteIcon />
                        </IconButton>
                        <Chip 
                            label={task.status ? 'Done' : 'Unfinish'}
                            color={task.status ? 'primary' : 'secondary'}
                            onClick={this.changeStatus}    
                        />
                    </div>
                </ListItem>
            </React.Fragment>
        );
    }
}

export default TodoItem;