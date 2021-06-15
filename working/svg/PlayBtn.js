import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function PlayBtn(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 67.127 70.992" {...props}>
      <Defs></Defs>
      <G filter="url(#a)">
        <Path
          data-name="\uD328\uC2A4 16506"
          d="M20.4 3.588a6.967 6.967 0 0112.185 0l19.523 35.193a6.967 6.967 0 01-6.092 10.346H6.977A6.967 6.967 0 01.884 38.781z"
          transform="rotate(90 26.065 32.065)"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}

export default PlayBtn
