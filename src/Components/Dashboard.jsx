import React from 'react'
import { Container, Row, Col, Tab, Nav, Image, Button} from 'react-bootstrap'
import { useState } from 'react'
import "../css/Dashboard.scss"
import Home from "./Dashboard/Home.jsx"
import Profile from './Dashboard/Profile.jsx'
import LogFood from './Dashboard/LogFood.jsx'
import MyMeals from './Dashboard/MyMeals.jsx'
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [key, setKey] = useState("home");
  const navigate = useNavigate();
  const [user, setUser] = useState("User");

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
    // Removes the index item from the array by setting it to the items before and after while leaving out index i
    const newFoodArray = [...food.slice(0, i), ...food.slice(i + 1)];
  
    // Update food state
    setFood(newFoodArray);
  
    // Calculate new macros
    const newMacros = newFoodArray.reduce((acc, item) => {
      acc.carbs += item.carbs;
      acc.protein += item.protein;
      acc.fats += item.fats;
      acc.total += item.total;
      return acc;
    }, { carbs: 0, protein: 0, fats: 0, total: 0 });
  
    // Update macros state
    setMacros(newMacros);
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
                        <p>{user}</p>
                    
                        <Button style={{marginLeft: "1em"}} variant='danger' size='sm' onClick={()=>navigate('/')}> LogOut</Button>
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
                        <Tab.Pane eventKey="profile"><Profile setKey={setKey} goals={goals} setGoals={setGoals}/></Tab.Pane>
                        <Tab.Pane eventKey="logFood"><LogFood setFood={setFood} food={food} setMacros={setMacros} macros={macros}/></Tab.Pane>
                        <Tab.Pane eventKey="myMeals"><MyMeals food={food} removeItem={handleRemoveItem} macros={macros}/></Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>

        </div>
    </Tab.Container>
    </>

  )

}


export default Dashboard