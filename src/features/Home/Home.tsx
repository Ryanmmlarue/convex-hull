import { Card } from "react-bootstrap";
import Pseudocode from "../Aide/Pseudocode/Pseudocode";
import "./Home.css"

/**
 * Defines the Home component which contains various information regarding the 
 * project
 * @returns Returns the HTML components with project information
 */
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
          Convex Hulls have a wide range of applications across various Computer Science domains. There are numerous algorithms for finding such structures with a wide range of time complexities, with one of the more efficient data structures being the Quickhull algorithm, which is analagous to Quicksort. Like quicksort, this algorithm is a divide and conquer algorithm, and has an expected time complexity of O(nlogn), with a worst-case time complexity of O(n<sup>2</sup>).

          <br />
          <br />

          The core idea of the algorithm is to essentially divide the plane by a segment formed by its minimum and maximum endpoints. After this segment is created, the plane is split into subsets of points to the left and right of the segment, and the algoriths then recursively runs on each of these subsets until no more points lie to either side of the dividing segment. 


          <br />
          <br />

          For this project specifically, there were several critical assumptions made when designing the algorithm's implementation:
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
          <Pseudocode />
      </Card.Body>
    </Card>

    <Card className="card">
      <Card.Body>
        <Card.Title>Design Choices</Card.Title>  
        <Card.Text>
          TODO: Discuss any interesting choices that you made in the implementation of the algorithm.
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