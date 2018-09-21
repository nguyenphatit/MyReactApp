import React, { Component } from 'react';
import HeaderContainer from '../containers/header/HeaderContainer';
import {Redirect} from 'react-router-dom';

class MainLayout extends Component {

    render() {
        const { children } = this.props;
        // let isLogged = localStorage.getItem('USER');
        let isLogged = sessionStorage.getItem('__user');
        if (isLogged === null) {
            return <Redirect to="/login" />
        }
        return (
            <React.Fragment>
                <HeaderContainer />
                <div style={{ marginTop: '70px' }}>
                    {children}
                </div>
            </React.Fragment>
        );
    }
}

export default MainLayout;