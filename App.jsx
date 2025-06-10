import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [task, setTask] = useState([]);
  const [message, setMessage] = useState('');

  const handleOnchange = () => {
    message = value;
  };


  const handleToDo = (e) => {
    setTask(prevTask => [...prevTask, message]);
    setMessage("");
  }

  return (
    <>
      <label>Todo App</label>
      <input
        className="ml-2 border-2 border-amber-600 rounded"
        name="first_name"
        onChange={() => setMessage(e.target.value)}
        value={message}

      />
      <br />
      <button type="submit" onClick={handleOnchange}>Click here</button>
      <ul>
        {task.map(item => <li className='text-white'>{e.target.item}</li>)}
      </ul>
    </>
  );
}

export default App;