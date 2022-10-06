import { useRecoilState } from "recoil";
import EventQueueAtom from "../../../utils/atoms/EventQueue";
import { distanceToC, getMinMaxIncides, isCLeft } from "../../../utils/helpers/QuickHullHelpers";
import { Point, Line } from "../../../utils/types/DataTypes";
import { EventType, HullEvent } from "../../../utils/types/Event";

interface QuickhullProps {
  points: Point[]
}

const Quickhull = (props: QuickhullProps) => {

  const eventQueue: HullEvent[] = [] 

  let hull: Set<Point> = new Set();

  const findHull = (Sk: Point[], P: Point, Q: Point) => {

    if (Sk.length === 0) {
      return;
    }

    let C: Point = {x: 0, y: 0};
    let maxDistance = 0;

    Sk.forEach((point) => {
      if (point !== P && point !== Q) {
        const distance = distanceToC(P, Q, point)
        if (distance > maxDistance) {
          C = point
          maxDistance = distance
        }
      }
    })

    hull.add(C)
    
    const s1: Point[] = []
    const s2: Point[] = []

    Sk.forEach((point) => {
      if (point !== P && point !==Q && point !== C) {
        if (isCLeft(P, C, point) === 1) {
          s1.push(point)
        }

        if (isCLeft(C, Q, point) === 1) {
          s2.push(point)
        }
      }
    })

    findHull(s1, P, C)
    findHull(s2, C, Q)

  } 
    
  const driver = (points: Point[]) => {

    // convex hull not possible with less than three points in the plane
    if (points.length < 3) {
      return;
    }

    // find the left and rightmost points in the plane
    const {minIndex, maxIndex} = getMinMaxIncides(points)
    hull.add(points[minIndex])
    hull.add(points[maxIndex])

    // divide points into left and right of line
    const s1: Point[] = []
    const s2: Point[] = []
    points.forEach((p) => {
      if (p !== points[minIndex] && p !== points[maxIndex]) {
        if (isCLeft(points[minIndex], points[maxIndex], p) === 1) {
          s1.push(p)
        } else {
          s2.push(p)
        }
      }
    })

    findHull(s1, points[minIndex], points[maxIndex])
    findHull(s2, points[maxIndex], points[minIndex])

    console.log(hull)
  }

  driver(props.points)

  return (<></>);
}

export default Quickhull;