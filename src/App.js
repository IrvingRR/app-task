import React, {useState, useEffect} from "react";
import './App.css';
import FormTask from './components/FormTask';
import TasksList from './components/TasksList';
import ModalDelete from './components/ModalDelete';

function App() {

  const [tasks, setTasks] = useState([]);
  const [modalDelete, setModalDelete] = useState({state: false, id: null});

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
    setModalDelete({state: false, id: null});
  }

  const deleteTasksCompleted = () => {
    const newTasks = tasks.filter((task) => task.completed !== true);
    setTasks(newTasks);
  }

  const showModalDelete = (id) => {
    setModalDelete({state: true, id: id});
  }

  const hiddenModalDelete = () => {
    setModalDelete({state: false, id: null});
  }

  return (
    <main className="App" >
      <h1>TaskList App</h1>
      <ModalDelete title="Do you want delete this task?" deleteTask={deleteTask} modalDelete={modalDelete} setModalDelete={setModalDelete} hiddenModalDelete={hiddenModalDelete} />

        <FormTask addTask={addTask} />
        <TasksList tasks={tasks} toggleTask={toggleTask} deleteTasksCompleted={deleteTasksCompleted} showModalDelete={showModalDelete} />
    </main>
  );
}

export default App;