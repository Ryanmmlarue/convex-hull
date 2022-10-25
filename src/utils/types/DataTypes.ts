/**
 * Defines the components for a Point object, composed of two integers x and y.
 */
export interface Point {
    x: number,
    y: number
}

/**
 * Defines the components for a Line object, composed of two Points.
 */
export interface Line {
    start: Point
    end: Point
}