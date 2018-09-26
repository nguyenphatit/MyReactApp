import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionFetchTasksReq, actionAddTaskReq, actionChangeStatusReq, actionDeleteTaskReq } from '../../actions';
import TodoItem from '../../components/todolist/todo-item/TodoItem';
import TodoList from '../../components/todolist/todo-list/TodoList';

class TasksContainer extends Component {

    render() {
        let { tasks } = this.props;
        return (
            <TodoList onSubmit={this.onSubmit}>
                {this.showItem(tasks)}
            </TodoList>
        );
    }

    onSubmit = (task) => {
        this.props.addOrEditTask(task);
    }

    changeStatus = (id, status) => {
        this.props.changeStatusTask(id, status);
    }

    deleteTask = (id) => {
        this.props.deleteTask(id);
    }

    showItem = (tasks) => {
        let result = null;
        if (tasks.length > 0) {
            result = tasks.map((task, index) => {
                return (
                    <TodoItem
                        key={index}
                        index={index}
                        task={task}
                        changeStatus={this.changeStatus}
                        deleteTask={this.deleteTask}
                    />
                )
            })
        }
        return result;
    }


    componentDidMount() {
        this.props.fetchTask();
    }
};

const mapStateToProp = state => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProp = (dispatch, props) => {
    return {
        fetchTask: () => {
            dispatch(actionFetchTasksReq())
        },
        addOrEditTask: (task) => {
            dispatch(actionAddTaskReq(task))
        },
        changeStatusTask: (id, status) => {
            dispatch(actionChangeStatusReq(id, status));
        },
        deleteTask: (id) => {
            dispatch(actionDeleteTaskReq(id));
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(TasksContainer);