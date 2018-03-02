import React from 'react';
import { shallow } from 'enzyme';

import RadioBlock from './RadioBlock';

describe('<RadioBlock />', () => {
    it('renders without exploding');
    describe('id', () => {
        it('is unique across instances');
        it('is stable per instance');
    });
    describe('children', () => {
        it('does not add a class if present');
        it('adds a class if not present');
        it('is hidden if not selected');
    });
});
