import * as React from "react"
import Svg, { Defs, Rect, G, Circle } from "react-native-svg"

function AlarmButton(props) {
    let activated = (props.activated)? true: false;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={46}
      height={32}
      viewBox="0 0 46 32"
      {...props}
    >
      <Defs></Defs>
      <Rect
        data-name="Rectangle 8795"
        width={40}
        height={20}
        rx={10}
        transform="translate(0 3)"
        fill={ (activated)? "#5471ff": "#E2E4E8"}
      />
      <G filter="url(#prefix__a)">
        <Circle
          data-name="Ellipse 2066"
          cx={7}
          cy={7}
          r={7}
          transform={ (activated)? "translate(23 6)": "translate(3 6)"}
          fill={ (activated)? "#E2E4E8" : "#979CA7"}
        />
      </G>
    </Svg>
  )
}

export default AlarmButton


