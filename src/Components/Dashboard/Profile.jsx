import { useState } from "react";
import { Form, Button } from "react-bootstrap";


const Profile = (props) => {
    

const sumTotalCalories = props.carbsGoal + props.proteinGoal + props.fatsGoal;


const handleChange = (event) => {
  const { name, value } = event.target;
  props.setGoals((prev) => ({
    ...prev,
    [name]: value,
  }));
};
    
   




  return (
    <div className="color-overlay d-flex justify-content-center align-items-center">
      <Form onSubmit={(e)=>e.preventDefault()}>
        <Form.Group>
          <Form.Label>Daily Calorie Goal</Form.Label>
          <Form.Control id="Calorie Goal" name="totalCalories" type="number"  value={props.totalCalories} onChange={handleChange}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>% of calories from Carbohydrates</Form.Label>
          <Form.Control id="Carbs Goal" name="carbsGoal" type="number"  value={props.carbsGoal} onChange={handleChange}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>% of calories from Protein</Form.Label>
          <Form.Control id="Protein Goal" name="proteinGoal" type="number" value={props.proteinGoal} onChange={handleChange}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>% of calories from Fats</Form.Label>
          <Form.Control id="Fats Goal" name="fatsGoal" type="number" value={props.fatsGoal} onChange={handleChange}/>
        </Form.Group>
        <br></br>
        <Button >Save Goal</Button>
      </Form>
    </div>
  );
};

export default Profile;
