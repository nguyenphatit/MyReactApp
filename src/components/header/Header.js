import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import DialpadIcon from '@material-ui/icons/Dialpad';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import { Badge, Divider, Hidden, Menu } from '@material-ui/core';
import BookIcon from '@material-ui/icons/Book';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShopIcon from '@material-ui/icons/Shop';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import ReportIcon from '@material-ui/icons/Report';
import './Header.scss';

const ITEM_HEIGHT = 48;

const NAV_LINK = [
    {
        path: '/',
        name: 'Home',
        exact: true,
        icon: <HomeIcon />
    }, {
        path: '/todo-list',
        name: 'Todo List',
        exact: true,
        icon: <BookIcon />
    }, {
        path: '/shop',
        name: 'Shop',
        exact: false,
        icon: <ShopIcon />
    }, {
        path: '/calculator',
        name: 'Calculator',
        exact: true,
        icon: <DialpadIcon />
    }
];

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false,
            anchorEl: null,
            user: []
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

    componentDidMount() {
        this.setState({
            user: JSON.parse(localStorage.getItem('__user'))
        })
    }

    render() {
        const { classes, cart } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
            <React.Fragment>
                <AppBar color="primary" position="fixed" className={classes.root}>
                    <Toolbar>
                        <Typography variant="title" color="inherit" noWrap className={classes.grow}>
                            React App
            			</Typography>
                        <div>
                            <Hidden smDown>
                                {
                                    NAV_LINK.map((link, index) => {
                                        return (
                                            <NavLink key={index} to={link.path}>
                                                <IconButton className={classes.menuItem}>
                                                    {link.icon}
                                                </IconButton>
                                            </NavLink>
                                        )
                                    })
                                }
                                <NavLink to="/cart">
                                    <IconButton className={classes.menuItem}>
                                        <Badge color="secondary" badgeContent={this.showQuantity(cart)} className={classes.margin}>
                                            <ShoppingCartIcon />
                                        </Badge>
                                    </IconButton>
                                </NavLink>
                            </Hidden>
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
                                    {
                                        NAV_LINK.map((link, index) => {
                                            return (
                                                <NavLink to={link.path} key={index} exact={link.exact} className={classes.navlink} onClick={() => this.handleClose()}>
                                                    <ListItem button>
                                                        <ListItemIcon>
                                                            {link.icon}
                                                        </ListItemIcon>
                                                        <ListItemText primary={link.name} />
                                                    </ListItem>
                                                </NavLink>
                                            )
                                        })
                                    }

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
                                </Menu>
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

export default withStyles(styles, { name: 'Header' })(Header);
