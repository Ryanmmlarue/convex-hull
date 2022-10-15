import { Point } from "../types/DataTypes";
import { EventType, HullEvent } from "../types/Event";
import { distanceToC, getMinMaxIndices, isCLeft } from "./QuickHullHelpers";


const findHull = (Sk: Point[], P: Point, Q: Point, hull: Point[], eventQueue: HullEvent[]) => {

  if (Sk.length === 0) {
    eventQueue.push({eventType: EventType.NoPointReturn})
    return;
  }

  eventQueue.push({eventType: EventType.FindC})
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
  hull.push(C)
  
  eventQueue.push({eventType: EventType.Divide})
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

  eventQueue.push({eventType: EventType.RecurseS1FH})
  findHull(s1, P, C, hull, eventQueue)
  eventQueue.push({eventType: EventType.RecurseS2FH})
  findHull(s2, C, Q, hull, eventQueue)

} 
  
const quickHull = (points: Point[]) => {

  const eventQueue: HullEvent[] = [] 

  let hull: Point[] = [];

  // convex hull not possible with less than three points in the plane
  if (points.length < 3) {
    return;
  }

  // find the left and rightmost points in the plane
  const {minIndex, maxIndex} = getMinMaxIndices(points)
  hull.push(points[minIndex])
  hull.push(points[maxIndex])

  eventQueue.push({eventType: EventType.FindMinMax})
  eventQueue.push({eventType: EventType.DrawLine})

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

  eventQueue.push({eventType: EventType.RecurseS1QH})
  findHull(s1, points[minIndex], points[maxIndex], hull, eventQueue)

  eventQueue.push({eventType: EventType.RecurseS2QH})
  findHull(s2, points[maxIndex], points[minIndex], hull, eventQueue)

  return {hull, eventQueue}
}

export default quickHull;
