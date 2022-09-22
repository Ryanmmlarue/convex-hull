import { Dir } from "fs";
import { Point, Line } from "../../../model/datatypes";

interface QuickhullProps {
  points: Point[]
}


const Quickhull = (props: QuickhullProps) => {

  let hull = new Set();

  // negative = c to left
  // positive = c to right
  // zero = c is collinear
  const isCLeft = (a: Point, b: Point, c: Point) => {
    const cross = ((c.x - a.x) * (b.y - a.y)) - ((c.y - a.y) * (b.x - a.x))
    return cross < 0 ? -1 : cross > 0 ? 1 : 0;
  } 

  // return absolute value of cross product (equivelant to magnitude of vector)
  const distanceToC = (a: Point, b: Point, c: Point) => {
    return Math.abs(((c.x - a.x) * (b.y - a.y)) - ((c.y - a.y) * (b.x - a.x)))
  }

  // return the left and rightmost points in the plane
  const getMinMaxIncides = (points: Point[]) => {
    let minIndex = 0;
    let maxIndex = 0;
    points.forEach((p, index) => {
      if (p.x > points[maxIndex].x) {
        maxIndex = index
      }
      if (p.x < points[minIndex].x) {
        minIndex = index
      }
    })

    return {minIndex, maxIndex}
  }

  const recursiveHelper = (points: Point[], leftMost: Point, rightMost: Point, direction: number) => {
    let maxIndex = -1;
    let maxDistance = 0;

    points.forEach((p, index) => {
      const dir = isCLeft(leftMost, rightMost, p)
      const distance = distanceToC(leftMost, rightMost, p)
      if ((dir === direction) && (distance > maxDistance)) {
        maxIndex = index
        maxDistance = distance
      }
    })

    if (maxIndex === -1) {
      hull.add({start: leftMost, end: rightMost})
      return;
    }

    recursiveHelper(points, points[maxIndex], leftMost, -isCLeft(points[maxIndex], leftMost, rightMost))

    recursiveHelper(points, points[maxIndex], rightMost, -isCLeft(points[maxIndex], rightMost, leftMost))

  } 
    
  const driver = (points: Point[]) => {

    // convex hull not possible with less than three points in the plane
    if (points.length < 3) {
      return;
    }

    // find the left and rightmost points in the plane
    const {minIndex, maxIndex} = getMinMaxIncides(points)

    recursiveHelper(points, points[minIndex], points[maxIndex], 1);

    recursiveHelper(points, points[minIndex], points[maxIndex], -1)

    console.log(hull)
  }

  driver(props.points)

  return (<></>);
}

export default Quickhull;