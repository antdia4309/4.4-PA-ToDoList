import React from 'react';

const TextField = ({ value, onChange }) => {
    return (
        <input 
            type="text" 
            value={value} 
            onChange={onChange} 
            placeholder="Enter Text"
        />
    );
};

export default TextField;