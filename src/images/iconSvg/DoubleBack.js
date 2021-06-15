import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function DoubleBack(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 15.826 14.15" {...props}>
            <G data-name="\uADF8\uB8F9 10406">
        <G data-name="\uADF8\uB8F9 10398" fill="none">
          <G
            data-name="Chevron Selected"
            transform="translate(-198.203 -328) translate(-1 -2) translate(199.556 329.528)"
          >
            <Path transform="translate(-.353 .472)" d="M0 0H7.852V14.15H0z" />
            <Path
              data-name="\uD328\uC2A4 5431"
              d="M6.19 11.97L1.4 7.414 6.19 2.858"
              stroke={props.color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
            />
          </G>
          <G
            data-name="Chevron Selected"
            transform="translate(-198.203 -328) translate(-1 -2) translate(203.556 329.528)"
          >
            <Path
              data-name="background"
              transform="translate(-.353 .472)"
              d="M0 0H7.852V14.15H0z"
            />
            <Path
              data-name="\uD328\uC2A4 5431"
              d="M6.19 11.97L1.4 7.414 6.19 2.858"
              stroke={props.color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
            />
          </G>
        </G>
      </G>
    </Svg>
  )
}

export default DoubleBack
