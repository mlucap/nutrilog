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

  const [goals,setGoals]= useState({
    totalCalories : 0,
    carbsGoal: 0,
    proteinGoal : 0,
    fatsGoal : 0
  })

  const [macros,setMacros]= useState({
    total:0,
    carbs: 0,
    protein : 0,
    fats : 0
  })

  // expected
    {/* 
        [
            {
                name: "name",
                total: 0,
                carbs: 0,
                protein: 0,
                fats: 0
            },
            {
                ...
            }
        ]
    */}
  const [food, setFood] = useState([])

  const handleRemoveItem = (i) => {
    // removes the index item from the array by setting it to the items before
    // and after while leaving out index i
    setFood([...food.slice(0, i), ...food.slice(i + 1)]);
    // PROBLEM: does not remove from the 'macros' state
  }

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
                        <Tab.Pane eventKey="home"><Home setKey={setKey} macros={macros} goals={goals}/></Tab.Pane>
                        <Tab.Pane eventKey="profile"><Profile setKey={setKey} carbsGoal={goals.carbsGoal} proteinGoal={goals.proteinGoal} fatsGoal={goals.fatsGoal} totalCalories={goals.totalCalories} setGoals={setGoals}/></Tab.Pane>
                        <Tab.Pane eventKey="logFood"><LogFood setFood={setFood} food={food} setMacros={setMacros} macros={macros}/></Tab.Pane>
                        <Tab.Pane eventKey="myMeals"><MyMeals food={food} removeItem={handleRemoveItem}/></Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>

        </div>
    </Tab.Container>
    </>

  )

}


export default Dashboard