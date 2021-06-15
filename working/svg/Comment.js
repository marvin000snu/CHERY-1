import * as React from "react"
import Svg, { Defs, G, Circle, Path, Rect } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Comment(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 68 68" {...props}>
      <Defs></Defs>
      <G data-name="\uADF8\uB8F9 12323">
        <G transform="translate(4 -206) translate(-4 206)" filter="url(#a)">
          <Circle
            data-name="\uD0C0\uC6D0 2000"
            cx={25}
            cy={25}
            r={25}
            transform="translate(9 6)"
            fill="#5471ff"
          />
        </G>
        <G
          data-name="\uADF8\uB8F9 12199"
          transform="translate(4 -206) translate(-116.75 -714.75)"
        >
          <Path
            data-name="\uD328\uC2A4 17410"
            d="M165.439 949.236v3.671a12.827 12.827 0 01-12.826 12.826h-13.174a12.8 12.8 0 01-10.287-5.166 13.007 13.007 0 01-1.812-6.645v-4.336a13.083 13.083 0 0111.183-12.944c.353-.053.713-.089 1.075-.113a4.69 4.69 0 004.559 3.595h3.653a4.688 4.688 0 004.565-3.62h.71a13.174 13.174 0 012.116.17.052.052 0 01.021.006 12.828 12.828 0 0110.217 12.556z"
            fill="#f7f8f8"
          />
          <Path
            data-name="\uD328\uC2A4 17411"
            d="M166.163 949.582v4.336A13.082 13.082 0 01153.082 967h-12.664a13.073 13.073 0 01-11.266-6.433 12.8 12.8 0 0010.287 5.166h13.174a12.827 12.827 0 0012.826-12.826v-3.671a12.828 12.828 0 00-10.22-12.56 13.081 13.081 0 0110.944 12.906z"
            fill="#d8dde9"
          />
          <G data-name="\uADF8\uB8F9 12196">
            <Rect
              data-name="\uC0AC\uAC01\uD615 8833"
              width={27.423}
              height={18.101}
              rx={7.998}
              transform="translate(132.315 943.469)"
              fill="#43428a"
            />
            <Path
              data-name="\uD328\uC2A4 17412"
              d="M151.74 943.65a7.825 7.825 0 017.816 7.817v2.105a7.825 7.825 0 01-7.816 7.817h-11.428a7.825 7.825 0 01-7.816-7.817v-2.105a7.825 7.825 0 017.816-7.817h11.428m0-.362h-11.428a8.178 8.178 0 00-8.178 8.179v2.105a8.178 8.178 0 008.178 8.179h11.428a8.178 8.178 0 008.178-8.179v-2.105a8.178 8.178 0 00-8.178-8.179z"
              fill="#222074"
            />
          </G>
          <Rect
            data-name="\uC0AC\uAC01\uD615 8834"
            width={16.653}
            height={24.889}
            rx={7.352}
            transform="rotate(90 -392.59 552.508)"
            fill="#222074"
          />
          <G data-name="\uADF8\uB8F9 12197" fill="#0ff">
            <Rect
              data-name="\uC0AC\uAC01\uD615 8835"
              width={3.982}
              height={5.792}
              rx={1.991}
              transform="translate(137.609 949.533)"
            />
            <Rect
              data-name="\uC0AC\uAC01\uD615 8836"
              width={3.982}
              height={5.792}
              rx={1.991}
              transform="translate(150.461 949.533)"
            />
          </G>
          <G
            data-name="\uD328\uC2A4 17413"
            fill="#f7f8f8"
            strokeMiterlimit={10}
          >
            <Path d="M147.807 939.62h-3.653c-1.05 0-2.055-.39-2.829-1.1-.46-.421-.815-.93-1.046-1.495H151.68a4.168 4.168 0 01-3.874 2.595z" />
            <Path
              d="M141.116 937.525a3.705 3.705 0 003.038 1.595h3.653c1.25 0 2.37-.617 3.04-1.595h-9.731m-1.521-1h12.77a4.685 4.685 0 01-4.558 3.595h-3.653a4.672 4.672 0 01-3.167-1.232 4.656 4.656 0 01-1.392-2.363z"
              fill="#d8dde9"
            />
          </G>
          <Path
            data-name="\uD328\uC2A4 17414"
            d="M152.365 936.525a4.685 4.685 0 01-4.558 3.595h-3.653a4.672 4.672 0 01-3.167-1.232 4.656 4.656 0 001.719.327h3.653a4.68 4.68 0 004.239-2.69z"
            fill="#d8dde9"
          />
          <G data-name="\uADF8\uB8F9 12198">
            <Path
              data-name="\uD328\uC2A4 17415"
              d="M146.026 958.674a1.812 1.812 0 01-1.81-1.81.272.272 0 11.543 0 1.267 1.267 0 102.534 0 .272.272 0 11.543 0 1.811 1.811 0 01-1.81 1.81z"
              fill="#0ff"
            />
          </G>
        </G>
      </G>
    </Svg>
  )
}

export default Comment
