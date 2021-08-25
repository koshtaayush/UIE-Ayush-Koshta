import React from 'react'
import { shallow } from 'enzyme'

import ChatScreen from './../ChatScreen';

describe('ChatScreen', () => {

    it('Should match the snapshot', () => {

        const component = shallow(<ChatScreen />);  
        expect(component).toMatchSnapshot();
    })

    it('Should always render Send Message Bar', () => {

        const component = shallow(<ChatScreen />);  
        expect(component.find({ 'test-id': 'sendMessageBar' })).toHaveLength(1);
    })

})
