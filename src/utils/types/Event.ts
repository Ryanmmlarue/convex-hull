import { Point } from "./DataTypes";

export enum EventType{
  MinMax,
  LineToHull,
  TestingPoint
}

export type HullEvent = {
  eventType: EventType
  pointA: Point;
  pointB: Point;
  testPoint?: Point;
}
