import React, { Component } from 'react';

class Dropdown extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="dropdown">
                <h3 className="dropdown__title">{this.props.title}</h3>
                <input type="text" className="dropdown__inputField"></input>
            </div>
        );
    }
}
 
export default Dropdown;