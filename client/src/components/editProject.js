import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const EditProject = (props) => {
    const[edit, setprjEdit]=useState({
        title: "",
        description:""
    })


    const handleSubmit = (e)=>{
        e.preventDefault()
        fetch(`/projects/`,{
            method: "PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                title: edit.title,
                description: edit.description,
                user_id: props.user.id
            })
        })
    }

   

    const handleChange = (e) => {
        setprjEdit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }
    return (
        <>
        <Modal backdrop="static" keyboard={false} {...props} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header></Modal.Header>
            <Modal.Body closeButton>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='my-3'>
                        <Form.Label>Title:</Form.Label>
                        <Form.Control placeholder='title' name='title' value={edit.title} onChange={handleChange} type="text"></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-3'>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control placeholder='Description' name='description' value={edit.description} onChange={handleChange} type="text"></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-3'>
                        <Button  variant='outline-dark' type='submit'>Edit Project</Button>
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

export default EditProject;