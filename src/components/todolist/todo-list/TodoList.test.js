import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './TodoList';
import renderer from 'react-test-renderer';

describe('Calculator Component', () => {
    it('matches the snapshot', () => {
        const wrapper = renderer.create(<TodoList />).toJSON();
        expect(wrapper).toMatchSnapshot();
    })

    it('checkShowForm', () => {
        const wrapper = shallow(<TodoList />);
        const resultState = wrapper.state().checkShowForm;
        expect(resultState).toEqual(false)
    })

    it('checkShowForm after click Add task button', () => {
        const wrapper = shallow(<TodoList />);

        wrapper.instance().changeStatusCollapse();

        const resultState = wrapper.state().checkShowForm;
        expect(resultState).toEqual(true)
    })
})