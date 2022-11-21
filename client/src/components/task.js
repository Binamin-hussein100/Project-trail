import React, {useState, useEffect} from 'react';


const Task = ()=>{
    const [task, setTask] = useState([])
   
    useEffect(()=>{
        fetch("/tasks")
        .then((res)=>res.json())
        .then((dta)=>setTask(dta))
    },[])
    console.log(task)
    return (
       
        <ul>
            {task?.map((i)=>(
                <h6>{i.name}</h6>
            ))}
        </ul>
    )
}

export default Task;