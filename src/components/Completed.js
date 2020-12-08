import React from 'react';
import { Card } from './Card';

export const Completed = () => {
    return (
        <>
            <Card title="Completed">
                <ul className="completed__list">
                    <li className="completed__item">
                        <p className="completed__title">buy milk</p>
                        <button className="completed__button">Remove</button>
                    </li>
                </ul>
            </Card>
        </>
    )
}