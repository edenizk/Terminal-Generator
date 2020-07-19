import React, { Component } from 'react';
import { ChevronDown } from 'react-feather';

class Dropdown extends Component {
    constructor (props) {
        super(props)

        this.state = {
            selected: this.props.options[0],
            optionsActive: false,
        }
    }

    toggleDropdown() {
        this.setState({
            optionsActive: !this.state.optionsActive,
        });
    }

    setSelected(value) {
        this.setState({
            selected: value 
        });
    }

    render() { 
        const { title, options } = this.props
        return ( 
            <div className="dropdown">
                <h3 className="dropdown__title input-title">{title}</h3>
                <div className="dropdown__label" onClick={() => this.toggleDropdown()}>
                    <span className="dropdown__selected">{ this.state.selected }</span>
                    <ChevronDown className="dropdown__icon"></ChevronDown>
                </div>
                <ul className={`dropdown__options${ this.state.optionsActive ? ' dropdown__options--active' : '' }`} >
                    { 
                    options.map( (option) => {
                        return <li 
                        className={`dropdown__option${ this.state.selected === option ? 'dropdown__option--selected' : '' }`} 
                        onClick={ () => this.setSelected(option)}>{option}</li>
                    })}
                </ul>
            </div>
        );
    }
}
 
export default Dropdown;