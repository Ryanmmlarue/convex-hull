import { atom } from "recoil";
import {HullEvent} from "../types/Event";



const defaultEventQueue: HullEvent[] = [] 

const EventQueueAtom = atom({
  key: 'EventQueue',
  default: defaultEventQueue
})

export default EventQueueAtom;