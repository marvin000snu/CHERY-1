import React, { useRef } from "react";
import styled from "styled-components/native";
import {  TouchableWithoutFeedback } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const diagnosticTestPage8 = ({ navigation }) => {

  const Styled = {
    body: styled.View`
      width: 100%;
      background-color: #5471FF;
      height: ${hp(100)};
    `,
    section: styled.View`
      width: 100%;
      height: 100%;
      background-color: #5471FF;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
    `,
    sbox: styled.Text`
      margin-top: ${hp(10)}px;
      width: 85%;
      height: 70%;
      color: #fff;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    footer: styled.View`
      width: 100%;
      height: 450px;
      background-color: #5471FF;
      display: flex;
      justify-content: center;
      flex-direction: row;
    `,
    button: styled.View`
      width: 300px;
      height: 50px;
      border-radius: 40px;
      background-color: #5471FF;
      border: 1px solid #fff;
      color: #fff;
      font-size: 18px;
      font-weight: 900;
    `,
    h1: styled.Text`
      margin-top: ${hp(20)}px;
      font-size: 28px;
      font-weight: bold;
      color: white;
      line-height : 44;
    `,
    btnText: styled.Text`
      font-size: 18px;
      font-weight: 900;
      color: white;
      width: 100%;
      text-align: center;
      line-height: 50px;
    `,
  };
  const startNowHandler = () => {
    navigation.navigate("AfterLoginGradeSolve", {
      screen: "afterLogin",
      params: { screen: "Home", params: { screen: "DailyLearningPage0" } },
    });
  };
  return (
    <Styled.body>
      <Styled.section>
        <Styled.sbox>
          <Styled.h1>
            진단을 완료했어요.
            {"\n"}이제 체리와 공부를
            {"\n"}시작해봐요.😃
          </Styled.h1>
        </Styled.sbox>
        <TouchableWithoutFeedback>
          <Styled.button>
            <Styled.btnText onPress={startNowHandler}>
              지금 시작하기
            </Styled.btnText>
          </Styled.button>
        </TouchableWithoutFeedback>
      </Styled.section>
    </Styled.body>
  );
};

export { diagnosticTestPage8 };
