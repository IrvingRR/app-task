import React, {useState, useEffect} from "react";
import './App.css';
import FormTask from './components/FormTask';
import TasksList from './components/TasksList';

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storageTasks = JSON.parse(localStorage.getItem('tasks'));
    if(storageTasks) {
      setTasks(storageTasks);
    }
    
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));

  }, [tasks]);

  const addTask = (task) => {
    setTasks(prevTasks => {
      const newTasks = [...prevTasks, task];
      return newTasks;
    });
  }

  const toggleTask = (id) => {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id);
    task.completed = !task.completed;
    setTasks(newTasks);
  }

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    console.log(newTasks);
  }

  const deleteTasksCompleted = () => {
    const newTasks = tasks.filter((task) => task.completed !== true);
    setTasks(newTasks);
  }

  return (
    <div className="App" >
      <h1>TaskList App</h1>
      <main className="container">
        <FormTask addTask={addTask} />
        <TasksList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} deleteTasksCompleted={deleteTasksCompleted}/>
      </main>
    </div>
  );
}

export default App;