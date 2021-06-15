import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function CircledCheck(props) {
    const size = (props.size)? props.size : 39;
  return (
    <Svg
      data-name="Group 12288"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 39 39"
      {...props}
    >
      <G data-name="\uD0C0\uC6D0 2096">
        <Path
          data-name="\uD328\uC2A4 17478"
          d="M19.499 39a19.5 19.5 0 1119.5-19.5 19.5 19.5 0 01-19.5 19.5zm0-36.123a16.625 16.625 0 1016.626 16.624A16.625 16.625 0 0019.499 2.877z"
          fill="#5471ff"
        />
      </G>
      <G data-name="\uCD08\uB85D\u1109 \u11A8 \u110E \uD06C\uD45C\uC2DC">
        <Path
          data-name="\uD328\uC2A4 10828"
          d="M17.003 27.811a2.163 2.163 0 01-1.55-.649l-6.915-6.9a2.2 2.2 0 013.111-3.111l5.331 5.329 10.38-10.65a2.2 2.2 0 013.153 3.067L18.574 27.155a2.181 2.181 0 01-1.561.659z"
          fill="#5471ff"
        />
      </G>
    </Svg>
  )
}

export default CircledCheck
