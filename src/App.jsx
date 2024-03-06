import { useState } from 'react'
import List from './components/List'
import From from './components/Form'
import Header from './components/Header'
import DoneList from './components/DoneList'


function App() {

  const[toDoTasks, setToDoTasks]=useState([])

  const[taskDone, setTaskDone]=useState([])

  const deletTask =(id)=>{
    const remainingTask = toDoTasks.filter((task)=>task.id !== id)
    setToDoTasks(remainingTask)
  }
  const doneTask =(id)=>{
    const remainingTask = toDoTasks.filter((task)=>task.id === id)
    remainingTask.map((task)=>{
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
          />
          <List
            toDoTasks={toDoTasks}
            deletTask={deletTask}
            doneTask={doneTask}
          />
          <DoneList
            taskDone={taskDone}
          />
        </div>
      </div>
  )
}

export default App
