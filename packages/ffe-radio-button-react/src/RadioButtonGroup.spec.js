import React from 'react';
import { mount } from 'enzyme';

import RadioButtonGroup from './RadioButtonGroup';

describe('<RadioButtonGroup />', () => {
    it('renders without exploding');
    describe('description', () => {
        it('renders a legend if set');
        it('does not render a legend if not set');
    });
    describe('tooltip', () => {
        it('renders if set and description is set');
        it('does not render if set and description is not set');
        it('does not render if not set');
    });
});
