import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Eraser(props) {
  return (
    <Svg
      data-name="\uADF8\uB8F9 11492"
      width={props.size}
      height={props.size}
      viewBox="0 0 23.678 20.687"
      {...props}
    >
      <Path
        data-name="\uD328\uC2A4 16421"
        d="M468.223 578.714l8.481-8.481a.991.991 0 011.408 0l8.5 8.5a.991.991 0 010 1.408l-8.481 8.481z"
        transform="translate(-463.224 -569.94)"
        fill="#5571ff"
      />
      <Path
        data-name="\uD328\uC2A4 16422"
        d="M476.347 591.748l-.531.531-1.475 1.474h-6.811l-5.795-5.795a.992.992 0 010-1.408l4.7-4.711z"
        transform="translate(-461.443 -573.067)"
        fill="#f7969a"
        opacity={0.67}
      />
    </Svg>
  )
}

export default Eraser
