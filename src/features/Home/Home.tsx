import { Card } from "react-bootstrap";
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
          TODO
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="card">
      <Card.Body>
        <Card.Title>Pseudo-Code</Card.Title> 
        <Card.Text>
          TODO
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
          TODO
        </Card.Text>
      </Card.Body>
    </Card>
  
  </>
)

}

export default Home;