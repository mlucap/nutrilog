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
    axios.get('https://trackapi.nutritionix.com/v2/natural/nutrients', {
      "query": query
    }, {
      headers: {
        'Content-Type': 'application/json',
        'x-app-id': '968bd7eb',
        'x-app-key': 'e8369dfb80102c698fb218bc806b46c5'
        
      }
    })
      .then((response) => {
        if (response.data !== undefined) {
          setData(response.data);
          setFound(true);
        }
        console.log(response.data);
      })
      .catch((err) => 
        console.log(`error: ${err}`)
      );
  };

  useEffect(() => fetchData(), [query]);

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(e.target.elements.query.value);
          console.log(e.target.elements.query.value);
        }}
      >
        <Form.Group>
          <Form.Label>Search Food</Form.Label>
          <Form.Control type="text" name="query" />
        </Form.Group>
        <Button type="submit" variant="dark">
          Search
        </Button>
      </Form>

      
      {found ? <p>{data.branded[0].nf_calories}</p> : <p>No result</p>}
    </div>
  );
};

export default LogFood;