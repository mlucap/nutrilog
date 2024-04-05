import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const LogFood = () => {
  // let url =
  //   "https://api.nal.usda.gov/fdc/v1/foods/search?api_key=" +
  //   process.env.REACT_APP_API_KEY +
  //   "&query=";

  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const [found, setFound] = useState(false);
  
  
  
  const fetchData = () => {
    
    
     axios.get('https://trackapi.nutritionix.com/v2/search/instant/?query=' + query,{
        'method': 'GET',
        
        'headers': {
          'Content-Type': 'application/json',
          'x-app-id': '968bd7eb',
          'x-app-key': 'e2915e803dda31e9b9fd9b18eb8c57f8'
        }
      })

      .then((response) => {
        if (response.data !== undefined) {
          setData(response.data);
          setFound(true);
        }
        console.log(response.data);
      })
      .catch((err) => {
        console.log(`error: ${err}`);
      });
  };

  useEffect(() => fetchData(), [query]);
  

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(e.target.elements[0].value);
          console.log(e.target.elements[0].value);
        }}
      >
        <Form.Group>
          <Form.Label>Search Food</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button type="submit" variant="dark">
          search
        </Button>
      </Form>

      {found ? <p>{data.food_name}</p> : <p>No result</p>}
    </div>
  );
};

export default LogFood;
