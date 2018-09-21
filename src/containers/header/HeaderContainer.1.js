import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import DialpadIcon from '@material-ui/icons/Dialpad';
import MailIcon from '@material-ui/icons/Mail';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Badge, Divider, Hidden, Menu, Avatar, Tooltip } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import ShopIcon from '@material-ui/icons/Shop';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import ReportIcon from '@material-ui/icons/Report';
import './HeaderContainer.scss';

const ITEM_HEIGHT = 48;

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false,
            anchorEl: null,
        }
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    showQuantity = (cart) => {
        var sum = 0;
        for (let i = 0; i < cart.length; i++) {
            sum += cart[i].quantity;
        }
        return sum;
    }

    render() {
        const { classes, cart } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <React.Fragment>
                <AppBar color="primary" position="fixed" className={classes.root}>
                    <Toolbar>
                        <IconButton className={classes.menuButton} onClick={this.toggleDrawer('left', true)} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" noWrap className={classes.grow}>
                            React App
            			</Typography>
                        <div>
                            <Hidden mdUp>
                                <IconButton
                                    aria-label="More"
                                    aria-owns={open ? 'long-menu' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleClick}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    id="long-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={this.handleClose}
                                    PaperProps={{
                                        style: {
                                            maxHeight: ITEM_HEIGHT * 4.5,
                                            width: 200,
                                        },
                                    }}
                                >
                                    <NavLink to="/" className={classes.navlink} onClick={() => this.handleClose()}>
                                        <ListItem button>
                                            <ListItemIcon>
                                                <HomeIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Home" />
                                        </ListItem>
                                    </NavLink>
                                    <NavLink to="/login" className={classes.navlink} onClick={() => this.handleClose()}>
                                        <ListItem button>
                                            <ListItemIcon>
                                                <PersonIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Login" />
                                        </ListItem>
                                    </NavLink>
                                    <NavLink to="/shop" className={classes.navlink} onClick={() => this.handleClose()}>
                                        <ListItem button>
                                            <ListItemIcon>
                                                <ShopIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Shop" />
                                        </ListItem>
                                    </NavLink>
                                    <NavLink to="/cart" className={classes.navlink} onClick={() => this.handleClose()}>
                                        <ListItem button>
                                            <ListItemIcon>
                                                <Badge color="primary" badgeContent={this.showQuantity(cart)} className={classes.margin}>
                                                    <ShoppingCartIcon />
                                                </Badge>
                                            </ListItemIcon>
                                            <ListItemText primary="Cart" />
                                        </ListItem>
                                    </NavLink>
                                    <NavLink to="/calculator" className={classes.navlink} onClick={() => this.handleClose()}>
                                        <ListItem button>
                                            <ListItemIcon>
                                                <DialpadIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Calculator" />
                                        </ListItem>
                                    </NavLink>
                                    <NavLink to="/mail" className={classes.navlink} onClick={() => this.handleClose()}>
                                        <ListItem button>
                                            <ListItemIcon>
                                                <Badge color="primary" badgeContent="0" className={classes.margin}>
                                                    <MailIcon />
                                                </Badge>
                                            </ListItemIcon>
                                            <ListItemText primary="Mail" />
                                        </ListItem>
                                    </NavLink>
                                </Menu>
                                <IconButton className={classes.menuItem}>
                                    <ExitToAppIcon />
                                </IconButton>
                                <Tooltip title="Username" placement="bottom-start">
                                    <IconButton className={classes.menuItem}>
                                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/remy.jpg" className={classes.avatar} />
                                    </IconButton>
                                </Tooltip>
                            </Hidden>
                            <Hidden smDown>
                                <NavLink to="/">
                                    <IconButton className={classes.menuItem}>
                                        <HomeIcon />
                                    </IconButton>
                                </NavLink>
                                <NavLink to="/login">
                                    <IconButton className={classes.menuItem}>
                                        <PersonIcon />
                                    </IconButton>
                                </NavLink>
                                <NavLink to="/shop">
                                    <IconButton className={classes.menuItem}>
                                        <ShopIcon />
                                    </IconButton>
                                </NavLink>
                                <NavLink to="/cart">
                                    <IconButton className={classes.menuItem}>
                                        <Badge color="secondary" badgeContent={this.showQuantity(cart)} className={classes.margin}>
                                            <ShoppingCartIcon />
                                        </Badge>
                                    </IconButton>
                                </NavLink>
                                <NavLink to="/calculator">
                                    <IconButton className={classes.menuItem}>
                                        <DialpadIcon />
                                    </IconButton>
                                </NavLink>
                                <NavLink to="/mail">
                                    <IconButton className={classes.menuItem}>
                                        <Badge color="secondary" badgeContent="0" className={classes.margin}>
                                            <MailIcon />
                                        </Badge>
                                    </IconButton>
                                </NavLink>
                                <IconButton className={classes.menuItem}>
                                    <ExitToAppIcon />
                                </IconButton>
                                <Tooltip title="Username" placement="bottom-start">
                                    <IconButton className={classes.menuItem}>
                                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/remy.jpg" className={classes.avatar} />
                                    </IconButton>
                                </Tooltip>
                            </Hidden>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="temporary"
                    anchor="left"
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <List>
                        <NavLink to="/mail/compose" className={classes.navlink} onClick={() => this.handleClose()}>
                            <button className="newMail">
                                <AddIcon className="iconNewMail" />
                                Compose
                            </button>
                        </NavLink>
                    </List>
                    <List>
                        <NavLink to="/mail" className={classes.navlink} onClick={() => this.handleClose()}>
                            <ListItem button>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItem>
                        </NavLink>
                        <ListItem button>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="Send" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <DeleteIcon />
                            </ListItemIcon>
                            <ListItemText primary="Delete" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <ReportIcon />
                            </ListItemIcon>
                            <ListItemText primary="Spam" />
                        </ListItem>
                    </List>
                </Drawer>
            </React.Fragment>
        );
    }
}

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    listNav: {
        width: 250,
    },
    menuItem: {
        color: '#fff',
    },
    navlink: {
        textDecoration: 'none',
        outline: 0
    },
    drawerPaper: {
        position: 'relative',
        width: 240,
    },
    avatar: {
    }
};

HeaderContainer.propTypes = {
    classes: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

HeaderContainer = withStyles(styles, { name: 'Header' })(HeaderContainer);
export default connect(mapStateToProps, null)(HeaderContainer);
