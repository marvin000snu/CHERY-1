import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function NewBadge(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      {...props}
    >
      <G data-name="Group 12255" transform="translate(-680.284 -934.175)">
        <Circle
          data-name="Ellipse 2077"
          cx={7}
          cy={7}
          r={7}
          transform="translate(680.284 934.175)"
          fill="#36abff"
        />
        <G data-name="Group 12254">
          <Path
            data-name="Path 17448"
            d="M684.825 938.078h1.515l1.54 2.963.608 1.374h.041a19.537 19.537 0 01-.2-2.29v-2.047h1.414v6.193h-1.515l-1.53-2.987-.608-1.357h-.042c.067.69.192 1.54.192 2.289v2.057h-1.415z"
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  )
}

export default NewBadge
