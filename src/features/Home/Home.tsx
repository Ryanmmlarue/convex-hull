import { Card } from "react-bootstrap";
import Pseudocode from "../Aide/Pseudocode/Pseudocode";
import "./Home.css"


const Home = () => {

return (
  <>
  
    <Card className="card">
      <Card.Body>
      <Card.Title>Team</Card.Title> 
        <Card.Text>
          Ryan LaRue
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="card">
      <Card.Body>
        <Card.Title>Description</Card.Title> 
        <Card.Text>
          This is a pedagogical aide that demonstrates the Quickhull algorithm for finding a Convex Hull.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="card">
      <Card.Body>
        <Card.Title>Background Information</Card.Title> 
        <Card.Text>
          TODO
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="card">
      <Card.Body>
        <Card.Title>Assumptions</Card.Title> 
        <Card.Text>
          Co-Linear Points between two points are not included in Hull and 
          Three Points must be placed for a valid convex hull algorithm to run
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="card">
      <Card.Body>
        <Card.Title>Pseudo-Code</Card.Title> 
        <Card.Text>
          <Pseudocode />
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="card">
      <Card.Body>
        <Card.Title>Design Choices</Card.Title>  
        <Card.Text>
          TODO
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="card">
      <Card.Body>
      <Card.Title>References</Card.Title>
        <Card.Text>
        Pseudo-code: https://algs4.cs.princeton.edu/99hull/quickhull/Algorithm.html
        </Card.Text>
      </Card.Body>
    </Card>
  
  </>
)

}

export default Home;