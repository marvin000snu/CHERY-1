import React from "react";
import styled from "styled-components/native";
import { Similar } from "../../components/Molecules/Similar";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Constants from "expo-constants"
const QuestionAnalysis7 = function (props) {
  const {topicInfo, addHandler} = props;

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
    summit: styled.View`
      width: 85%;
      height: 70px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin-top: 13%;
    `,
    summitbtn: styled.View`
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    `,
    prevbtn: styled.View`
      width: 45%;
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
      width: 45%;
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
    bar: styled.View`
      width:100%;
      height:2px;
      background: #47C4EE;
      border: 1px solid #47C4EE;
      border-radius:5px;
    `,
    nav: styled.View`
      width: 100%;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction : row;
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
    wrap: styled.View`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-flow: column;
    align-items: center;
    border-radius: 6px;
  `,
  };
  const color = ["#48A3FF", "#00B93A" , "#FFC200" ]
  return (
    <Styled.wrap>
      {Object.keys(topicInfo).map((v,idx)=>{ return(
        <Similar id={v} th={idx+1} number={topicInfo[v]} color={color[idx]} addHandler={addHandler} />
      )})}
    </Styled.wrap>

  );
};
export { QuestionAnalysis7 };
