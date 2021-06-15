import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import AnswerChoice from "./components/Answer/AnswerChoice";
import { pure } from "recompose";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Styled = {
  background: styled.View`
    width: ${wp(100)};
    height: ${hp(100)};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
  `,
  Top: styled.View`
    width: ${wp(100)};
    height: 105px;
    background-color: #5571ff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
  `,
  TopTitle: styled.Text`
    font-family: NotoSansKR-Bold;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 17px;
  `,
  Bottom: styled.View`
    width: ${wp(100)};
    height: 80px;
    background-color: #5571ff;
    background-color: #5571ff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  `,
  SubmitBtn: styled.TouchableOpacity`
    width: 218px;
    height: 35px;
    background-color: #fff;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  `,
  SubmitBtnText: styled.Text`
    font-family: NotoSansKR-Bold;
    font-weight: 500;
    font-size: 18px;
    color: #5571ff;
  `,
  Mid: styled.View`
    width: ${wp(100)};
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  `,
  AnswerWrap: styled.View`
    width: ${wp(90)};
    height: auto;
    background-color: #fff;
    margin-top: 30px;
  `,
};
const AnswerSheet = (props) => {
  const { length } = props;
  const [ExamNumber, setExamNumber] = useState([]);
  useEffect(() => {
    const setting = async () => {
      var temp = await AsyncStorage.getItem("@answer");
      temp = temp ? temp : new Array(length).fill(null);
      setExamNumber(JSON.parse(temp));
    };
    setting();
  }, []);
  const { closeHandler } = props;
  return (
    <Styled.background>
      <Styled.Top>
        <Styled.TopTitle>답안을 입력해 주세요.</Styled.TopTitle>
      </Styled.Top>
      <Styled.Mid>
        <Styled.AnswerWrap>
          {ExamNumber.map((v, idx) => {
            return <AnswerChoice number={idx + 1} setExamNumber={setExamNumber} index={idx} select={v} ExamNumber={ExamNumber}/>;
          })}
        </Styled.AnswerWrap>
      </Styled.Mid>
      <Styled.Bottom>
        <Styled.SubmitBtn
          onPress={async () => {
            closeHandler();
            await AsyncStorage.setItem("@answer", JSON.stringify(ExamNumber));
          }}
        >
          <Styled.SubmitBtnText>답안 제출</Styled.SubmitBtnText>
        </Styled.SubmitBtn>
      </Styled.Bottom>
    </Styled.background>
  );
};
export default pure(AnswerSheet);
