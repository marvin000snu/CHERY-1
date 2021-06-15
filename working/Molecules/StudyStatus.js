import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { TouchableWithoutFeedback } from "react-native";
import { CircleStatus } from "./CircleStatus";
import StatusCircle from "../img/StatusCircle";
import Solved from "./Solved";

const Styled = {
  body: styled.View`
    margin-top: ${hp(2)};
    width: ${wp(100)};
    justify-content: flex-start;
    align-items: center;
  `,
  Title: styled.View`
    width: ${wp(40)};
    height: ${hp(4)};
    flex-flow: row;
    margin-bottom: ${hp(2)};
  `,
  titleText: styled.Text`
    font-size: ${wp(5)};
    color: black;
    font-family: NotoSansKR-Bold;
  `,
  moretext: styled.Text`
    margin-top: ${hp(0.7)};
    margin-left: ${wp(3)};
    width: ${wp(15)};
    height: ${hp(2.8)};
    border: solid;
    border-width: 1px;
    border-radius: ${hp(1.5)};
    border-color: #5571ff;
    text-align: center;
    font-size: ${hp(2)}px;
    color: #5571ff;
  `,
  graph: styled.View`
    width: ${wp(93)};
    height: ${hp(35)}px;
    display: flex;
    justify-content: space-between;
    flex-flow: row;
    background-color: white;
  `,
  barChart: styled.View`
    width: ${wp(50)};
    height: ${wp(50)};
    background-color: white;
    flex-flow: column;
    align-items: center;
  `,
  progressCircle: styled.View`
    width: ${wp(30)};
    flex-flow: column;
    height: ${hp(38)};
  `,
  leftHalf: styled.View`
    width: ${wp(50)};
  `,
  rightHalf: styled.View`
    height: ${hp(30)};
    flex-flow: column;
  `,
};
const StudyStatus = (props) => {
  const { data, navigation, allNum, weekNum, studyTime, direct } = props;
  const onMore = () => {
    navigation.navigate("Status");
  };
  const [myProgress, setMyProgress] = useState([data.grade1, data.grade2, data.grade3, data.swa, data.kice]);
  const [totalProgress, setTotalProgress] = useState([100, 100, 100, 100, 100]);
  const solvedList = ["수능", "평가원 기출문제", "경찰대/사관학교", "교육형 기출문제", "CHERY 자체문항"];
  const color = ["#9791DE", "#005088", "#8BA9D4", "#FFC8C8", "#F5948D"];
  useEffect(() => {
    setMyProgress([data.grade1, data.grade2, data.grade3, data.swa, data.kice]);
  }, [data]);
  return (
    <Styled.body>
      <Styled.graph>
        <Styled.leftHalf>
          <Styled.Title>
            <Styled.titleText> 나의 학습현황</Styled.titleText>
            {direct && (
              <TouchableWithoutFeedback onPress={onMore}>
                <Styled.moretext>more</Styled.moretext>
              </TouchableWithoutFeedback>
            )}
          </Styled.Title>
          <Styled.barChart>
            <CircleStatus myProgress={myProgress} totalProgress={totalProgress} colors={color} />
          </Styled.barChart>
        </Styled.leftHalf>
        <Styled.rightHalf>
          <Styled.progressCircle>
            <StatusCircle first="전체 문항" second={allNum + " 문항"} size={wp(25)}></StatusCircle>
            <StatusCircle first="이번주 문항" second={weekNum + " 문항"} size={wp(25)}></StatusCircle>
            <StatusCircle first="이번주 시간" second={String(Math.floor(studyTime / 60)) + "H" + String(studyTime % 60) + "M"} size={wp(25)}></StatusCircle>
          </Styled.progressCircle>
        </Styled.rightHalf>
      </Styled.graph>
      <Solved titleList={solvedList} numberList={myProgress} colors={color} />
    </Styled.body>
  );
};

export { StudyStatus };
