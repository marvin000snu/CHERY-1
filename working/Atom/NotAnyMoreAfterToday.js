import * as React from "react"
import Svg, { Defs, G, Circle, Text, TSpan } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function NotAnyMoreAfterToday(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={174}
      height={38}
      viewBox="0 0 174 38"
      {...props}
    >
      <Defs></Defs>
      <G data-name="Group 12372">
        <G filter="url(#prefix__a)">
          <G
            data-name="Ellipse 2126"
            transform="translate(9 6)"
            fill="none"
            stroke="#fff"
            strokeWidth={1.3}
          >
            <Circle cx={10} cy={10} r={10} stroke="none" />
            <Circle cx={10} cy={10} r={9.35} />
          </G>
        </G>
        <Text
          data-name="\uC624\uB298 \uC774\uD6C4\uB85C \uBCF4\uC9C0 \uC54A\uAE30"
          transform="translate(39 22)"
          fill="#fff"
          fontSize={15}
          fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR"
          fontWeight={700}
        >
          <TSpan x={0} y={0}>
            {"\uC624\uB298 \uC774\uD6C4\uB85C \uBCF4\uC9C0 \uC54A\uAE30"}
          </TSpan>
        </Text>
      </G>
    </Svg>
  )
}

export default NotAnyMoreAfterToday