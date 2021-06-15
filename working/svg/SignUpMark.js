import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SignUpMark(props) {
  return (
    <Svg width={props.size} height={props.size*0.7} viewBox="0 0 15.14 10.847" {...props}>
      <G data-name="\u110E\u1169\u1105\u1169\u11A8\u1109\u1162\u11A8 \u110E\u1166\u110F\u1173\u1111\u116D\u1109\u1175">
        <Path
          data-name="\uD328\uC2A4 10828"
          d="M7.469 12.111a1.408 1.408 0 01-1.01-.423l-4.5-4.5a1.433 1.433 0 012.022-2.023l3.473 3.473L14.215 1.7a1.433 1.433 0 012.055 2l-7.777 7.982a1.419 1.419 0 01-1.017.43z"
          transform="translate(-1.535 -1.265)"
          fill={props.fill}
        />
      </G>
    </Svg>
  )
}

export default SignUpMark
