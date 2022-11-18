import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const EditTask = (props) =>{
    const [add, setAdd] = useState({
        name:"",
        description:"",
        timeAlloc: "",
    })
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        fetch("/tasks",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                name:add.name,
                desscription: add.description,
                timeAlloc:add.timeAlloc,
                user_id: props.user.id
            })
        })
        alert("Task Successfully added.")
    }

    const handleChange = (e) => {
        setAdd({
            ...add,
            [e.target.name]:e.target.value
        })
    }

    return(
        <>
        <Modal backdrop="static" keyboard={false} {...props} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header></Modal.Header>
            <Modal.Body closeButton>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='my-3'>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control placeholder='title' name='name' value={add.name} onChange={handleChange} type="text"></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-3'>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control placeholder='Description' name='description' value={add.description} onChange={handleChange} type="text"></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-3'>
                        <Form.Label>Time planned for the task:</Form.Label>
                        <Form.Control placeholder='Designanted time' name='timeAlloc' value={add.timeAlloc} onChange={handleChange} type="text"></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-3'>
                        <Button  variant='outline-dark' type='submit'>Add Task</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}

export default EditTask;