import React from 'react'
import { shallow } from 'enzyme'

import dateFormatter from './../dateFormatter';

describe('Date Fomatter', () => {

    it('Should work in case of unix timestamp', () => {
        const formattedDate = dateFormatter(1629403445280);
        expect(formattedDate).toBe('20 Aug 2021 1:34');
    })

    it('Should work in case of unix timestamp', () => {
        const formattedDate = dateFormatter(1629635489056);
        expect(formattedDate).toBe('22 Aug 2021 18:01');
    })

})
