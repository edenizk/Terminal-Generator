import React, { Component } from 'react';

class Input extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="input">
                <h3 className="input__title">{this.props.title}</h3>
                <input type="text" className="input__inputField"></input>
            </div>
        );
    }
}
 
export default Input;