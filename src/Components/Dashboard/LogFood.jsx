import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, ListGroup, Image, Badge } from "react-bootstrap";
import "../../css/Dashboard/LogFood.scss"

const LogFood = () => {
  // let url =
  //   "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=" +
  //   process.env.REACT_APP_API_KEY +
  //   "&query=";

  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const [found, setFound] = useState(false);
  
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
  
  return (
    <div>
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
          <Button variant="success">Add</Button>
        </Form.Group>
      </Form>
      <br />

    </div>
  );
};

export default LogFood;