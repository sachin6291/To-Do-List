import { useState } from 'react'
import List from './components/List'
import From from './components/Form'
import Header from './components/Header'
import DoneList from './components/DoneList'


function App() {

  const[toDoTasks, setToDoTasks]=useState([])

  const deletTask =(id)=>{
    const remainingTask = toDoTasks.filter((task)=>task.id !== id)
    setToDoTasks(remainingTask)
  }

  return (
      <div className='container mx-auto mt-16'>
        <Header/> 
        <From
          toDoTasks={toDoTasks}
          setToDoTasks={setToDoTasks}
        />
        <List
          toDoTasks={toDoTasks}
          deletTask={deletTask}
        />
        <DoneList/>
      </div>
  )
}

export default App
