import Task from "./Task"
function List({toDoTasks, deletTask, doneTask, setOneTask}) {
    return(
        <div className="md:w-1/3 lg:w-5/12 mx-5 ">
            {toDoTasks && toDoTasks.length?(
            <>
                <h2 className="font-black text-3xl text-center my-6 text-amber-100">Task List</h2>
                {toDoTasks.map((task)=>(
                    
                 <Task
                    key={task.id}
                    task={task}
                    deletTask={deletTask}
                    doneTask={doneTask}
                    setOneTask={setOneTask}
                 />
            ))}
            </>):
            <>
                <h2 className="font-black text-3xl text-center my-6 text-amber-100">Task List Empty</h2>
            </>}
            
        </div>
    )
}
export default List