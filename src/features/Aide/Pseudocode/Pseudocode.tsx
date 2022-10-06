import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import quickHull from '../../../utils/model/QuickHull';
import { EventType, HullEvent } from '../../../utils/types/Event';
import './Pseudocode.css'

interface PseudocodeProps {
  eventQueue: any
  delay: number
}

const Pseudocode = (props: PseudocodeProps) => {


  useEffect(() => {
    // props.eventQueue.forEach((e: HullEvent, i: number) => {
    //   const line = document.getElementById(e.eventType.toString())!
    //   const originalBackground = window.getComputedStyle(line).backgroundColor
    //   console.log(line.style)
    //   console.log(originalBackground)
    //   setTimeout(() => {
        
    //     line.style.backgroundColor = "#add8e6"

    //   }, i * props.delay)

    //   line.style.backgroundColor = originalBackground
    //   console.log('here')


    // })


    

    



  })
  
  


  return (
    <table>
      <tbody>
        <tr>
          <td 
          style={{backgroundColor: "#D2D2D2"}}
          >
            <b>QuickHull(S):</b>
          </td>
        </tr>
        <tr>
          <td 
          id={EventType.FindMinMax.toString()} 
          className="indent"
          style={{backgroundColor: "#F2F2F2"}}
          >
            Find left and right most points A and B
          </td>
        </tr>
        <tr>
          <td 
          id={EventType.DrawLine.toString()} 
          className="indent" 
          style={{backgroundColor: "#D2D2D2"}}
          >
            Draw segment AB, divide remaining points into S1 and S2 where S1 contains points on the right of AB and S2 contains those on the left
          </td>
        </tr>
        <tr>
          <td 
          id={EventType.RecurseS1QH.toString()} 
          className="indent"
          style={{backgroundColor: "#F2F2F2"}}
          >
            FindHull(S1, A, B)
          </td>
        </tr>
        <tr>
          <td 
          id={EventType.RecurseS2QH.toString()}
          className="indent"
          style={{backgroundColor: "#D2D2D2"}}
          >
            FindHull(S2, A, B)
          </td>
        </tr>
        <tr>
          <td
          style={{backgroundColor: "#F2F2F2"}}
          >
            <b>FindHull(Sk, P, Q):</b>
          </td>
        </tr>
        <tr>
          <td 
          id={EventType.NoPointReturn.toString()} 
          className="indent"
          style={{backgroundColor: "#D2D2D2"}}
          >
            If Sk has no point, return
          </td>
        </tr>
        <tr>
          <td 
          id={EventType.FindC.toString()} 
          className="indent"
          style={{backgroundColor: "#F2F2F2"}}
          >
            Find furthest point, C, from the segment PQ and add to hull
          </td>
        </tr>
        <tr>
          <td 
          id={EventType.Divide.toString()} 
          className="indent"
          style={{backgroundColor: "#D2D2D2"}}
          >
            Divide points into S1 and S2, where S1 contains the points to the right of segment PC, and S2 contains the points to the right of segment CQ
          </td>
        </tr>
        <tr>
          <td 
          id={EventType.RecurseS1FH.toString()} 
          className="indent"
          style={{backgroundColor: "#F2F2F2"}}
          >
            FindHull(S1, P, C)
          </td>
        </tr>
        <tr>
          <td 
          id={EventType.RecurseS2FH.toString()} 
          className="indent"
          style={{backgroundColor: "#D2D2D2"}}
          >
            FindHull(S2, C, Q)
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Pseudocode;