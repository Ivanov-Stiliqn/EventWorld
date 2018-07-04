import React, { Component } from 'react';


export default class Input extends Component {
    render() {
        const { name, type = 'text', value, onChange, label, placeholder, minLength, pattern } = this.props;
        return (
            <div>
                <label htmlFor={name}>{label}</label>
                <input
                    onChange={onChange}
                    name={name}
                    id={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    required
                    pattern={pattern}
                    minLength={minLength}/>
            </div>
        );
    }
}