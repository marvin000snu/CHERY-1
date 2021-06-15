import * as React from "react"
import Svg, { Text, TSpan } from "react-native-svg"

function BackArrow(props) {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 25 37" {...props}>
      <Text
        data-name="\u2190"
        transform="translate(0 29)"
        fill={props.color? props.color:"#fff"}
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
BackArrow.defaultProps={
  width:"25",
  height:"37",
  color:"#000"
}
export default BackArrow
