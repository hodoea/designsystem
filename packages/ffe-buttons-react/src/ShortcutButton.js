import React from 'react';
import ChevronIkon from '@sb1/ffe-icons-react/lib/chevron-ikon';
import Button from './Button';

const ShortcutButton = props => (
    <Button
        buttonType="shortcut"
        rightIcon={
            <ChevronIkon className="ffe-shortcut-button__icon-chevron" />
        }
        {...props}
    />
);

export default ShortcutButton;
