import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function MyChery(props) {
    const fill = props.fill
  return (
    <Svg width={35} height={35} viewBox="0 0 23.861 24.022" {...props}>
      <G data-name="\uADF8\uB8F9 4387">
        <G
          data-name="\uB808\uC774\uC5B4 1"
          transform="translate(336.056 -1227.681) translate(-332.204 1234.26)"
          fill={fill}
        >
          <Circle
            data-name="\uD0C0\uC6D0 444"
            cx={6.156}
            cy={6.156}
            r={6.156}
            transform="translate(0 5.13)"
          />
          <Circle
            data-name="\uD0C0\uC6D0 445"
            cx={6.156}
            cy={6.156}
            r={6.156}
            transform="translate(7.695)"
          />
        </G>
        <G data-name="\uB808\uC774\uC5B4 2">
          <Path
            data-name="\uD328\uC2A4 6069"
            d="M-323.731 1238.772l-1.86-2.231a3.7 3.7 0 003.577-3.454c.188-2.078-3.082-5.406-3.082-5.406s-3.815 2.686-4 4.763a3.918 3.918 0 00.321 1.96 3.933 3.933 0 00-1.871-.667c-2.078-.188-5.406 3.081-5.406 3.081s2.686 3.816 4.763 4a3.684 3.684 0 004.066-3.048l1.924 2.308"
            transform="translate(336.056 -1227.681) translate(-336.056 1227.681) translate(336.056 -1227.681)"
          fill={fill}

          />
        </G>
      </G>
    </Svg>
  )
}

export default MyChery
