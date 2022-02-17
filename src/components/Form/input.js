import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { StyledInput } from './style';

export default function Input({ name, ...rest }) {
    const { fieldName, registerField, defaultValue, error } = useField(name);
    const inputRef = useRef(null);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);

    return (
        <div>
            <StyledInput ref={inputRef} {...rest} />
            {error && <p> {error}</p>}
        </div>
    );
}
