import React from "react";
import Svg, { Circle, G } from 'react-native-svg';

function DoubleCircle(props) {
  const dis = props.chosen? "": "none";
  const color  = props.chosen? "#5471FF" : "#bfcce2";
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <G fill="#fff" stroke={color} strokeWidth="1" data-name="Ellipse 1912">
        <Circle cx="10" cy="10" r="10" stroke="none"></Circle>
        <Circle cx="10" cy="10" r="9.5" fill="none"></Circle>
      </G>
      <Circle
        display = {dis}
        cx="6"
        cy="6"
        r="6"
        fill="#5571ff"
        data-name="Ellipse 1913"
        transform="translate(4 4)"
      ></Circle>
    </Svg>
  );
}

export default DoubleCircle;
