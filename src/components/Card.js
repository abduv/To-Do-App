import React from 'react';

export const Card = ({ title, children }) => {
    return (
        <div className="card">
            <div className="card__title">
                <h1>{ title }</h1>
            </div>
            <div className="card__body">
                { children }
            </div>
        </div>
    )
}