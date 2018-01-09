import React from 'react';
import { mount } from 'enzyme';
import { assert } from 'chai';
import sinon from 'sinon';

import SuggestionItem from './SuggestionItem';

function item() {
    return { header: 'header' };
}

function renderSuggestionItem(
    isHighlighted = true,
    refHighlightedSuggestion = () => {},
    onSelect = () => {},
) {
    return mount(
        <SuggestionItem
            onSelect={onSelect}
            item={item()}
            id="suggestion-option-0"
            isHighlighted={isHighlighted}
            refHighlightedSuggestion={refHighlightedSuggestion}
            render={({ header }) => <h1>{header}</h1>}
        />,
    );
}

describe('<SuggestionItem />', () => {
    it('item is rendered', () => {
        const wrapper = renderSuggestionItem();
        const li = wrapper.find('li');

        assert.isTrue(li.prop('id') === 'suggestion-option-0');
        assert.equal(li.childAt(0).html(), '<h1>header</h1>');
    });

    it('isHighlighted', () => {
        const refHighlightedSuggestionSpy = sinon.spy();
        const wrapper = renderSuggestionItem(true, refHighlightedSuggestionSpy);

        assert.isTrue(
            wrapper.children().hasClass('ffe-account-suggestion--highlighted'),
        );
        assert.isTrue(wrapper.children().hasClass('ffe-account-suggestion'));
        assert.isTrue(refHighlightedSuggestionSpy.calledOnce);
    });

    it('not Highlighted', () => {
        const refHighlightedSuggestionSpy = sinon.spy();
        const wrapper = renderSuggestionItem(
            false,
            refHighlightedSuggestionSpy,
        );

        assert.isFalse(
            wrapper.children().hasClass('ffe-account-suggestion--highlighted'),
        );
        assert.isTrue(wrapper.children().hasClass('ffe-account-suggestion'));
        assert.isFalse(refHighlightedSuggestionSpy.called);
    });

    it('onSelect called', () => {
        const onSelectSpy = sinon.spy();
        const wrapper = renderSuggestionItem(true, () => {}, onSelectSpy);
        wrapper.simulate('mousedown');
        assert.isTrue(onSelectSpy.calledWith(item()));
    });
});