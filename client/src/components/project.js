import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as BsIcons from "react-icons/bs";


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
                                <Col sm={4}><u>Upcoming</u></Col>
                                <Col sm={4}><u>Overdue</u></Col>
                                <Col sm={4}><u>Completed</u></Col>
                            </Row>
                        </Container><Container id="project" className="cont2">
                            <h3 id="prj">Projects <span><BsIcons.BsFillPlusCircleFill /></span></h3>
                            <Row>
                                <Col sm={12}>
                                    <ul>
                                        <li>one </li>
                                        <li>Two</li>
                                        <li>Three</li>
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

