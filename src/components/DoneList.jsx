import DoneTask from "./DoneTask"
const DoneList =({taskDone})=>{
    return( 
    <>
        <div className="md:w-1/3 lg:w-3/12 md:h-screen">
            {taskDone && taskDone.length ?(
                <>
                    <h2 className="font-black text-3xl text-center my-6 text-amber-100">Done Task</h2>
                    {taskDone.map((task)=>(
                        <DoneTask
                            key={task.id}
                            task={task}
                        />
                    ))}
                </>
                )
            :(
                <h2 className="font-black text-3xl text-center my-6 text-amber-100">Done Task</h2>

            )}
        </div>
    </>)
} 


export default DoneList