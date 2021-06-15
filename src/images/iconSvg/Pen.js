import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function Pen(props) {
  return (
    <Svg
      id="\uB808\uC774\uC5B4_1"
      x="0px"
      y="0px"
      viewBox="0 0 17.9 17.9"
      xmlSpace="preserve"
      enableBackground="new 0 0 17.9 17.9"
      {...props}
    >
      <G id="\uADF8\uB8F9_4147" transform="translate(309.002 143.738)">
        <G id="\uADF8\uB8F9_4120" transform="rotate(-135 5.956 8.392)">
          <Path
            id="\uC0AC\uAC01\uD615_2876"
            className="st0"
            fill="#8E5FFA"
            d="M322.2-111.9h2c1.1 0 2 .9 2 2v7.5c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-7.5c0-1.1.9-2 2-2z"
          />
          <Path
            id="\uC0AC\uAC01\uD615_2877"
            className="st0"
            fill="#8E5FFA"
            d="M321.6-100h3.2c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4h-3.2c-.8 0-1.4-.6-1.4-1.4 0-.7.6-1.4 1.4-1.4z"
          />
          <Path
            id="\uD328\uC2A4_6050"
            className="st0"
            fill="#8E5FFA"
            d="M322.4-116.9c.2-.4.8-.6 1.3-.4.2.1.3.2.4.4l1.8 3.2c.4.6.7 1.4 0 1.4h-5.1c-.7 0-.4-.8 0-1.4l1.6-3.2z"
          />
        </G>
      </G>
    </Svg>
  )
}

export default Pen
