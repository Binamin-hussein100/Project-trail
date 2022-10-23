import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as BsIcons from "react-icons/bs";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



const Project = ()=>{
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        fetch("/projects")
        .then((res)=>res.json())
        .then((dta)=>{
            // setProjects([...projects, dta])});
            setProjects(dta)})
    },[])
    console.log(projects.length)
    console.log(projects)

    const handleDeleteProject = (id) => {
        
            fetch(`/projects/${id}`,{
                method: 'DELETE',
            })
    }



    return (
        <div>
            <ul>                            
                    <><Container className="cont1">
                        <Row>
                            <Col sm={4}></Col>
                            <Col sm={6}>
                                <h2>Hello, Binamin ({projects.length})</h2>

                            </Col>
                            <Col sm={2}></Col>
                        </Row>
                    </Container>
                    
                    <Container id="tasks" className="cont1">
                            <h3 id="priority">Priorities  <span><BsIcons.BsFillPlusCircleFill /></span></h3>
                            <Row>
                                <Col sm={12}><u>All projects</u></Col>
                                
                                
                            </Row>
                        </Container>
                        <Container id="project" className="cont2">
                            <h3 id="prj">Projects <span><BsIcons.BsFillPlusCircleFill /></span></h3>
                            <Row>
                                <Col sm={7}>
                              
                                    {/* <Card>
                                        <Card.Header>Binamin</Card.Header>
                                        <Card.Body>
                                            <Card.Title>title</Card.Title>
                                            <Card.Text>description</Card.Text>
                                            <Button>DELETE</Button>
                                            <Button>UPDATE</Button>
                                        </Card.Body>
                                    </Card> */}
                        
                                    <ul>                                        
                                        {projects?.map(prj=>(
                                            <li key={prj.id}>
                                               
                                                <Card border="dark">
                                                <Card.Header>{prj.user.username}</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>{prj.title}</Card.Title>
                                                    <Card.Text>{prj.description}</Card.Text>
                                                    <div className='optio'>
                                                    <div>                              
                                                        <Button variant='outline-dark'>UPDATE</Button>
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
                        </Container><Container id="goals" className="cont1">
                            <h3 id="prj">Goals<span><BsIcons.BsFillPlusCircleFill /></span></h3>
                            <Row>
                                <Col>

                                </Col>
                            </Row>
                        </Container></>
             
            </ul>
        </div>
            
                

            
             
        
    )
}

export default Project

