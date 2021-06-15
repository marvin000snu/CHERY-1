import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function Eraser(props) {
  return (
    <Svg
      id="\uB808\uC774\uC5B4_1"
      width= {props.size}
      height= {props.size}
      viewBox="0 0 33.1 31.6"
      xmlSpace="preserve"
    >
      <G id="\uADF8\uB8F9_4163" transform="translate(-1022 -8009)">
        <G id="\uD328\uC2A4_6051">
          <Path
            d="M-313.5-123.2h-9c-3.9 0-7-3.1-7-7s3.1-7 7-7h9v14z"
            transform="translate(1360 8155)"
            fill="#fff"
          />
          <Path
            className="st1"
            d="M-322.5-136.7c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h8.5v-13h-8.5m0-1h9.5v15h-9.5c-4.1 0-7.5-3.4-7.5-7.5 0-4.2 3.4-7.5 7.5-7.5z"
            transform="translate(1360 8155)"
            fill="#8E5FFA"
          />
        </G>
        <Path
          id="\uBE7C\uAE30_1"
          className="st1"
          d="M1047 8032.3h-12v-15h12v15zm-11-11v6h10.2v-6H1036z"
          fill="#8E5FFA"
        />
      </G>
    </Svg>
  )
}

export default Eraser
