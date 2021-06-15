import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function FriendMenu(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 33.928 31.372" {...props}>
      <G
        data-name="\uADF8\uB8F9 4541"
        transform="translate(696.613 314.837)"
        stroke={props.fill}
        strokeWidth={1.5}
      >
        <Circle
          data-name="\uD0C0\uC6D0 416"
          cx={5.217}
          cy={5.217}
          r={5.217}
          transform="translate(-683.87 -314.087)"
          fill={props.fill}
          strokeMiterlimit={10}
        />
        <Path
          data-name="\uD328\uC2A4 6350"
          d="M-670.043-294.09v6.525h-17.214v-6.525c0-3.69 3.577-6.69 7.987-6.69h1.24c4.41 0 7.987 3 7.987 6.69z"
          fill={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Circle
          data-name="\uD0C0\uC6D0 417"
          cx={5.217}
          cy={5.217}
          r={5.217}
          transform="translate(-692.476 -310.737)"
          fill={props.fill}
          strokeMiterlimit={10}
        />
        <Path
          data-name="\uD328\uC2A4 6351"
          d="M-678.65-290.74v6.525h-17.213v-6.525c0-3.69 3.576-6.69 7.987-6.69h1.239c4.411 0 7.987 3 7.987 6.69z"
          fill={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <G
          data-name="\uADF8\uB8F9 4540"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path
            data-name="\uC120 627"
            transform="translate(-671.609 -303.652)"
            d="M0 0L8.174 0"
          />
          <Path
            data-name="\uC120 628"
            transform="translate(-667.522 -307.739)"
            d="M0 8.174L0 0"
          />
        </G>
      </G>
    </Svg>
  )
}

export default FriendMenu
