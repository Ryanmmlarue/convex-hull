import './Canvas.css'
import { Stage, Layer, Rect, Circle } from 'react-konva';
import { useState } from 'react';
import { Point } from '../../../model/graham-scan';



const Canvas = () => {

  const initialCircles: any = []
  const initialPoints: Point[] = []
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

  const clear = () => {
    setCircles([])
    setPoints([])
  }

  return(
    <>
      <div className='canvas'>
        <Stage width={500} height={500} onMouseDown={placePoint}>
          <Layer>
            {circles}
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
        <button type="button" className="btn btn-secondary">Reset Algorithm</button>
        <button type="button" className="btn btn-secondary">Start Algorithm</button>
      </div>
    </>
  )
}

export default Canvas;