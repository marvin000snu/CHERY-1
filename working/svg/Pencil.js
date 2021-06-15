import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function Pencil(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 22 22" {...props}>
      <G data-name="\uADF8\uB8F9 11657">
        <Path
          data-name="\uC0AC\uAC01\uD615 8418"
          d="M0 0h6.153v20.374a1.087 1.087 0 01-1.087 1.087H1.087A1.087 1.087 0 010 20.374V0z"
          transform="translate(-2191.594 -1630.816) rotate(-135 1441.007 369.864)"
          fill="#5571ff"
        />
        <Path
          data-name="\uD328\uC2A4 16497"
          d="M2194.069 1649.908l4.351 4.351-4.405 1.722-1.795.7c-.453.176-.75-.121-.573-.573l.7-1.8z"
          transform="translate(-2191.594 -1630.816) translate(0 -3.917)"
          fill="#ffce00"
          opacity={0.51}
        />
        <Path
          data-name="\uD328\uC2A4 16498"
          d="M2192.347 1655.449a2.123 2.123 0 011.667 1.668l-1.795.7c-.453.177-.75-.121-.573-.573z"
          transform="translate(-2191.594 -1630.816) translate(0 -5.053)"
          fill="#1b2c49"
        />
      </G>
    </Svg>
  )
}

export default Pencil
