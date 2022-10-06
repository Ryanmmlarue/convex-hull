import './Aide.css'
import { Stage, Layer, Rect, Circle, Line } from 'react-konva';
import { useState } from 'react';
import { Point } from '../../utils/types/DataTypes';
import quickHull from '../../utils/model/QuickHull';
import { useRecoilState } from 'recoil';
import EventQueueAtom from '../../utils/atoms/EventQueue';
import Pseudocode from './Pseudocode/Pseudocode';


const Canvas = () => {

  const initialCircles: any = []
  const initialLines: any = []
  const initialPoints: Point[] = []
  const [lines, setLines] = useState(initialLines)
  const [circles, setCircles] = useState(initialCircles)
  const [points, setPoints] = useState(initialPoints)

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
  }

  const placeLine = (a: Point, b: Point) => {
    const tempLines = lines.slice()
    tempLines.push(<Line points={[a.x, a.y, b.x, b.y]} stroke={'black'}/>)
    setLines(tempLines)
  }

  //TODO: removeLine, removePoint

  const clear = () => {
    setCircles([])
    setPoints([])
    setLines([])
  }

  const test = [{x: 10, y: 4}, {x: 7, y: 3}, {x: 8, y: 1}, {x: 6, y: -1}, {x: 9, y: -2}, {x: 11, y: -1}, {x: 12, y: 0}, {x: 15, y: 1}, {x: 14, y: 3}, {x: 13, y: 3}]
  const data = quickHull(test)

  
  return(
    <>
    <div className="aide-container">
      <div className="left">
      <div className='canvas'>
        <Stage width={500} height={500} onMouseDown={placePoint}>
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
          onClick={e => console.log('TODO: rest algo button')}
          >
            Reset Algorithm
        </button>
        <button 
          type="button" 
          className="btn btn-secondary"
          onClick={e => console.log('TODO: start algo button')}
        >
          Start Algorithm
        </button>
      </div>
      </div>
      <div className="right">
        <Pseudocode eventQueue={data!.eventQueue} delay={1000}/>
    </div>
    </div>
    </>
  )
}

export default Canvas;