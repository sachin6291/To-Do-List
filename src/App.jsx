import { useEffect, useState } from 'react'
import List from './components/List'
import From from './components/Form'
import Header from './components/Header'
import DoneList from './components/DoneList'



function App() {

  const[toDoTasks, setToDoTasks]=useState(JSON.parse(localStorage.getItem('toDoTasks'))??[])

  const[taskDone, setTaskDone]=useState([])

  const[oneTask, setOneTask]=useState({})

  useEffect(()=>{
    localStorage.setItem('toDoTasks',JSON.stringify(toDoTasks))
  },[toDoTasks])

  const deletTask =(id)=>{
    const remainingTask = toDoTasks.filter((task)=>task.id !== id)
    setToDoTasks(remainingTask)
  }
  const doneTask =(id)=>{
    const finishedTask = toDoTasks.filter((task)=>task.id === id)
      finishedTask.map((task)=>{
        task.taskDone=true 
        setTaskDone([...taskDone, task])
    })
    
    
    const undoneTask = toDoTasks.filter((task)=>task.taskDone !== true)
    setToDoTasks(undoneTask)
    
    
  }
  

  return (
      <div className='container mx-auto mt-16'>
        <Header/>
        <div className='mt-12 md:flex'> 
          <From
            toDoTasks={toDoTasks}
            setToDoTasks={setToDoTasks}
            oneTask={oneTask}
            setOneTask={setOneTask}
          />
          <List
            toDoTasks={toDoTasks}
            deletTask={deletTask}
            doneTask={doneTask}
            setOneTask={setOneTask}
          />
          <DoneList
            taskDone={taskDone}
          />
        </div>
      </div>
  )
}

export default App
