import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function Warning(props) {
  return (
    <Svg width={props.size} height={props.size*0.75} viewBox="0 0 23.841 18.544" {...props}>
      <G data-name="\uADF8\uB8F9 11450" transform="translate(-1379.358 -546)">
        <Path
          data-name="\uD328\uC2A4 5776"
          d="M1379.358 564.544l11.92-18.544 11.92 18.544z"
          fill="#ff3250"
        />
        <Path
          data-name="\uC120 138"
          transform="translate(1391.278 551.9)"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M0 0L0 5.9"
        />
        <Path
          data-name="\uC120 139"
          transform="translate(1391.278 559.065)"
          fill="none"
          stroke="#fff"
          strokeMiterlimit={10}
          strokeWidth={2}
          d="M0 0L0 2.107"
        />
      </G>
    </Svg>
  )
}

export default Warning
