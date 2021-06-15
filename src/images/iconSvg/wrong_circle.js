import * as React from "react"
import Svg, { Circle, Defs, G, Path } from "react-native-svg"

function WrongCircle(props) {
  return (
    <Svg viewBox="0 0 20.8 20.8" width={props.size} height={props.size} {...props}>
      <Defs></Defs>
      <G id="\uB808\uC774\uC5B4_2" data-name="\uB808\uC774\uC5B4 2">
        <G id="\uB808\uC774\uC5B4_1-2" data-name="\uB808\uC774\uC5B4 1">
          <Circle cx={10.4} cy={10.4} r={10.4} fill="#fee2d3" />
          <Path className="cls-2" d="M6.24 14.56L14.56 6.24" stroke="#f87023"/>
          <Path className="cls-2" d="M6.24 6.24L14.56 14.56" stroke="#f87023"/>
        </G>
      </G>
    </Svg>
  )
}

export default WrongCircle