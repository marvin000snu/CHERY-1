import React from "react";
import styled from "styled-components";

const Styled = {
  AnswerWrap: styled.View`
    width: 90%;
    height: auto;
    margin: 15px 0px 15px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  `,
  AnswerTitle: styled.Text`
    font-family: NotoSansKR-Bold;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
    display: flex;
    color: #1b2c49;
  `,
  AnswerBasis: styled.Text`
    font-size: 17px;
    font-weight: 400;
    font-family: NotoSansKR-Bold;
    color: #1b2c49;
    line-height: 25;
  `,
};
const Answer = (props) => {
  const { answerExplanation } = props;
  return (
    <Styled.AnswerWrap>
      <Styled.AnswerTitle>{answerExplanation[0]}</Styled.AnswerTitle>
      <Styled.AnswerBasis>{answerExplanation[1]}</Styled.AnswerBasis>
    </Styled.AnswerWrap>
  );
};
export default Answer;
