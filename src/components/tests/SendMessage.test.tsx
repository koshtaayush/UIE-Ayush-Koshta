import React from 'react'
import { shallow } from 'enzyme'

import SendMessage from './../SendMessage';

describe('SendMessage', () => {

    it('Should match the snapshot', () => {

        const mockFn = jest.fn()

        const component = shallow(<SendMessage addCurrentMessages={mockFn} />);
        expect(component).toMatchSnapshot();

    })

    it('Should always render input box and Send button', () => {

        const mockFn = jest.fn()
        
        const component = shallow(<SendMessage addCurrentMessages={mockFn} />);  
        expect(component.find({ 'test-id': 'inputSection' })).toHaveLength(1);
        expect(component.find({ 'test-id': 'buttonSection' })).toHaveLength(1);
    })
    
})
