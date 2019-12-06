import React from 'react';

const Display = (props) => {
    const { balls, strikes } = props;

    return (
        <div>
            <div>Balls {balls}</div>
            <div>Strikes {strikes}</div>
        </div>
    )
}

export default Display;