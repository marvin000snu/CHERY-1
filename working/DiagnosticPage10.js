import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native";
import NextBracket from "../src/images/iconSvg/NextBracket";

const Styled = {
  background: styled.View`
    background-color: #5571FF;
    width: ${wp(100)};
    height: ${hp(100)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,
  wrap: styled.View`
    margin-bottom: 80px;
    flex: 1;
  `,
  sbox: styled.Text`
    margin-top: ${hp(12)}px;
    margin-left: ${wp(10)}px;
    height: ${hp(70)}px;
  `,
  h1: styled.Text`
    font-size: ${wp(7)}px;
    font-weight: bold;
    color: white;
    line-height: ${wp(11)}px;
  `,
  bold: styled.Text`
    font-weight: bold;
  `,
  button: styled.View`
    width: ${wp(60)}px;
    margin-left: ${wp(20)}px;
    height: ${hp(5)}px;
    min-height: 50px;
    border-radius: 40px;
    border: 2px solid #fff;
    color: #fff;
    font-size: ${wp(10)}px;
    font-weight: bold;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
  `,
  btnText: styled.Text`
    margin-left: ${wp(12)}px;
    font-size: ${wp(5)}px;
    font-weight: 900;
    color: white;
    width: 60%;
    text-align: center;
    line-height: 50px;
  `,
};
const DiagnosticPage10 = ({navigation}) => {
  const startNowHandler = () => {
    navigation.navigate("AfterLoginGradeSolve", {
      screen: "afterLogin",
      params: { screen: "Home", params: { screen: "DailyLearningPage0" } },
    });
  };

  return (
    <Styled.background>
      <Styled.sbox>
        <Styled.h1>
          AI가 진단을{"\n"}
          완료했어요!{"\n"}
          이제 CHERY와 공부를{"\n"}
          시작해봐요 :)
        </Styled.h1>
      </Styled.sbox>

      <TouchableWithoutFeedback onPress={startNowHandler}>
        <Styled.button>
          <Styled.btnText>결과보기</Styled.btnText>
          <NextBracket color="white" style={{ marginLeft: 10 }} />
        </Styled.button>
      </TouchableWithoutFeedback>
    </Styled.background>
  );
};

export default DiagnosticPage10;
