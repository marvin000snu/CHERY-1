import React from "react";
import styled from "styled-components";
import ChoiceBtn from "./atom/ChoiceBtn";

const Styled = {
  AnswerBox: styled.View`
    width: 100%;
    height: 35px;
    background-color: red;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
  `,
  ExamNumberBox: styled.View`
    width: 65px;
    height: 100%;
    background-color: #d2deff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  ExamNumber: styled.Text`
    font-family: NotoSansKR-Bold;
    font-weight: bold;
    color: #1b2c49;
    font-size: 16px;
  `,
  ChoiceBox: styled.View`
    width: 280px;
    height: 100%;
    background-color: #eff3ff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  `,
};
const AnswerChoice = (props) => {
  const { setExamNumber, number, ExamNumber,select } = props;
  const numberList = [1, 2, 3, 4, 5];
  return (
    <Styled.AnswerBox>
      <Styled.ExamNumberBox>
        <Styled.ExamNumber>Q{number}</Styled.ExamNumber>
      </Styled.ExamNumberBox>
      <Styled.ChoiceBox>
        {numberList.map((v) => {
          return <ChoiceBtn number={v} color={v==select} setExamNumber={setExamNumber} idx={number-1} ExamNumber={ExamNumber} />;
        })}
      </Styled.ChoiceBox>
    </Styled.AnswerBox>
  );
};
export default AnswerChoice;
