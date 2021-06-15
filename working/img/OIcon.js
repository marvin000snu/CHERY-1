import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function OIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={15}
      viewBox="0 0 15 15"
      {...props}
    >
      <G data-name="Group 9505">
        <Path
          data-name="Path 13418"
          d="M7.5 1.5a6 6 0 11-6 6 6 6 0 016-6z"
          fill="none"
          stroke="#5471ff"
          strokeLinecap="round"
          strokeWidth={3}
        />
      </G>
    </Svg>
  )
}

export default OIcon;