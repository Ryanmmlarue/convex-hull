import { useRecoilState } from "recoil";
import EventQueueAtom from "../../../utils/atoms/EventQueue";
import { distanceToC, getMinMaxIncides, isCLeft } from "../../../utils/helpers/QuickHullHelpers";
import { Point, Line } from "../../../utils/types/DataTypes";
import { EventType, HullEvent } from "../../../utils/types/Event";

interface QuickhullProps {
  points: Point[]
}

const Quickhull = (props: QuickhullProps) => {

  const [,setEventQueue] = useRecoilState(EventQueueAtom)
  const eventQueue: HullEvent[] = [] 


  let hull: Set<Line> = new Set();

  const findHull = (points: Point[], leftMost: Point, rightMost: Point, direction: number) => {
    let maxIndex = -1;
    let maxDistance = 0;

    // console.log("Looking for maximum point to the " + (direction < 0 ? "left of" : "right of "), leftMost, rightMost)

    points.forEach((p, index) => {
      if (p !== leftMost && p !== rightMost) {
        if (isCLeft(leftMost, rightMost, p) === direction) {
          // console.log("\tChecking ", p, "against", leftMost, rightMost)
          const distance = distanceToC(leftMost, rightMost, p)
          if (distance > maxDistance) {
            maxIndex = index
            maxDistance = distance
          }
        } 
      }
    })

    if (maxIndex === -1) {
      eventQueue.push({eventType: EventType.LineToHull, pointA: leftMost, pointB: rightMost})
      hull.add({start: leftMost, end: rightMost})
      return;
    } 

    findHull(points, points[maxIndex], leftMost, -isCLeft(points[maxIndex], leftMost, rightMost))

    findHull(points, points[maxIndex], rightMost, -isCLeft(points[maxIndex], rightMost, leftMost))

  } 
    
  const driver = (points: Point[]) => {

    // convex hull not possible with less than three points in the plane
    if (points.length < 3) {
      return;
    }

    // find the left and rightmost points in the plane
    const {minIndex, maxIndex} = getMinMaxIncides(points)
    eventQueue.push({eventType: EventType.MinMax, pointA: points[minIndex], pointB: points[maxIndex]})
    // console.log("Find Min/Max Indices: ", points[minIndex], points[maxIndex])

    findHull(points, points[minIndex], points[maxIndex], 1);

    findHull(points, points[minIndex], points[maxIndex], -1)

    // console.log(hull)
    console.log(eventQueue)
  }

  driver(props.points)

  return (<></>);
}

export default Quickhull;