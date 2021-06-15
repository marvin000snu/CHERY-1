import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function PrevIcon(props) {
  const {width, height, color} = props
  return (
    <Svg width={width} height={height} viewBox="0 0 20.421 26" {...props}>
      <G
        data-name="Chevron Selected"
        transform="translate(-.377 .485)"
        fill="none"
      >
        <Path transform="translate(.377 -.485)" d="M0 0H14V26H0z" />
        <Path
          data-name="\uD328\uC2A4 5431"
          d="M11.807 21.706l-8.99-8.99 8.99-8.992"
          stroke={color}
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  )
}

export default PrevIcon
