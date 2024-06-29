import { useEffect, useRef, useState } from "react"


export const AddTask = ({taskList,setTaskList,updateTask}) => {

  const taskInput = useRef();

  const [editTask, setEditTask] = useState(updateTask)

  function addTask(event){
    event.preventDefault();
    const date = new Date();
    let updatedTaskList = taskList;
    if(editTask){
      updatedTaskList= taskList.map((task)=>{
        if(editTask.id === task.id){
          task.name =  taskInput.current.value
          
        }
        return task;
      })
      setTaskList([...updatedTaskList]);
    }else{
      let taskData = {
        id: Math.floor(Math.random() * 10000),
        name : taskInput.current.value,
        time : date.toString()
      }
      setTaskList([...updatedTaskList,taskData]);
    }
    
    setEditTask(null)
    taskInput.current.value = "";
  }

  useEffect(() => {
    
    taskInput.current.value = updateTask && updateTask.name;
    setEditTask(updateTask)

  }, [updateTask])
  

  return (
    <section className="addTask">
        <form >
            <input type="text" name="task" autoComplete="off" placeholder="add task" maxLength={25} ref={taskInput} />
            <button onClick={(event)=>addTask(event)} type="submit" > {editTask ? 'Update' : 'Add'}</button>
        </form>
    </section>
  )
}
