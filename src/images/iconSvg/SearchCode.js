import * as React from "react"
import Svg, { Circle, Text, TSpan } from "react-native-svg"

function SearchCode(props) {
  return (
    <Svg width={props.size} height={props.size} viewBox="0 0 18 18" {...props}>
      <Circle data-name="\uD0C0\uC6D0 489" cx={9} cy={9} r={9} fill="#bbc2cf" />
      <Text
        data-name="?"
        transform="translate(6 13)"
        fill="#fff"
        fontSize={11}
        fontFamily="Helvetica"
        letterSpacing="-0.05em"
      >
        <TSpan x={0} y={0}>
          {"?"}
        </TSpan>
      </Text>
    </Svg>
  )
}

export default SearchCode
