function Task({task, deletTask,doneTask}) {
    // console.log(task)
    const{taskName, taskDate, taskTime, taskInfo, taskDone, id}=task

    const handleDelete = ()=>{
        const doubleCheck = confirm('Are you shure you want to delete this task?')
        if (doubleCheck){
            deletTask(id)
        }
    }
    const handleDone = ()=>{
        doneTask(id)
    }


    return(
        <div className="bg-amber-300 shadow-lg rounded-lg py-10 px-5 my-4 ">
            <p className="font-bold mb-3 uppercase"
            >Task: {''}<span className="normalcase font-normal">{taskName}</span></p>
           
            <p className="font-bold mb-3 uppercase"
            >Date: {''}<span className="normalcase font-normal">{taskDate}</span></p>
           
            <p className="font-bold mb-3 uppercase"
            >Time: {''}<span className="normalcase font-normal">{taskTime}</span></p>
           
            <p className="font-bold mb-3 uppercase"
            >Task Details: {''}<span className="normalcase font-normal">{taskInfo}</span></p>

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    onClick={handleDone}
                    className="bg-gradient-to-br from-teal-500 to-cyan-700 hover:bg-gradient-to-tl py-2 md:px-3 px-10 rounded-md text-white font-bold uppercase"
                >Done</button>
                <button
                    type="button"
                    className="bg-gradient-to-br from-cyan-500 to-blue-600 hover:bg-gradient-to-tl py-2 md:px-3 px-10 rounded-md text-white font-bold uppercase"
                    
                >Edit</button>
                <button
                    type="button"
                    className="bg-gradient-to-br from-red-600 to-red-800 hover:bg-gradient-to-tl py-2 md:px-3 px-10 rounded-md text-white font-bold uppercase"
                    onClick={handleDelete}
                >Delete</button>
            </div>
        </div>
    )
    
}
export default Task