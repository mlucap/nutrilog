import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const Profile = ({ goals, setGoals, setKey }) => {
  const [error, setError] = useState(false); // State for tracking the error condition

  // Function to calculate the total percentage of macros and check for errors
  const checkTotalPercentage = (newGoals) => {
    const totalPercentage = parseFloat(newGoals.carbsGoal || 0) + parseFloat(newGoals.proteinGoal || 0) + parseFloat(newGoals.fatsGoal || 0);
    setError(totalPercentage > 100); // Set error if total exceeds 100%
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Prevents entering a negative value
    const newValue = value < 0 ? '0' : value;
    const newGoals = { ...goals, [name]: newValue };
    setGoals(newGoals);
    checkTotalPercentage(newGoals); // Check total percentage whenever a goal changes
  };

  return (
    <div className="color-overlay d-flex justify-content-center align-items-center">
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group>
          <Form.Label>Daily Calorie Goal</Form.Label>
          <Form.Control
            name="totalCalories"
            type="number"
            value={goals.totalCalories}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>% of calories from Carbohydrates</Form.Label>
          <Form.Control
            name="carbsGoal"
            type="number"
            value={goals.carbsGoal}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>% of calories from Protein</Form.Label>
          <Form.Control
            name="proteinGoal"
            type="number"
            value={goals.proteinGoal}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>% of calories from Fats</Form.Label>
          <Form.Control
            name="fatsGoal"
            type="number"
            value={goals.fatsGoal}
            onChange={handleChange}
          />
        </Form.Group>
        {error && <Alert variant="danger">The total percentage of carbs, protein, and fats cannot exceed 100%.</Alert>} {/* Error message */}
        <br />
        <Button
          variant="primary"
          onClick={() => !error && setKey("home")}
          disabled={error} 
        >
          Save Goals
        </Button>
      </Form>
    </div>
  );
};

export default Profile;
