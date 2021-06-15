import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function Xicon(props) {
  const color = props.color? props.color: "#1b2c49";
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 21.631 21.631" {...props}>
      <G
        data-name="\uADF8\uB8F9 4473"
        transform="rotate(-45 9.061 15.049)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <Path
          data-name="\uC120 591"
          transform="translate(0 13.295)"
          d="M0 0L26.591 0"
        />
        <Path
          data-name="\uC120 592"
          transform="translate(13.295)"
          d="M0 26.591L0 0"
        />
      </G>
    </Svg>
  )
}

export default Xicon
