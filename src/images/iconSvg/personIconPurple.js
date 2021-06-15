import * as React from "react";
import Svg, { G, Path ,Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function PersonIconPurple(props) {
  return (
    <Svg
      id="\uB808\uC774\uC5B4_1"
      x="0px"
      y="0px"
      width = {props.size}
      height = {props.size}
      viewBox="0 0 73.3 73.3"
      xmlSpace="preserve"
      enableBackground="new 0 0 73.3 73.3"
      {...props}
    >
      <G transform="matrix(1, 0, 0, 1, 41.91, 153.91)">
        <Circle
          id="\uD0C0\uC6D0_114-2"
          cx={-5.2}
          cy={-117.2}
          r={36}
          fill={props.color}
        />
      </G>
      <Circle
        id="\uD0C0\uC6D0_115"
        className="st1"
        cx={36.5}
        cy={29.9}
        r={12.4}
        fill="white"
      />
      <Path
        fill="white"
        id="\uD328\uC2A4_5773"
        className="st1"
        d="M48.5,39.7c-5.4,6.6-15.3,7.6-21.9,2.1c-0.8-0.6-1.5-1.4-2.2-2.1c-6.8,2.7-11.3,8.1-11.3,16.6 c0,0.7,0,1.3,0.1,2c11.3,12.8,31,14,43.8,2.7c0.9-0.8,1.8-1.7,2.7-2.7c0.1-0.6,0.1-1.3,0.1-2C59.9,47.8,55.3,42.5,48.5,39.7z"
      />
    </Svg>
  );
}

export default PersonIconPurple;
