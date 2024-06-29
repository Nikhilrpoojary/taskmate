
export const ShowTask = ({taskList,setTaskList,setUpdateTask}) => {

  function deleteTask(taskId){
   const updatedTaskList = taskList.filter((task)=> task.id !== taskId);
   setTaskList(updatedTaskList);
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{taskList && taskList.length}</span>
        </div>
        <button className="clearAll" onClick={()=>setTaskList([])}>Clear all</button>
      </div>
      <ul>
        {taskList && taskList.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name"> {task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i className="bi bi-pencil-square" onClick={()=>setUpdateTask(task)}></i>
            <i className="bi bi-trash" onClick={()=>deleteTask(task.id)}></i>
          </li>
        ))}

      </ul>
    </section>
  )
}
