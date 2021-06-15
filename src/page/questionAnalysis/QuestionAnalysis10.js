import React, { useState } from "react";
import styled from "styled-components/native";
import { Difficulty } from "../../components/Molecules/Difficulty";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Constants from "expo-constants";
import moment from "moment";
const Styled = {
  body: styled.View`
  width: ${wp(90)}
    height: ${hp(100) - Constants.statusBarHeight}px;
    background-color: #f0f3f8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column;
    margin-top: ${Constants.statusBarHeight}px;
  `,
  section: styled.View`
    width: 96%;
    height: 85%;
    background-color: #fff;
    margin-top: 17px;
    border: 2px solid #707070;
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    align-items: center;
    border-radius: 6px;
  `,
  bar: styled.View`
    width: 100%;
    height: 2px;
    background: #47c4ee;
    border: 1px solid #47c4ee;
    border-radius: 5px;
  `,
  wrap: styled.View`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  `,
  createBtn: styled.View`
    width: 60%;
    height: 40%;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  `,
  createBox: styled.View`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column;
  `,
  createText: styled.View`
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #a4b6d6;
  `,
  create: styled.View`
    width: 75%;
    color: #a4b6d6;
    height: 36px;
    color: #fff;
    border-radius: 7px;
    background-color: #48a3ff;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  createLog: styled.View`
    width: 75%;
    height: 36px;
    background-color: #a4b6d6;
    border-radius: 7px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    margin-top: 15%;
  `,
  nav: styled.View`
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `,
  navlist: styled.Text`
    width: 21%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: 400;
    color: #a4b6d6;
  `,
  navlist1: styled.Text`
    width: 14%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: 400;
    color: #a4b6d6;
  `,
  navlist2: styled.Text`
    width: 22%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: 500;
    color: #a4b6d6;
  `,
  summit: styled.View`
    width: 100%;
    height: 5%;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 30px;
  `,
  summitbtn: styled.View`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  `,
  prevbtn: styled.View`
    width: 40%;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #121b50;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  `,
  nextbtn: styled.View`
    width: 40%;
    height: 100%;
    background-color: #d4d7dc;
    border-radius: 5px;
    border: 1px solid #d4d7dc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #fff;
  `,
};
const QuestionAnalysis10 = function (props) {
  const { Kincaidrank, Fogrank } = props.readabilityresult;

  return (
    <Styled.wrap>
      <Difficulty use="사용 어휘" dif="12.4" diftext={`전체 문제 중 어휘 난이도가 상위 ${parseInt(Fogrank * 100)}% 에 드는 문항입니다.`} />
      <Difficulty use="지문" dif="19.45" diftext={`전체 문제 중 지문 난이도가 상위 ${parseInt(Kincaidrank * 100)}% 에 드는 문항입니다.`} />
    </Styled.wrap>
  );
};
export { QuestionAnalysis10 };
