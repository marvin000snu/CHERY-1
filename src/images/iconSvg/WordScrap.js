import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function WordScrap(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 22.457 21.167" {...props}>
      <Path
        data-name="\uD328\uC2A4 14368"
        d="M1 17.999v-17h13.621v17l-6.7-4.913z"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default WordScrap
