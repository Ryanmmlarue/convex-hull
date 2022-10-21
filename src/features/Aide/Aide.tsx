import './Aide.css'
import { Stage, Layer, Rect, Circle, Line } from 'react-konva';
import { useEffect, useRef, useState } from 'react';
import { Point } from '../../utils/types/DataTypes';
import quickHull from '../../utils/model/QuickHull';
import Pseudocode from './Pseudocode/Pseudocode';
import { EventType, HullEvent } from '../../utils/types/Event';

// TODO: reverse order
// TODO: horse-shoe shape breaks 
// TODO: reset button not working

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
    if (eventIndex === -1) {
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
    }
  }

  const updateLines = (startPoints: Point[], endPoints: Point[], removeA?: Point, removeB?: Point) => {
    const tempLines = lines.slice()
    for (let i = 0; i < startPoints.length; i++) {
      if (findLineIndex(tempLines, startPoints[i], endPoints[i]) == -1) {
        tempLines.push(<Line points={[startPoints[i].x, startPoints[i].y, endPoints[i].x, endPoints[i].y]} stroke={'green'}/>)
      }
      
    }


    // this does not remove the correct index
    if (removeA && removeB && points.length > 3) {
      const index = findLineIndex(tempLines, removeA, removeB)
      if (index !== -1) {
        tempLines.splice(index, 1)
      }
      
    }

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


  const resetCanvas = () => {
    setLines([])
    const indices = points.map((p, i) => i)
    updateCircleColors(indices, 'black')
    setEventIndex(-1)
  }


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

  const findLineIndex = (lines: any, a: Point, b: Point) => {
    for (let i = 0; i < lines.length; i++) {
      let points = lines[i].props.points
      if (points.indexOf(a.x) !== -1 && points.indexOf(a.y) !== -1 && 
          points.indexOf(b.x) !== -1 && points.indexOf(b.y) !== -1) {
            return i
      }
    }
    return -1
  }


  const animate = (event: HullEvent) => {

    if (event === undefined) return;

    switch(event.eventType) {
      case EventType.FindMinMax:
        // color AB
        updateCircleColors([findPointIndex(event.points![0]), findPointIndex(event.points![1])], 'red')
        break;
      case EventType.DrawLine:
        // draw AB
        updateLines([event.points![0]], [event.points![1]])
        break;
      case EventType.FindC:
        // color C
        updateCircleColors([findPointIndex(event.points![0])], 'red')
        updateLines([event.points![1]], [event.points![2]])
        break;
      case EventType.Divide:
        // draw PC, draw CQ, remove PQ
        updateLines([event.points![0], event.points![1]], [event.points![1], event.points![2]], event.points![0], event.points![2])
        break;
      case EventType.RecurseS2QH:
        updateLines([event.points![0]], [event.points![1]])
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
          onClick = {e => {resetCanvas()}}
          >
            Reset Algorithm
        </button>
        <button 
          type="button" 
          className="btn btn-secondary"
          // disabled={points.length < 3}
          disabled = {true}
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