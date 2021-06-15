import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function Logo(props) {
  return (
    <Svg
      id="\uB808\uC774\uC5B4_1"
      x="0px"
      y="0px"
      width={props.size}
      height={props.size/4}
      viewBox="0 0 678.9 156.1"
      xmlSpace="preserve"
      enableBackground="new 0 0 678.9 156.1"
      {...props}
    >
      <Path
        transform="rotate(-90 339.929 77.81)"
        d="M327.4 39.9H352.4V115.80000000000001H327.4z"
        fill="#c0f478"
      />
      <Path
        transform="rotate(-90 357.744 130.31)"
        d="M345.2 74.6H370.2V186.1H345.2z"
        fill="#f763d0"
      />
      <Path
        transform="rotate(-90 349.06 25.31)"
        d="M336.6 -21.8H361.6V72.3H336.6z"
        fill="#81f7f1"
      />
      <Path
        className="st3"
        d="M247 12.8L247 65.3 192 65.3 192 12.8 167 12.8 167 65.3 167 90.3 167 142.8 192 142.8 192 90.3 247 90.3 247 142.8 272 142.8 272 90.3 272 65.3 272 12.8z"
        fill="#7C6BFB"
      />
      <Path
        className="st3"
        fill="#7C6BFB"
        d="M517.5 89.6c17.9-3.4 31.5-19.1 31.5-38.1 0-21.4-17.3-38.8-38.7-38.8H437v130h25V90.3h26.9l31.1 52.5h29L524.8 102l-7.3-12.4zM462 65.3V37.8H510.3c7.6 0 13.7 6.2 13.7 13.8 0 7.6-6.2 13.8-13.7 13.8H462zM78.8 122.8c-25.1 0-45.4-20.1-45.4-45s20.3-45 45.4-45c17.4 0 32.5 9.7 40.1 24h27.2c-9-28.4-35.7-49-67.3-49-39 0-70.6 31.3-70.6 70s31.6 70 70.6 70c31.6 0 58.3-20.6 67.3-49h-27.2c-7.6 14.3-22.7 24-40.1 24z"
      />
      <Path
        className="st3"
        fill="#7C6BFB"
        d="M669.8 12.8L640.8 12.8 612.4 60.8 584 12.8 555 12.8 579.6 54.4 599.9 88.7 599.9 142.8 624.9 142.8 624.9 88.8 645.2 54.4z"
      />
    </Svg>
  )
}

export default Logo
