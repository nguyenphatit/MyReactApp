import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TableRow, TableCell } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Tooltip, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
    },
    mailContent: {
        maxWidth: 700,
    }
});

class MailInboxItem extends Component {

    render() {
        const { classes } = this.props;
        return (
            <TableRow>
                <TableCell component="th" scope="row">
                    Frozen yoghurt
                </TableCell>
                <TableCell>
                    New App
                </TableCell>
                <TableCell>
                    <Link to="/mail/inbox" className={classes.link}>
                        <Typography gutterBottom noWrap className={classes.mailContent}>
                            Today's an exciting day for all Pexels fans as we announce the launch of our new app, now available for download on iOS and Android Today's an exciting day for all Pexels fans as we announce the launch of our new app, now available for download on iOS and Android
                        </Typography>
                    </Link>
                </TableCell>
                <TableCell numeric>18/09/2018</TableCell>
                <TableCell numeric>
                    <Tooltip title="Delete">
                        <IconButton aria-label="Delete">
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </TableCell>
            </TableRow>
        );
    }
}

MailInboxItem.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(MailInboxItem);