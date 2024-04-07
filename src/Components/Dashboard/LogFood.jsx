import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, ListGroup, Image, Badge, Alert } from "react-bootstrap";
import "../../css/Dashboard/LogFood.scss"

const LogFood = (props) => {
  // let url =
  //   "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=" +
  //   process.env.REACT_APP_API_KEY +
  //   "&query=";

  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const [found, setFound] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  
  const instantSearch = () => {
    axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query=${query}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-app-id': "968bd7eb",
        'x-app-key': "e8369dfb80102c698fb218bc806b46c5"
      }
    })
      .then(response => {
        if(response.data !== undefined) {
          setData(response.data)
          setFound(true)
          console.log(response.data)
        }
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    if(query.length <= 3) {
      setFound(false)
      return;
    };
    instantSearch();
    setFound(true)
  }, [query, instantSearch])

  // handle custom food form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // getting values from form submit
    const name = event.target[0].value;
    const calories = event.target[1].value; 
    const carbs = event.target[2].value; 
    const protein = event.target[3].value; 
    const fat = event.target[4].value; 

    // takes previous state of array and adds a new object to it.
    props.setFood((prev) => [
      ...prev,
      {
        name: name,
        total: calories,
        carbs: carbs,
        protein: protein,
        fats: fat
      }
    ]);

    const oldCals = props.macros.total;
    const oldCarbs = props.macros.total;
    const oldProtein = props.macros.total;
    const oldFat = props.macros.total;

    props.setMacros({
      total: +oldCals + +calories,
      carbs: +oldCarbs + +carbs,
      protein: +oldProtein + +protein,
      fats: +oldFat + +fat
    })
    console.log(props.macros)

    // show a message of success in adding the food item for 1s (1000ms)
    setShowAlert(true)
    setTimeout(() => {setShowAlert(false)}, 1000)
  }
  
  return (
    <div>
      {
        showAlert ? 
          <Alert variant="success">Added new food item!</Alert>
          :
          <></>
      }
      <Form>
        <Form.Group>
          <Form.Label>Search Food</Form.Label>
          <Form.Control onChange={(e) => setQuery(e.target.value)} type="text" name="query" />
          {
            found ? 
              <ListGroup id="foodSearchResultContainer">
                {data?.branded.map((item, i) => {
                  return (
                    <>
                      <ListGroup.Item>
                      <Image style={{
                        width: "10vh",
                        height: "10vh"
                      }} src={item.photo?.thumb} roundedCircle/>
                        
                        <h4>{item.brand_name_item_name}</h4>
                        <p>{item.food_name}</p>
                        <Badge bg="info">{item.brand_name}</Badge>
                      </ListGroup.Item>
                    </>
                  )
                })}
              </ListGroup>
              : 
                ""
          }
        </Form.Group>
        <br />
      </Form>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Can't find your food? Add it here!</Form.Label>
          <br />
          <Form.Label>Food Name</Form.Label>
          <Form.Control />
          <div id="customMacroContainer">
            <div className="macroChild">
              <Form.Label>Total Calories</Form.Label>
              <Form.Control type="number"/>
            </div>
            <div className="macroChild">
              <Form.Label>Carbs (g)</Form.Label>
              <Form.Control type="number"/>
            </div>
            <div className="macroChild">
              <Form.Label>Protein (g)</Form.Label>
              <Form.Control type="number"/>
            </div>
            <div className="macroChild">
              <Form.Label>Fat (g)</Form.Label>
              <Form.Control type="number"/>
            </div>
          </div>
          <div id="macroGrid">
            <div className="macroChild">
              <Form.Label>Serving Unit</Form.Label>
              <Form.Control />
            </div>
            <div className="macroChild">
              <Form.Label>Amount Per Serving</Form.Label>
              <Form.Control />
            </div>
          </div>
          <br />
          <Button type="submit" variant="success">Add</Button>
        </Form.Group>
      </Form>
      <br />

    </div>
  );
};

export default LogFood;