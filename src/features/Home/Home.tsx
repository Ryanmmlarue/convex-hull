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
          TODO: 1-2 paragraphs
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="card">
      <Card.Body>
        <Card.Title>Assumptions</Card.Title> 
        <Card.Text>
          There were several critical assumptions made for this project:
          <ul>
            <li>
              Collinear points between two points are not included in Hull
            </li>
            <li>
              Three Points must be placed for a valid convex hull algorithm to run
            </li>
            <li>
              No two points exist at the exact same coordinates
            </li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="card">
      <Card.Body>
        <Card.Title>Pseudo-Code</Card.Title> 
        <Card.Text>
          <table>
          <tbody>
            <tr>
              <td 
              >
                <b>QuickHull(S):</b>
              </td>
            </tr>
            <tr>
              <td 
              className="indent"
              >
                Find left and right most points A and B, add both to hull
              </td>
            </tr>
            <tr>
              <td 
              className="indent" 
              >
                Draw segment AB, divide remaining points into S1 and S2 where S1 contains points on the right of AB and S2 contains those on the left
              </td>
            </tr>
            <tr>
              <td 
              className="indent"
              >
                FindHull(S1, A, B)
              </td>
            </tr>
            <tr>
              <td 
              className="indent"
              >
                FindHull(S2, A, B)
              </td>
            </tr>
            <tr>
              <td
              >
                <b>FindHull(Sk, P, Q):</b>
              </td>
            </tr>
            <tr>
              <td 
              className="indent"
              >
                If Sk has no point, return
              </td>
            </tr>
            <tr>
              <td 
              className="indent"
              >
                Find furthest point, C, from the segment PQ and add to hull
              </td>
            </tr>
            <tr>
              <td 
              className="indent"
              >
                Divide points into S1 and S2, where S1 contains the points to the right of segment PC, and S2 contains the points to the right of segment CQ
              </td>
            </tr>
            <tr>
              <td 
              className="indent"
              >
                FindHull(S1, P, C)
              </td>
            </tr>
            <tr>
              <td 
              className="indent"
              >
                FindHull(S2, C, Q)
              </td>
            </tr>
            </tbody>
          </table>
          TODO: explain what parts are being animated
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="card">
      <Card.Body>
        <Card.Title>Design Choices</Card.Title>  
        <Card.Text>
          TODO: explain design choices
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="card">
      <Card.Body>
      <Card.Title>References</Card.Title>
        <Card.Text>
          <ul>
            <li>
              <b>Quickhull Paper: </b>
              <a href="https://dpd.cs.princeton.edu/Papers/BarberDobkinHuhdanpaa.pdf">https://dpd.cs.princeton.edu/Papers/BarberDobkinHuhdanpaa.pdf</a>
            </li>
            <li>
              <b>Pseudo-code: </b> 
              <a href="https://algs4.cs.princeton.edu/99hull/quickhull/Algorithm.html">https://algs4.cs.princeton.edu/99hull/quickhull/Algorithm.html</a>
            </li>
            <li>
              <b>TypeScript Documentation: </b>
              <a href="https://www.typescriptlang.org/docs/handbook/intro.html">https://www.typescriptlang.org/docs/handbook/intro.html</a>
            </li>
            <li>
              <b>React Documentation: </b>
              <a href="https://reactjs.org/docs/getting-started.html">https://reactjs.org/docs/getting-started.html</a>
            </li>
            <li>
              <b>Konva Documentation: </b>
              <a href="https://konvajs.org/docs/react/index.html">https://konvajs.org/docs/react/index.html</a>
            </li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  
  </>
)

}

export default Home;