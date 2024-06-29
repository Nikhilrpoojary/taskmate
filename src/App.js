import './App.css';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [taskList,setTaskList] = useState(JSON.parse(localStorage.getItem('taskList'))||[]);
  const [updateTask, setUpdateTask] = useState(null);

  
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme'))||'light')

  useEffect(() => {
    console.log("taskList",taskList);
    localStorage.setItem('taskList',JSON.stringify(taskList));
  }, [taskList])
  
  
  useEffect(() => {
    localStorage.setItem('theme',JSON.stringify(theme));
  }, [theme])

  return (
    <div className={`App ${theme}`}>
      <Header setTheme={setTheme} activeTheme={theme} />
      <AddTask taskList={taskList} setTaskList={setTaskList} updateTask={updateTask} />
      <ShowTask taskList={taskList} setTaskList={setTaskList} setUpdateTask={setUpdateTask}/>
    </div>
  );
}

export default App;
