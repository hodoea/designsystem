import React from 'react';
import { shallow } from 'enzyme';

import BaseRadioButton from './BaseRadioButton';

describe('<BaseRadioButton />', () => {
    it('renders without exploding');
    it('is checked if checked prop is true');
    it('is checked if selectedValue equals value');
    it('is not checked if neither checked nor selectedValue equals value');

    describe('id', () => {
        it('is unique across instances');
        it('is stable per instance');
    });
    describe('tooltip', () => {
        it('does not render if not present');
        it('renders if present');
        it('does not add the correct class if not present');
        it('adds the correct class if present');
    });
    describe('aria-invalid', () => {
        it('adds the correct class if true');
        it('does not add the class if false');
    });
});
