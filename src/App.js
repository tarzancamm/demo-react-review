import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import { useState } from 'react'

function App() {
  const [taskList, setTaskList] = useState([])
  console.log("Task List: ", taskList)

  const addTask = (newTask) => {
    setTaskList((prevState) => {
      return [...prevState, newTask]
    })
    // setTaskList([...taskList, newTask])
  }

  return (
    <div className="App">
      <Header />
      <Form addTask={addTask} />
    </div>
  );
}

export default App;
