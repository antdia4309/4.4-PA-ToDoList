import React from 'react';
//import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
//import TextField from './components/TextField';
//import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

// function App() {
//   const [inputValue, setInputValue] = useState('');

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <TextField value={inputValue} onChange={handleChange} />
//         <h1>{inputValue}</h1>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <p>
//         <h1><strong>Todo List</strong></h1>
//       </p>
//         <TodoList />
//       </header>
//     </div>
//   );
// }

export default App;
