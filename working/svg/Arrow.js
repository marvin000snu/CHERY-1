import * as React from "react"
import Svg, { Text, TSpan } from "react-native-svg"

function Arrow(props) {
    const {color, margin} = props
  return (
    <Svg width={25} height={37} viewBox="0 0 25 37" {...props}>
      <Text
        data-name="\u2190"
        transform="matrix(-1 0 0 1 25 29)"
        fill={color}
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
Arrow.defaultProps={
    color:"none"
}

export default Arrow
