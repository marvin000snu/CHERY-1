import * as React from "react"
import Svg, { Defs, G, Circle } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function IconStand(props) {
  
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 71.75 71.75"
      {...props}
    >
      <Defs></Defs>
      <G filter="url(#prefix__a)">
        <G data-name="Ellipse 2064" fill="#fff" stroke="#dbdcdc">
          <Circle cx={35.5} cy={35.5} r={35.5} stroke="none" />
          <Circle cx={35.5} cy={35.5} r={35.5} fill="none" />
        </G>
      </G>
    </Svg>
  )
}

export default IconStand
