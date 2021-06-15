import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TablePositive(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 16 16" {...props}>
      <Path
        data-name="\uD328\uC2A4 13418"
        d="M8 1.5A6.5 6.5 0 111.5 8 6.5 6.5 0 018 1.5z"
        fill="none"
        stroke="#3455ff"
        strokeLinecap="round"
        strokeWidth={3}
      />
    </Svg>
  )
}

export default TablePositive
