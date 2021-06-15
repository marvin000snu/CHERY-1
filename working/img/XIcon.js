import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function XIcon(props) {
  const {size} = props;
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 19.243 19.242"
      {...props}
    >
      <G data-name="Group 11732">
        <G
          data-name="Group 11731"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={3}
        >
          <Path data-name="Line 279" d="M2.121 2.121l15 15" />
          <Path data-name="Line 280" d="M17.121 2.121l-15 15" />
        </G>
      </G>
    </Svg>
  )
}

export default XIcon
