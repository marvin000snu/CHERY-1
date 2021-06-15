import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Circle,
  Path,
  Rect
} from "react-native-svg"

function icon1(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 58 58" {...props}>
      <Defs>
        <LinearGradient
          id="a"
          x1={-0.001}
          y1={0.86}
          x2={0.771}
          y2={0.305}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0.003} stopColor="#aac0ef" />
          <Stop offset={0.917} stopColor="#fac1ec" />
        </LinearGradient>
      </Defs>
      <G data-name="\uADF8\uB8F9 11798" transform="translate(-188.24 -534.978)">
        <Circle
          data-name="\uD0C0\uC6D0 1109"
          cx={29}
          cy={29}
          r={29}
          transform="translate(188.24 534.978)"
          fill="url(#a)"
        />
        <Path
          data-name="\uD328\uC2A4 11343"
          d="M214.906 544.872v36.04h-5.417a10.114 10.114 0 01-10.11-10.117V560.4a15.526 15.526 0 0115.527-15.528z"
          transform="translate(2.309 2.051)"
          fill="#dbdad9"
        />
        <Path
          data-name="\uD328\uC2A4 11344"
          d="M227.774 560.4v10.4a10.119 10.119 0 01-10.11 10.117h-5.424v-36.04a15.532 15.532 0 0115.534 15.523z"
          transform="translate(4.975 2.051)"
          fill="#f7f8f8"
        />
        <Path
          data-name="\uC0AC\uAC01\uD615 4982"
          d="M2.138 0h2.025A2.138 2.138 0 016.3 2.138v1.274a1.2 1.2 0 01-1.2 1.2H1.2a1.2 1.2 0 01-1.2-1.2V2.138A2.138 2.138 0 012.138 0z"
          transform="translate(214.068 565.842)"
          fill="#847f7e"
        />
        <Rect
          data-name="\uC0AC\uAC01\uD615 4983"
          width={3.443}
          height={5.128}
          rx={1.426}
          transform="translate(210.986 556.702)"
          fill="#847f7e"
        />
        <Rect
          data-name="\uC0AC\uAC01\uD615 4984"
          width={3.443}
          height={5.128}
          rx={1.426}
          transform="translate(218.647 556.702)"
          fill="#847f7e"
        />
        <Path
          data-name="\uC0AC\uAC01\uD615 4985"
          d="M8.823 0h6.289a2.36 2.36 0 012.36 2.36v14.786a3.587 3.587 0 01-3.587 3.587H3.587A3.587 3.587 0 010 17.146V8.823A8.823 8.823 0 018.823 0z"
          transform="translate(191.98 548.899)"
          fill="#847f7e"
        />
        <Path
          data-name="\uC0AC\uAC01\uD615 4986"
          d="M3.587 0h10.3a3.587 3.587 0 013.587 3.587v14.786a2.36 2.36 0 01-2.36 2.36H8.823A8.823 8.823 0 010 11.911V3.587A3.587 3.587 0 013.587 0z"
          transform="rotate(-180 120.459 284.817)"
          fill="#847f7e"
        />
        <Path
          data-name="\uD328\uC2A4 11345"
          d="M217.58 538.358v8.585c0 1.154-2.039 2.089-4.558 2.089s-4.559-.934-4.559-2.089v-8.585l2.308 3.277 2.25-3.277 2.029 3.277z"
          transform="translate(4.193 .701)"
          fill="#f9e073"
        />
        <Path
          data-name="\uD328\uC2A4 11346"
          d="M212.117 576.766a1.328 1.328 0 01-1.877-1.879"
          fill="none"
          stroke="#847f7e"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.307}
        />
      </G>
    </Svg>
  )
}

export default icon1
