import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function GrayIcon(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 58 58" {...props}>
      <G data-name="\uADF8\uB8F9 7276">
        <Circle
          cx={29}
          cy={29}
          r={29}
          fill="#a4b6d6"
          data-name="\uADF8\uB8F9 4461"
        />
        <Circle
          cx={10.105}
          cy={10.105}
          r={10.105}
          transform="translate(18.724 13.345)"
          fill="#fff"
        />
        <Path
          d="M41.948 39.7A12.671 12.671 0 0124.1 41.411a17.793 17.793 0 01-1.792-1.711c-5.541 2.2-9.208 6.6-9.208 13.527a10.921 10.921 0 00.081 1.63 25.353 25.353 0 0035.693 2.2 28.005 28.005 0 002.2-2.2 10.39 10.39 0 00.081-1.63c.083-6.927-3.666-11.245-9.207-13.527z"
          transform="translate(-3.34 -8.264)"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}

export default GrayIcon
