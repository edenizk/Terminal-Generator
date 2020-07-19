import React, { Component } from 'react';

class Input extends Component {
    state = {  }
    render() { 
        const { title } = this.props
        return ( 
            <div className="input">
                <h3 className="input__title input-title">{title}</h3>
                <input type="text" className="input__inputField"></input>
            </div>
        );
    }
}
 
export default Input;