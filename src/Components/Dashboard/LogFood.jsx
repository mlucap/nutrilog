import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Form, Button, ListGroup, Image, Badge, Alert } from "react-bootstrap";
import "../../css/Dashboard/LogFood.scss"

const LogFood = (props) => {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const [itemId, setItemId] = useState("");
  const [found, setFound] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  
  // used to stop rendering on component mount
  const firstRender = useRef(true);
  // returns information used in the search bar
  const instantSearch = () => {
    if(firstRender.current) {
      firstRender.current = false;
      return
    }
    axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query=${query}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-app-id': "1501c75a",
        'x-app-key': "1c78fcb499185d93e02263ec15210947"
      }
    })
      .then(response => {
        if(response.data !== undefined) {
          setData(response.data)
          setFound(true)
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
  }, [query])

  // used to stop rendering on component mount
  const firstClick = useRef(true);
  // used to get information that goes into the food array
  const nutrientSearch = () => {
    if(firstClick.current) {
      firstClick.current = false;
      return
    }

    axios.get(`https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${itemId}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-app-id': "1501c75a",
        'x-app-key': "1c78fcb499185d93e02263ec15210947"
      }
    })
    .then(response => {
      if(response.data !== undefined) {
        console.log(response.data)
        const name = response.data.foods[0].food_name;
        const calories = response.data.foods[0].nf_calories;
        const carbs = response.data.foods[0].nf_total_carbohydrate;
        const protein = response.data.foods[0].nf_protein;
        const fats = response.data.foods[0].nf_total_fat;
        props.setFood((prev) => [
          ...prev,
          {
            name: name,
            total: calories,
            carbs: carbs,
            protein: protein,
            fats: fats
          }
        ]);
        alert();
      }
    })
  }

  useEffect(() => {
    if(query.length <= 3) return;
    nutrientSearch()
  }, [itemId])

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

    
    // show a message of success in adding the food item for 1s (1000ms)
    alert();

    // reset the values in the form
    for (let index = 0; index < event.target.elements.length; index++) {
      event.target[index].value = ""
    }
  }
  
  // function to show and hide the success alert
  const alert = () => {
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
      <Form onSubmit={(e) => {
        e.preventDefault()
        e.target[0].value = ""
        setFound(false)
        }}>
        <Form.Group>
          <Form.Label>Search Food</Form.Label>
          <Form.Control onChange={(e) => setQuery(e.target.value)} type="text" name="query" />
          {
            found ? 
              <ListGroup id="foodSearchResultContainer">
                {data?.branded.map((item, i) => {
                  return (
                    <>
                      <ListGroup.Item key={i} action onClick={() => {setItemId(item.nix_item_id)}} >
                      <Image style={{
                        width: "10vh",
                        height: "10vh"
                      }} src={item.photo?.thumb} roundedCircle/>
                        
                        <h4>{item.brand_name_item_name}</h4>
                        <p>{item.food_name}</p>
                        <Badge bg="info">{item.brand_name}</Badge>
                        <Badge bg="info" style={{marginLeft: "1vh"}}>{item.nf_calories} Calories</Badge>
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