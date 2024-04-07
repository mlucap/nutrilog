import "../../css/Dashboard/Home.scss";
import { Image, Button} from "react-bootstrap";

const Home = (props) => {
  // get new date object
  const date = new Date();
  // get day in Intl format
  const day = new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(date);
  // get month in Intl format
  const month = new Intl.DateTimeFormat("en-US", {month: "long"}).format(date);
  console.log(props.carbsGoal);
    return (
      <>
        <div id="dashboardHomeContainer">

          <div id="dashboardWelcomeGrid">
            <div id="dashboardHomeWelcome">
              <p>Hello User</p>
              <h1>Welcome to your Dashboard</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci delectus deserunt accusamus inventore dolor expedita.</p>
            </div>
            <div id="dashboardHomeDay">
              <p>{day}, {month}</p>
              <h1>{date.getDay()}</h1>
              <h3>{date.getFullYear()}</h3>
            </div>
          </div>

          <div id="dashboardHomeMacros">
            <div className="macro">
              <h1>{props.carbs}/{props.carbsGoal}g</h1>
              <h1>Carbs</h1>
            </div>
            <div className="macro">
              <h1>{props.protein}/{props.proteinGoal}g</h1>

              <h1>Protein</h1>
            </div>
            <div className="macro">
              <h1>{props.fats}/{props.fatsGoal}g</h1>
              <h1>Fats</h1>
              
            </div>
            <div className="macro">
              
              <h1>{props.totalMacroGoals}/{props.currentMacroTotals}g</h1>
              <h1>Goal</h1>
            </div>
          </div>

          <div id="dashboardHomeButtons">
              <Button onClick={() => {props.setKey("logFood")}}>Add New Food</Button>
              <Button onClick={() => {props.setKey("myMeals")}}>My Meals</Button>
          </div>
        </div>
      </>
    )
}

export default Home;