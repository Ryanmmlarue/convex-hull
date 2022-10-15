


import { Point } from "../types/DataTypes";

// zero = c is collinear
// negative = c to left
// positive = c to right
export const isCLeft = (a: Point, b: Point, c: Point) => {
  const cross = ((c.x - a.x) * (b.y - a.y)) - ((c.y - a.y) * (b.x - a.x))
  return cross < 0 ? -1 : cross > 0 ? 1 : 0;
} 

// return absolute value of cross product (equivelant to magnitude of vector)
export const distanceToC = (a: Point, b: Point, c: Point) => {
  return Math.abs(((c.x - a.x) * (b.y - a.y)) - ((c.y - a.y) * (b.x - a.x)))
}

// return the left and rightmost points in the plane
export const getMinMaxIndices = (points: Point[]) => {
  let minIndex = 0;
  let maxIndex = 0;
  points.forEach((p, index) => {
    //TODO: add check for y
    if (p.x > points[maxIndex].x) {
      maxIndex = index
    }
    if (p.x < points[minIndex].x) {
      minIndex = index
    }
  })

  return {minIndex, maxIndex}
}