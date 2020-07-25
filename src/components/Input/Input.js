import React from 'react';

const Input = (props) => {
    const { title, event } = props

    return ( 
        <div className="input">
            <h3 className="input__title input-title">{title}</h3>
            <input type="text" className="input__inputField" onChange={(e) => {event(e)}}></input>
        </div>
    );
}
 
export default Input;