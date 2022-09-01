import { Card } from "react-bootstrap";
import Timeline from "./Timeline/Timeline"
import "./Home.css"


const Home = () => {

return (
  <>
  
    <Card className="card">
      <Card.Header>Team</Card.Header>
      <Card.Body>
        <Card.Text>
          Ryan LaRue
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="card">
      <Card.Header>Description</Card.Header>
      <Card.Body>
        <Card.Text>
          This is a pedagogical aide that demonstrates the Graham's Scan algorithm for finding a Convex Hull.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="card">
      <Card.Header>Background Information</Card.Header>
      <Card.Body>
        <Card.Text>
          TODO
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="card">
      <Card.Header>Assumptions</Card.Header>
      <Card.Body>
        <Card.Text>
          TODO
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="card">
      <Card.Header>Pseudo-Code</Card.Header>
      <Card.Body>
        <Card.Text>
          TODO
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="card">
      <Card.Header>Design Choices</Card.Header>
      <Card.Body>
        <Card.Text>
          TODO
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="card">
      <Card.Header>References</Card.Header>
      <Card.Body>
        <Card.Text>
          TODO
        </Card.Text>
      </Card.Body>
    </Card>
  
  </>
)

}

export default Home;