import React, { useState } from 'react';
import useToggle from './hooks/useToggle';

function Toggler() {
    const [emoji, toggleEmoji] = useToggle(true);
    const [fruit, toggleFruit] = useToggle(true);
    return (
        <div>
            <h1>Emoji pickker</h1>
            <span>{emoji ? '😆' : '😬'}</span>
            <button onClick={toggleEmoji}>Change emoji</button>
            <span>{fruit ? '🍒' : '🍊'}</span>
            <button onClick={toggleFruit}>Change fruit</button>
        </div>
    )
}

export default Toggler;