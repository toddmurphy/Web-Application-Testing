import React, { useState } from 'react';

const Display = (props) => {

    return (
        <div>
            <h2>Display component</h2>
            <div>Balls: {props.balls}</div>
            <div>Strikes: {props.strikes}</div>
        </div>
    )
}

export default Display;