import React, {useState, useEffect} from 'react';
import * as ImIcons from 'react-icons/im'
import Card from 'react-bootstrap/Card'
import UpdateTask from './updateTask';
import Button from 'react-bootstrap/Button';


const Task = (props)=>{
    const [task, setTask] = useState([])
    const [tskUpdate, setTskUpdate] = useState(false)
   
    useEffect(()=>{
        fetch("/tasks")
        .then((res)=>res.json())
        .then((dta)=>setTask(dta))
    },[])
    

    const handleDeleteTask = (id) => {
        fetch(`/tasks/${id}`,{
            method: 'DELETE',
        })
        window.location.reload()
    }
    return (
       
        <ul>
            {task?.map((i)=>(
                // <Container id='tasky'>
                //     <Row>
                //         <Col sm={5}>{i.name}   {i.description}</Col>
                //         <Col sm={5}>{i.timeAlloc}</Col>
                //     </Row>
                // </Container>
               <li key={i.id}>
                    <div id='tasker'>
                        <h3>{i.name}</h3>
                        <h5>{i.description}</h5>                        
                        <div id='btns'>                              
                            <Button variant='outline-dark' onClick={()=> setTskUpdate(true)}>UPDATE</Button>
                            <UpdateTask onHide = {()=>setTskUpdate(false)} show={tskUpdate} user = {props.user} /> 
                            <ImIcons.ImCancelCircle variant='outline-danger' onClick={() => handleDeleteTask(i.id)}>DELETE</ImIcons.ImCancelCircle>
                        </div>
                    </div>
               </li>
            ))}
        </ul>
    )
}

export default Task;