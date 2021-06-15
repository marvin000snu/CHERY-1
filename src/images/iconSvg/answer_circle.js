import * as React from "react"
import Svg, { G, Circle } from "react-native-svg"

function AnswerCircle(props) {
  return (
    <Svg viewBox="0 0 20.8 20.8" width={props.size} height={props.size} {...props}>
      <G id="\uB808\uC774\uC5B4_2" data-name="\uB808\uC774\uC5B4 2">
        <G id="\uB808\uC774\uC5B4_1-2" data-name="\uB808\uC774\uC5B4 1">
          <Circle cx={10.4} cy={10.4} r={10.4} fill="#daedff" />
          <Circle
            cx={10.4}
            cy={10.4}
            r={5.12}
            fill="none"
            stroke="#48a3ff"
            strokeMiterlimit={10}
          />
        </G>
      </G>
    </Svg>
  )
}

export default AnswerCircle
