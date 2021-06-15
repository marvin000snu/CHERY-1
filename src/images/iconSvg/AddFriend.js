import * as React from "react";
import Svg, { G, Ellipse, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function AddFriend(props) {
  return (
    <Svg
      id="\uB808\uC774\uC5B4_1"
      x="0px"
      y="0px"
      viewBox="0 0 25.5 25.5"
      xmlSpace="preserve"
      enableBackground="new 0 0 25.5 25.5"
      width={props.size}
      height={props.size}
      {...props}
    >
      <G id="\uADF8\uB8F9_4474" transform="translate(1 1)">
        <Ellipse
          id="\uD0C0\uC6D0_378"
          cx={9.1}
          cy={5.3}
          rx={4.2}
          ry={4.2}
          fill="none"
          stroke="white"
          strokeWidth={1.5}
          strokeMiterlimit={10}
        />
        <Path
          stroke="white"
          strokeWidth={1.5}
          id="\uD328\uC2A4_6285"
          className="st1"
          d="M16 17.1v5.2H2.2v-5.2c0-3 2.9-5.4 6.4-5.4h1c3.5.1 6.4 2.5 6.4 5.4z"
        />
        <G id="\uADF8\uB8F9_4473" transform="translate(12.55 5.091)">
          <Path stroke="white"  strokeWidth={1.5} id="\uC120_591" className="st1" d="M2.2 4.4L8.7 4.4" />
          <Path  stroke="white" strokeWidth={1.5} id="\uC120_592" className="st1" d="M5.5 7.6L5.5 1.1" />
        </G>
      </G>
    </Svg>
  );
}

export default AddFriend;
