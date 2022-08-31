export interface Point {
    x: number,
    y: number
}

// pseudo-code from: https://www.tutorialspoint.com/Graham-Scan-Algorithm
// explanation from: https://iq.opengenus.org/graham-scan-convex-hull/

const findMinimumIndex= (points: Point[]): number => {
    let min = points[0]
    let minIndex = 0
    points.forEach((p: Point, index: number) => {
        if (p.y < min.y || (p.y == min.y && p.x < min.x)) {
            min = p
            minIndex = index
        }
    })
    return minIndex;
}

const swap = (points: Point[], indexOne: number, indexTwo: number) => {
    const temp = points[indexOne]
    points[indexOne] = points[indexTwo]
    points[indexTwo] = temp
    return points;
}

const sort = (points: Point[]) => {

}

export const grahamScan = (points: Point[]) => {
    
    // find minimum index in set of points
    let minIndex: number = findMinimumIndex(points)
    
    // swap the first point in set with min index
    swap(points, 0, minIndex)

    // store first point in array
    let firstPoint = points[0]

    // sort points(exlcuding first point)
    let [, ...tail] = points;



    console.log(points)

}