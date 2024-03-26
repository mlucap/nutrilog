import {useState} from 'react'
import { Form,Button, FormControl } from 'react-bootstrap'

function Registration() {
  return (
    <div>
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Username</Form.Label>
          <FormControl />
        </Form.Group>

      </Form>

    </div>
  )
}

export default Registration