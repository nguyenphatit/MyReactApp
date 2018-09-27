import React from 'react';
import { shallow } from 'enzyme';
import Calculator from './Calculator';
import renderer from 'react-test-renderer';

describe('Calculator Component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Calculator />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('state displayValue', () => {
        const wrapper = shallow(<Calculator />);
        const resultState = wrapper.state().displayValue;
        expect(resultState).toEqual('0')
    })

    it('state waitingOperand', () => {
        const wrapper = shallow(<Calculator />);
        const resultState = wrapper.state().waitingOperand;
        expect(resultState).toEqual(false)
    })

    it('state operator', () => {
        const wrapper = shallow(<Calculator />);
        const resultState = wrapper.state().displayValue;
        expect(resultState).toEqual('0')
    })

    it('state value', () => {
        const wrapper = shallow(<Calculator />);
        const resultState = wrapper.state().displayValue;
        expect(resultState).toEqual('0')
    })
})