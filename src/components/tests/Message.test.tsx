import React from 'react'
import { shallow } from 'enzyme'

import Message from './../Message';

describe('Message', () => {

    it('Should match the snapshot', () => {

        let mockMessage = {
            author: "Tom",
            message: "Hello world",
            timestamp: 1629403445280,
            token: "dummyToken123",
            _id: "611eb935c1f69f001a33088f"
        }

        const component = shallow(<Message message={mockMessage} />);
        expect(component).toMatchSnapshot();
    })

    it('Should always render message and timestamp', () => {

        let mockMessage = {
            author: "Tom",
            message: "Hello world",
            timestamp: 1629403445280,
            token: "dummyToken123",
            _id: "611eb935c1f69f001a33088f"
        }

        const component = shallow(<Message message={mockMessage} />);  
        expect(component.find({ 'test-id': 'message' })).toHaveLength(1);
        expect(component.find({ 'test-id': 'timeStamp' })).toHaveLength(1);
    })
    
    it('Should render the author name in case its sent by other person', () => {

        let mockMessage = {
            author: "Tom",
            message: "Hello world",
            timestamp: 1629403445280,
            token: "dummyToken123",
            _id: "611eb935c1f69f001a33088f"
        }

        const component = shallow(<Message message={mockMessage} />);  
        expect(component.find({ 'test-id': 'author' })).toHaveLength(1);
    })
    
    it('Should not render the author name in case its sent by me', () => {

        let mockMessage = {
            author: "Ayush",
            message: "Hello world",
            timestamp: 1629403445280,
            token: "dummyToken123",
            _id: "611eb935c1f69f001a33088f"
        }

        const component = shallow(<Message message={mockMessage} />);  
        expect(component.find({ 'test-id': 'author' })).toHaveLength(0);
    })

})
