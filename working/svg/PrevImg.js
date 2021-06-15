import * as React from "react"
import Svg, { Text, TSpan } from "react-native-svg"

function PrevImg(props) {
  return (
    <Svg width={25} height={37} viewBox="0 0 25 37" {...props}>
      <Text
        data-name="\u2190"
        transform="translate(0 29)"
        fill="#1b2c49"
        fontSize={25}
        fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR"
        fontWeight={700}
      >
        <TSpan x={0} y={0}>
          {"\u2190"}
        </TSpan>
      </Text>
    </Svg>
  )
}

export default PrevImg
