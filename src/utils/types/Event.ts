import { Point } from "./DataTypes";

export enum EventType{
  FindMinMax,
  DrawLine,
  RecurseS1QH,
  RecurseS2QH,
  NoPointReturn,
  FindC,
  Divide,
  RecurseS1FH,
  RecurseS2FH
}

export type HullEvent = {
  eventType: EventType
}
