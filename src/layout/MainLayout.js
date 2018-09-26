import React, { Component } from 'react';
import HeaderContainer from '../containers/header/HeaderContainer';

class MainLayout extends Component {

    render() {
        const { children } = this.props;
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