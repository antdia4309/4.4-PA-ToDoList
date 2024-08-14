import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const Button = ({ label, onClick}) => {
        return <button onClick={onClick}>{label}</button>
    };

    return (
        <div className="App">
            <h1>Counter: {count}</h1>
            <Button label="Increment" onClick={handleIncrement} />
            <Button label="Decrement" onClick={handleDecrement} />
        </div>
    );
};

export default Counter;