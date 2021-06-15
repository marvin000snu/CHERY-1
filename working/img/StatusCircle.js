import * as React from "react"
import Svg, {G, Circle, Text, TSpan } from "react-native-svg"
import styled from "styled-components";

    function StatusCircle(props) {
    const {first, second, size} = props;
    const Styled = {
        Shadow: styled.View`
        width: ${size*0.9};
        height: ${size*0.9};
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        elevation: 10;
      `,
    }
  return (
      <Styled.Shadow>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      backgroundColor="blue"
      {...props}
    >
      <G filter="url(#prefix__a)">
        <Circle
          data-name="Ellipse 1985"
          cx={37.814}
          cy={37.814}
          r={37.814}
          transform="translate(9 6)"
          fill="white"
        />
      </G>
      <Text
        data-name="1397 \uBB38\uD56D"
        transform="translate(47.028 57.007)"
        fill="#1b2c49"
        fontSize={13}
        fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR"
        fontWeight={700}
        letterSpacing="-.03em"
      >
        <TSpan textAnchor="middle">
          {second}
        </TSpan>
      </Text>
      <Text
        data-name="\uC804\uCCB4 \uBB38\uD56D"
        transform="translate(46.894 34.76)"
        fill="#1b2c49"
        fontSize={12}
        fontFamily="NotoSansCJKkr-Medium, Noto Sans CJK KR"
        fontWeight={500}
        letterSpacing="-.03em"
      >
        <TSpan textAnchor="middle">
          {first}
        </TSpan>
      </Text>
    </Svg>
    </Styled.Shadow>
  )
}

export default StatusCircle
