import React from 'react';
import './Input.css';

const input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case ('input'):
            inputElement = <input 
            className="InputElement" 
            {...props.elementConfig}
            onChange={props.changed} 
            value={props.value} />
            break;
        case ('textarea'):
            inputElement = <textarea 
            className="InputElement" 
            {...props.elementConfig}
            onChange={props.changed} 
            value={props.value} />
            break;
        case ('select'):
            inputElement = (<select 
            className="InputElement"
            onChange={props.changed} 
            value={props.value}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>)
            break;

        default:
            inputElement = <input 
            className="InputElement"
            onChange={props.changed} 
            value={props.value} />
            break;
    }
    return (
        <div className="Input">
            <label className="Label">
                { props.label }
            </label>
            { inputElement }
        </div>
    );
};

export default input;