import { Point } from "./DataTypes";

export enum EventType{
  FindMinMax,
  LineToHull,
  TestingPoint
}

export type HullEvent = {
  eventType: EventType
  pointA: Point;
  pointB: Point;
}
