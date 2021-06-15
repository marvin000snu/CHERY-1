import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native";
import NextBracket from "../../src/images/iconSvg/NextBracket";
const HomeMyMenuButton = (props) => {
    const {color, text, fontSize, height} = props;
    const Styled = {
        background: styled.View`
          background-color: ${color};
          align-items: center;
          justify-content: center;
          height: ${height};
          margin-top: ${hp(1)};
        `,
        font: styled.Text`
        font-size: ${fontSize};
        `,
        button: styled.View`
        flex-flow: row;
        justify-content: space-between;
        width: ${wp(80)}px;
        align-items: center;
`,
      };
      
      
  return (
    <Styled.background>
    <TouchableWithoutFeedback>
        <Styled.button>
        <Styled.font>{text}</Styled.font>
        <NextBracket color="black" />
    </Styled.button>
        </TouchableWithoutFeedback>
        </Styled.background>

  );
};

export default HomeMyMenuButton;
