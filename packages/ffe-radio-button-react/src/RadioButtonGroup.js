import React from 'react';
import { bool, func, oneOf, shape, string } from 'prop-types';
import classNames from 'classnames';
import { Tooltip } from '@sb1/ffe-form-react';

const RadioButtonGroup = props => {
    const {
        'aria-invalid': ariaInvalid,
        children,
        className,
        inline,
        description,
        name,
        onChange,
        selectedValue,
        tooltip,
        tooltipProps,
    } = props;

    const buttonProps = {
        'aria-invalid': ariaInvalid,
        inline,
        name,
        onChange,
        selectedValue,
    };

    return (
        <fieldset
            className={classNames('ffe-fieldset', className)}
            onChange={onChange}
        >
            {description && (
                <legend className="ffe-form-label">
                    {description}
                    {tooltip && <Tooltip {...tooltipProps}>{tooltip}</Tooltip>}
                </legend>
            )}
            {children(buttonProps)}
        </fieldset>
    );
};

RadioButtonGroup.defaultProps = {
    onChange: f => f,
};

RadioButtonGroup.propTypes = {
    /** Indicates whether the radio buttons inside this radio button group is
     * invalid or not. Propagated to all children.
     * */
    'aria-invalid': oneOf(['true', 'false']),
    /**
     * Function receiving props relevant to each radio button as an object
     * argument. Expected to return a set of radio buttons, which should get
     * these properties applied to them.
     */
    children: func.isRequired,
    /** Additional class names applied to the fieldset */
    className: string,
    /** The text describing the radio button set */
    description: string,
    /**
     * Indicates whether the radio buttons inside this radio button group is
     * rendered inline or as a block.
     * */
    inline: bool,
    /** The name of the radio button */
    name: string,
    /** Change handler, receives value of selected radio button */
    onChange: func,
    /** The currently selected value */
    selectedValue: string,
    /** Tooltip providing further detail about the radio button set */
    tooltip: string,
    /** Additional props passed to the Tooltip component */
    tooltipProps: shape({}),
};

export default RadioButtonGroup;
