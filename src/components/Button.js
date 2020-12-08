import React from 'react';

export const Button = ({ className, onClick, children }) => {
    return (
        <button
            onClick={ onClick }
            className={ className }
        >
            { children }
        </button>
    )
}