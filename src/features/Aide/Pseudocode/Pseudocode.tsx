import { Table } from "react-bootstrap";
import './Pseudocode.css'

const Pseudocode = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td>QuickHull(S):</td>
        </tr>
        <tr>
          <td className="indent">Find left and right most points A and B</td>
        </tr>
        <tr>
          <td className="indent">
            Draw segment AB, divide remaining points into S1 and S2 where S1 contains points on the right of AB and S1 contains those on the left
          </td>
        </tr>
        <tr>
          <td className="indent">
            FindHull(S1, A, B)
          </td>
        </tr>
        <tr>
          <td className="indent">
            FindHull(S2, A, B)
          </td>
        </tr>
        <tr>
          <td>FindHull(Sk, P, Q):</td>
        </tr>
        <tr>
          <td>Find the farthest point, C, from the segment PQ</td>
        </tr>
        <tr>
          <td>If C does not exist, add the segment PQ to the convex hull and return</td>
        </tr>
        <tr>
          <td>FindHull()</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Pseudocode;