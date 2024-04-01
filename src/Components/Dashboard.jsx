import React from 'react'
import { Container, Row, Col, Tab, Nav, Image} from 'react-bootstrap'
import { useState } from 'react'
import "../css/Dashboard.scss"
import Home from "./Dashboard/Home.jsx"
import Profile from './Dashboard/Profile.jsx'
import LogFood from './Dashboard/LogFood.jsx'
import MyMeals from './Dashboard/MyMeals.jsx'

function Dashboard() {
  const [key, setKey] = useState("home");

  // state variables for macros
  const [carbs, setCarbs] = useState(10);
  const [protein, setProtein] = useState(9);
  const [fat, setFat] = useState(12);

  const [carbGoal, setCarbGoal] = useState(100);
  const [proteinGoal, setProteinGoal] = useState(100);
  const [fatGoal, setFatGoal] = useState(100);
  return (
    <>
    <Tab.Container defaultActiveKey={key} activeKey={key} onSelect={(k) => setKey(k)}>
        <div id='container'>
            <Row>
                <Col sm={2}>
                    <h3 id='title'>Dashboard</h3>
                </Col>
                <Col sm={9}>
                    <span id='user'>
                        <Image src='https://placehold.co/28x28' roundedCircle />
                        <p>User</p>
                    </span>
                </Col>
            </Row>
            <Row>
                <Col sm={2}>
                    <Nav variant='pills' className='flex-column'>
                        <Nav.Item>
                            <Nav.Link eventKey="home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="profile">Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="logFood">Log Food</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="myMeals">My Meals</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="home"><Home setKey={setKey} carbs={carbs} protein={protein} fat={fat} carbGoal={carbGoal} proteinGoal={proteinGoal} fatGoal={fatGoal}/></Tab.Pane>
                        <Tab.Pane eventKey="profile"><Profile /></Tab.Pane>
                        <Tab.Pane eventKey="logFood"><LogFood /></Tab.Pane>
                        <Tab.Pane eventKey="myMeals"><MyMeals /></Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>

        </div>
    </Tab.Container>
    </>

  )
}

export default Dashboard