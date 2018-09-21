import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MailInboxItem from '../mail-inbox-item/MailInboxItem';
import Search from '../search/Search';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    link: {
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.87)',
    }
});

class MailInbox extends Component {

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <Search />
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Content</TableCell>
                                <TableCell numeric>Time</TableCell>
                                <TableCell numeric>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <MailInboxItem />
                            <MailInboxItem />
                            <MailInboxItem />
                            <MailInboxItem />
                            <MailInboxItem />
                        </TableBody>
                    </Table>
                </Paper>
            </React.Fragment>
        );
    }
}

MailInbox.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MailInbox);