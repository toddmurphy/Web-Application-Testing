import React, { useState } from 'react';

const Display = (props) => {
    const {balls, strikes} = props;

    return (
        <div>
            <div data-testid='balls-title'>Balls {balls}</div>
            <div data-testid='strikes-title'>Strikes {strikes}</div>
        </div>
    )
}

export default Display;