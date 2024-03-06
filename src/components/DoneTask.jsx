const DoneTask = ({task})=>{
    const{taskDate, taskInfo, taskName, taskTime}=task
    return(
        <div className="bg-gradient-to-br from-lime-400 to-emerald-500 shadow-lg rounded-lg py-5 px-5 my-4 mx-5">
            <p className="font-bold mb-3 uppercase"
            >Task: {''}<span className="normalcase font-normal">{taskName}</span></p>
           
            <p className="font-bold mb-3 uppercase"
            >Date: {''}<span className="normalcase font-normal">{taskDate}</span></p>
           
            <p className="font-bold mb-3 uppercase"
            >Time: {''}<span className="normalcase font-normal">{taskTime}</span></p>
           
            <p className="font-bold mb-3 uppercase"
            >Task Details: {''}<span className="normalcase font-normal">{taskInfo}</span></p>
        </div>
    )
    
}
export default DoneTask