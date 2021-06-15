import * as React from "react"
import Svg, { Rect, G, Circle, Path } from "react-native-svg"

function SearchLense(props) {
  return (
    <Svg
      data-name="\uADF8\uB8F9 3755"
      width={props.size}
      height={props.size}
      viewBox="0 0 27.45 27.45"
      {...props}
    >
      <Rect
        data-name="\uC0AC\uAC01\uD615 2363"
        width={27.45}
        height={27.45}
        rx={4}
        // fill="#5471FF"
      />
      <G
        data-name="\uADF8\uB8F9 3563"
        transform="translate(6.795 6.04)"
        fill="none"
        stroke="#5471FF"
        strokeMiterlimit={10}
        strokeWidth={2}
      >
        <Circle data-name="\uD0C0\uC6D0 82" cx={6.338} cy={6.338} r={6.338} />
        <Path
          data-name="\uC120 116"
          transform="translate(11.139 11.139)"
          d="M0 0L4.609 4.609"
        />
      </G>
    </Svg>
  )
}

export default SearchLense
