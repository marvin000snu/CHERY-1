import * as React from "react"
import Svg, { Path } from "react-native-svg"

function NextBracket(props) {
    const color  = props.color? props.color : "#000"
  return (
    <Svg width={18.192} height={18.192} viewBox="0 0 18.192 18.192" {...props}>
      <Path
        data-name="Path 14915"
        d="M8.389.707l8.39 8.39-8.39 8.388"
        fill="none"
        stroke="#fff"
        stroke={color}
        strokeWidth={2.0}
      />
    </Svg>
  )
}

export default NextBracket

