import React from 'react';
import ProductsContainer from './containers/products/ProductsContainer';
import NotFoundContainer from './containers/not-found/NotFoundContainer';
import CartContainer from './containers/cart/CartContainer';
import CheckOutContainer from './containers/check-out/CheckOutContainer';
import Calculator from './components/calculator/Calculator';
import MainLayout from './layout/MainLayout';
import EmptyLayout from './layout/EmptyLayout';
import HomeContainer from './containers/home/HomeContainer';
import TaskContainer from './containers/tasks/TaskContainer';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <MainLayout><HomeContainer /></MainLayout>
    }, {
        path: '/todo-list',
        exact: false,
        main: () => <MainLayout><TaskContainer /></MainLayout>
    }, {
        path: '/shop',
        exact: false,
        main: () => <MainLayout><ProductsContainer /></MainLayout>
    }, {
        path: '/cart',
        exact: false,
        main: () => <MainLayout><CartContainer /></MainLayout>
    }, {
        path: '/check-out',
        exact: false,
        main: () => <MainLayout><CheckOutContainer /></MainLayout>
    }, {
        path: '/calculator',
        exact: false,
        main: () => <MainLayout><Calculator /></MainLayout>
    }, {
        path: '',
        exact: false,
        main: () => <EmptyLayout><NotFoundContainer /></EmptyLayout>
    }
];

export default routes;