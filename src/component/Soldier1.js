import React from 'react'
import Training from './Hoc/Training';

const Soldier1 = (props) => {

    return (
        <div>
            <h1>Soldier_1 {props.gunname} shots: {props.count}</h1>
            <button onClick={props.handleClick}>Fire</button>
        </div>
    )
}

export default Training(Soldier1);
