import React from 'react'
import { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'

function MyMeals(props) {
  const [show, setShow] = useState(false);
  // state holds the item to be deleted
  const [onDeck, setOnDeck] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    {
      // conditionally show food items
      props.food.length > 0? 
      <ol>
        {props.food.map((item, i) => {
          return (
            <Card key={i}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Total Calories: {item.total}</Card.Text>
                <Card.Text>Total Carbs: {item.carbs}</Card.Text>
                <Card.Text>Total Protein: {item.protein}</Card.Text>
                <Card.Text>Total Fats: {item.fats}</Card.Text>
                <Button variant='danger' onClick={() => {
                  handleShow()
                  setOnDeck(i)
                }}>Delete</Button>
              </Card.Body>
            </Card>
          )
        })}
      </ol>
      :
      <Card>
        <Card.Body>
          <Card.Title>No Food Items Found</Card.Title>
        </Card.Body>
      </Card>
    }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => {
            handleClose()
            props.removeItem(onDeck)
            }}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MyMeals