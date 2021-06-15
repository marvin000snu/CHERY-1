import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MinusButton(props) {
  return (
    <Svg
      style={{ marginTop: 15, marginLeft: 10 }}
      viewBox="0 0 24 24"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Path
        style={{
          textIndent: 0,
          textAlign: "start",
          lineHeight: "normal",
          textTransform: "none",
          blockProgression: "tb",
          InkscapeFontSpecification: "Bitstream Vera Sans",
        }}
        d="M5 11v2h14v-2H5z"
        overflow="visible"
        fontFamily="Bitstream Vera Sans"
      />
    </Svg>
  );
}

export default MinusButton;
