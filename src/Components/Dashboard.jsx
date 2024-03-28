import React from 'react'
import { Container, Row, Col, Tab, Nav, Image} from 'react-bootstrap'
import "../css/Dashboard.scss"

function Home() {
    return (
        <h1>test</h1>
    )
}
function Dashboard() {
  return (
    <>
    <Tab.Container defaultActiveKey="home">
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
                            <Nav.Link  eventKey="home">Home</Nav.Link>
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
                        <Tab.Pane eventKey="home"><Home/></Tab.Pane>
                        <Tab.Pane eventKey="profile">Profile Content</Tab.Pane>
                        <Tab.Pane eventKey="logFood">Log Food</Tab.Pane>
                        <Tab.Pane eventKey="myMeals">My Meals</Tab.Pane>

                    </Tab.Content>
                </Col>
            </Row>

        </div>
    </Tab.Container>
    </>

  )
}

export default Dashboard