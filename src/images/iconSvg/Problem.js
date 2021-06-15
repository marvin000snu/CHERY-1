import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"

function Problem(props) {
  return (
    <Svg width={props.size} height={props.size*1.2} viewBox="0 0 72 84.551" {...props}>
      <Defs></Defs>
      <G data-name="\uADF8\uB8F9 10406" transform="translate(-43 -441.186)">
        <G transform="translate(43 441.19)" filter="url(#a)">
          <Path
            data-name="\uBE7C\uAE30 32"
            d="M4906 152h-40a7.008 7.008 0 01-7-7V96a7.008 7.008 0 017-7h32l15 15v41a7.008 7.008 0 01-7 7z"
            transform="translate(-4850 -79.45)"
            fill={props.dark}
          />
        </G>
        <Path
          data-name="\uD328\uC2A4 14429"
          d="M-4560 284l15 15h-15z"
          transform="translate(4651 166.737)"
          fill={props.light}
        />
        <Path
          data-name="\uC0AC\uAC01\uD615 7257"
          transform="translate(65 475.737)"
          fill="#fff"
          d="M0 0H28V3H0z"
        />
        <Path
          data-name="\uC0AC\uAC01\uD615 7258"
          transform="translate(65 484.737)"
          fill="#fff"
          d="M0 0H28V3H0z"
        />
        <Path
          data-name="\uC0AC\uAC01\uD615 7261"
          transform="translate(65 493.737)"
          fill="#fff"
          d="M0 0H28V3H0z"
        />
        <Path
          data-name="\uD328\uC2A4 14426"
          d="M58.833 460.851l4.417 4.887L81 444.001"
          fill="none"
          stroke="#db4159"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
        />
      </G>
    </Svg>
  )
}

export default Problem