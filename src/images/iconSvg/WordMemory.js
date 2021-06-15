import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

function WordMemory(props) {
  return (
    <Svg width={props.size} height={props.size*1.3} viewBox="0 0 18.671 22.504" {...props}>
      <G
        data-name="\uADF8\uB8F9 10377"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path
          data-name="\uD328\uC2A4 13395"
          d="M239.035 129.571v5.185h-15.513v-15.514h4.882"
          transform="translate(-222.521 -118.243)"
        />
        <Path
          data-name="\uD328\uC2A4 14369"
          d="M228.798 123.636l4.121 4.121 7.481-7.481"
          strokeMiterlimit={10}
          transform="translate(-222.521 -118.243)"
        />
      </G>
    </Svg>
  )
}

export default WordMemory
