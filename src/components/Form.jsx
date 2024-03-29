import { useEffect, useState } from "react"
import Error from "./Error"

function From({toDoTasks, setToDoTasks,oneTask,setOneTask}) {


    const[taskName, setTaskName]=useState('')
    const[taskDate, setTaskDate]=useState('')
    const[taskTime, setTaskTime]=useState('')
    const[taskInfo, setTaskInfo]=useState('')
    const[error, setError]=useState(false)

    useEffect(()=>{
        if(Object.keys(oneTask).length>0){
            setTaskName(oneTask.taskName)
            setTaskDate(oneTask.taskDate)
            setTaskTime(oneTask.taskTime)
            setTaskInfo(oneTask.taskInfo)
        }else{}
    },[oneTask])
    

    const generateId = ()=>{
        const random = Math.random().toString(36).substr(2)
        const time = Date.now().toString(36)
        return random+time
    }

    //to prevent default behavior from submit and do our own checks and operation
    //operates on the <form></form>
    const handleSubmit= (e)=>{
        e.preventDefault()

        //if any of the inputs are empty send for error
        if([taskName, taskDate, taskTime, taskInfo].includes('')){
            setError(true)
            return
        }

        setError(false)

        const taskDone = false

        //onClick of submit an object of task is made with all the information written
        
        const obTask={
            taskName,
            taskDate,
            taskTime,
            taskInfo,
            taskDone,   
        }

        if(oneTask.id){
            obTask.id = oneTask.id
            const updatedTask = toDoTasks.map(task=> task.id === oneTask.id ? obTask : task)
            setToDoTasks(updatedTask)
            setOneTask({})
        }else{
            obTask.id = generateId() 
            setToDoTasks([...toDoTasks,obTask])
        }

       

        //after saving toDoTasks clean the input
        setTaskName('')
        setTaskDate('')
        setTaskTime('')
        setTaskInfo('')
    }

    return(
        
        <div className="md:w-1/3 lg:w-3/12 mx-5">
            <h2 className="font-black text-3xl text-center my-6 text-amber-100">
                Add Task 
            </h2>

            <form
                onSubmit={handleSubmit}
                className="bg-amber-300 shadow-lg rounded-lg py-10 px-5"
            >
                {error && <Error><p>Fill in all the Camps</p></Error>
        }
                <div className="mb-5">
                    <label 
                        htmlFor="taskName"
                        className="block font-bold uppercase text-lg"
                    >Task</label>

                    <input 
                        id="taskName"
                        type="text" 
                        placeholder="Write the Task To Do"
                        className="w-full p-1 mt-2 rounded-md"
                        value={taskName}
                        onChange={(e)=>setTaskName(e.target.value)}
                    />
                </div>

                <div className="mb-5" >
                    <label 
                        htmlFor="taskDate"
                        className="block font-bold uppercase text-lg"
                    >Date</label>

                    <input 
                        id="taskDate"
                        type="date" 
                        className="w-full p-1 mt-2 rounded-md"
                        value={taskDate}
                        onChange={(e)=>setTaskDate(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label 
                        htmlFor="taskTime"
                        className="block font-bold uppercase text-lg"
                    >Time</label>

                    <input 
                        id="taskTime"
                        type="time" 
                        className="w-full p-1 mt-2 rounded-md"
                        value={taskTime}
                        onChange={(e)=>setTaskTime(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label 
                        htmlFor="taskInfo"
                        className="block font-bold uppercase text-lg"
                    >Aditional inaformation</label>

                    <textarea 
                        id="taskInfo" 
                        className="w-full p-1 mt-2 rounded-md"
                        placeholder="Additional inaformation on the task"
                        value={taskInfo}
                        onChange={(e)=>setTaskInfo(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="
                    bg-gradient-to-br from-teal-500 to-cyan-700
                    hover:bg-gradient-to-tl
                    w-full
                    p-2
                    rounded-md
                    text-white
                    font-bold
                    uppercase
                    hover:cursor-pointer
                    "
                    value={oneTask.id?"Edit Task":"Add Task"}
                />
                
            </form>
        </div>
        
    )
    
}
export default From