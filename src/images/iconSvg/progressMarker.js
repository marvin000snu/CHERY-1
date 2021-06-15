import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ProgressMarker(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      style={{
        flex: 1
      }}
      viewBox="0 0 10.78 8.44"
      {...props}
    >
      <Path d="M10.78 0L5.39 8.44 0 0z" stroke="#000" fill="#00f" />
    </Svg>
  )
}

export default ProgressMarker
