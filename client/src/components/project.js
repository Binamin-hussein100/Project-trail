import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as BsIcons from "react-icons/bs";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import AddProject from '../components/addproject';
import EditProject from "../components/editProject";
import Task from "../components/task";
import { FaBullseye } from "react-icons/fa";
import EditTask from "../components/editTask";




const Project = ({user})=>{
    const [projects, setProjects] = useState([])
    const [modalShow, setModalShow] = useState(false)
    const [updateForm, setUpdateForm] = useState(false)
    const [addTask, setAddTask] = useState(false)
    const [task, setTask] = useState([])

 
    useEffect(()=>{
        fetch("/projects")
        .then((res)=>res.json())
        .then((dta)=>{
            // setProjects([...projects, dta])});
            setProjects(dta)})  
    },[])

    const handleDeleteProject = (id) => {        
            fetch(`/projects/${id}`,{
                method: 'DELETE',
            })}
            

    const filterData = projects.filter(project =>{
        return project.user.id === user.id
    })

    return (
        <div>
            <ul>                            
                    <><Container className="cont1">
                        <Row>
                            <Col sm={4}></Col>
                            <Col sm={6}>
                                <h2>Hello, {user.username} ({`All projects: ${filterData.length}`})</h2>

                            </Col>
                            <Col  sm={2}></Col>
                        </Row>
                    </Container>
                    
                 
                        <Container  id="project" className="cont2">
                            <h3 id="prj">Projects <span><BsIcons.BsFillPlusCircleFill onClick={()=> setModalShow(true)}/></span></h3>
                            <AddProject user= {user} show={modalShow} onHide={()=>setModalShow(false)}/>
                            <Row>
                                <Col id="allCards" className="d-flex flex-wrap" sm={12}>

                        
                                    <ul id="listy">                                        
                                        {filterData?.map(prj=>(
                                            <li id="singCard" key={prj.id}>
                                               
                                                <Card  border="dark">
                                                <Card.Header>{prj.user.username}</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>{prj.title}</Card.Title>
                                                    <Card.Text>{prj.description}</Card.Text>
                                                    <div className='optio'>
                                                    <div>                              
                                                        <Button variant='outline-dark' onClick={()=> setUpdateForm(true)}>UPDATE</Button>
                                                        <EditProject onHide = {()=>setUpdateForm(false)} show={updateForm} user = {user} /> 
                                                    </div>
                                                    <div>
                                                        <Button variant='outline-danger' onClick={() => handleDeleteProject(prj.id)}>DELETE</Button>
                                                    </div>
                                                </div>
                                                </Card.Body>
                                            </Card>
                                            </li>
                                        
                                ))}                                   
                                        
                                    </ul>

                                </Col>
                            </Row>
                        </Container>
                        <Container id="tasks" className="cont1">
                            <h3 id="priority">Priorities <span><BsIcons.BsFillPlusCircleFill onClick={()=>setAddTask(true)}/></span> </h3>
                            <EditTask show={addTask} user= {user}  onHide={()=>setAddTask(false)}/>
                            <Row>
                                <Col sm={12}><u>From All projects</u></Col>
                                <Task/>
                                
                            </Row>
                        </Container>
                        {/* <Container id="goals" className="cont1">
                            <h3 id="prj">Goals<span><BsIcons.BsFillPlusCircleFill /></span></h3>
                            <Row>
                                <Col>

                                </Col>
                            </Row>
                        </Container> */}
                        </>
             
            </ul>
        </div>
            
                

            
             
        
    )
}

export default Project

