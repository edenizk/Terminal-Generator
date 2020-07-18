import React, { Component } from 'react';
import TerminalHeader from './TerminalHeader';

class Terminal extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="terminal">
                <TerminalHeader/>
                <div className="terminal__content">
                    <p className="terminal__paragraph">Your Favorite Shell ❤</p>
                    <p className="terminal__paragraph">C:\Users\me&gt; <span className="terminal__cursor">{this.props.cursor ? this.props.cursor : ' |'}</span></p>
                </div>
            </div>
        );
    }
}
 
export default Terminal;