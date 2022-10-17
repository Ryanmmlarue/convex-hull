import './Aide.css'
import { Stage, Layer, Rect, Circle, Line } from 'react-konva';
import { useEffect, useRef, useState } from 'react';
import { Point } from '../../utils/types/DataTypes';
import quickHull from '../../utils/model/QuickHull';
import Pseudocode from './Pseudocode/Pseudocode';
import { EventType, HullEvent } from '../../utils/types/Event';


const Aide = () => {

  const initialCircles: any = []
  const initialLines: any = []
  const initialPoints: Point[] = []
  const initialEventQueue: HullEvent[] = []
  const [lines, setLines] = useState(initialLines)
  const [circles, setCircles] = useState(initialCircles)
  const [points, setPoints] = useState(initialPoints)
  const [eventQueue, setEventQueue] = useState(initialEventQueue)
  const [eventIndex, setEventIndex] = useState(-1)

  const placePoint = (event: any) => {
    const x = event.evt.layerX
    const y = event.evt.layerY

    // add new circle to state
    const tempCircles = circles.slice()
    tempCircles.push(<Circle x={x} y={y} radius={5} fill="black"/>)
    setCircles(tempCircles)

    // add new points to state
    const tempPoints = points.slice()
    tempPoints.push({x, y})
    setPoints(tempPoints)

    setEventIndex(-1)
  }

  const placeLine = (a: Point, b: Point, color: string) => {
    const tempLines = lines.slice()
    tempLines.push(<Line points={[a.x, a.y, b.x, b.y]} stroke={color}/>)
    setLines(tempLines)
  }

  const updateCircleColors = (indices: number[], color: string) => {
    let tempCircles = circles.slice()

    indices.forEach(i => {
      let circle = tempCircles[i]
      tempCircles[i] = <Circle x={circle.props.x} y={circle.props.y} radius={circle.props.radius} fill={color}/>
    })

    setCircles(tempCircles)
  }

  //TODO: removeLine, removePoint

  const clear = () => {
    setCircles([])
    setPoints([])
    setLines([])
    setEventIndex(-1)
  }

  const nextStep = () => {
    if ((eventIndex + 1) < eventQueue.length) {
      setEventIndex(eventIndex + 1)
      // animate(eventQueue[eventIndex])
    }
  }

  const previousStep = () => {
    if ((eventIndex - 1) >= 0) {
      setEventIndex(eventIndex - 1)
      // animate(eventQueue[eventIndex])
    }
  }

  const findPointIndex = (point: Point) => {
    return points.indexOf(point)
  }



  const animate = (event: HullEvent) => {

    if (event === undefined) return;

    switch(event.eventType) {
      case EventType.FindMinMax:
        updateCircleColors([findPointIndex(event.points![0]), findPointIndex(event.points![1])], 'red')
        break;
      case EventType.DrawLine:
        placeLine(event.points![0], event.points![1], 'green')
        break;
      case EventType.FindC:
        updateCircleColors([findPointIndex(event.points![0])], 'red')
        break;
    }
  }


  // runs the quickHull algorithm any time a new point is added to the plane
  useEffect(() => {
    if (points.length >= 3) {
      const data = quickHull(points)
      setEventQueue(data!.eventQueue)
    }
  }, [points])

  useEffect(() => {
    animate(eventQueue[eventIndex])
  }, [eventIndex])

  return(
    <>
    <div className="aide-container">
      <div className="left">
      <div className='canvas'>
        <Stage width={750} height={750} onMouseDown={placePoint}>
          <Layer>
            {circles}
            {lines}
          </Layer>
        </Stage>
      </div>
      <div className="btn-group" role="group">
        <button 
          type="button" 
          className="btn btn-secondary"  
          onClick={clear}
          >
            Clear Points
        </button>
        <button 
          type="button" 
          className="btn btn-secondary"
          disabled = {eventIndex < 0}
          onClick = {e => setEventIndex(-1)}
          >
            Reset Algorithm
        </button>
        <button 
          type="button" 
          className="btn btn-secondary"
          disabled={points.length < 3}
          onClick={e => previousStep()}
        >
          Previous Step
        </button>
        <button 
          type="button" 
          className="btn btn-secondary"
          disabled={points.length < 3}
          onClick={e => nextStep()}
        >
          Next Step
        </button>
      </div>
      </div>
      <div className="right">
        <Pseudocode event={eventQueue[eventIndex]}/>
    </div>
    </div>
    </>
  )
}

export default Aide;