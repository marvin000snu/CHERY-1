import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function TypeIcon(props) {
  return (
    <Svg width={props.size} height={props.size*1.125} viewBox="0 0 72 80.999" {...props}>
      <Defs></Defs>
      <G data-name="\uADF8\uB8F9 9332">
        <G data-name="\uADF8\uB8F9 9331" transform="translate(-39 -387)">
          <G transform="translate(39 387)" filter="url(#a)">
            <Path
              data-name="\uBE7C\uAE30 2"
              d="M4906 152h-40a7.008 7.008 0 01-7-7V96a7.008 7.008 0 017-7h32l15 15v41a7.008 7.008 0 01-7 7z"
              transform="translate(-4850 -83)"
              fill={props.deepColor}
            />
          </G>
          <Path
            data-name="\uD328\uC2A4 13762"
            d="M-4560 284l15 15h-15z"
            transform="translate(4647 109)"
            fill={props.lightColor}
          />
          <Path
            data-name="\uC0AC\uAC01\uD615 6578"
            transform="translate(61 418)"
            fill="#fff"
            d="M0 0H28V3H0z"
          />
          <Path
            data-name="\uC0AC\uAC01\uD615 6579"
            transform="translate(61 427)"
            fill="#fff"
            d="M0 0H28V3H0z"
          />
          <Path
            data-name="\uC0AC\uAC01\uD615 6580"
            transform="translate(61 436)"
            fill="#fff"
            d="M0 0H28V3H0z"
          />
        </G>
      </G>
    </Svg>
  )
}

export default TypeIcon
