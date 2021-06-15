import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Triangle(props) {
  return (
    <Svg width={props.size*2} height={props.size} viewBox="0 0 200 100" {...props}>
      <Path
        data-name="\uB2E4\uAC01\uD615 17"
        d="M100 0l100 100H0z"
        fill="#6881ff"
      />
    </Svg>
  )
}

export default Triangle