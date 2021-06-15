import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function Xicon(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 16.243 16.243" {...props}>
      <G data-name="\uADF8\uB8F9 9273">
        <G
          data-name="\uADF8\uB8F9 9032"
          fill="none"
          stroke="#e38290"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={3}
          transform="translate(2.122 2.121)"
        >
          <Path data-name="\uC120 35" d="M0 12L12 0" />
          <Path data-name="\uC120 36" d="M0 0L12 12" />
        </G>
      </G>
    </Svg>
  )
}

export default Xicon
