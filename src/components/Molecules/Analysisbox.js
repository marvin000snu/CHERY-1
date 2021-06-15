import React from "react";
import styled from "styled-components/native";
const Analysisbox = function (props) {
    const {name, percent, predict} = props
  const Styled = {
    textBox: styled.View`
      width: 90%;
      height: 100px;
      font-size: 15px;
      color: #a4b6d6; 
      display: flex;
      flex-direction : column;
      align-items: center;
      justify-content : flex-start;
    `,
    text : styled.Text`
    font-size : 15px;
    color: #1B2C49;
    margin-top: 20px;
    
    `
  };
  return (
    <Styled.textBox>
      <Styled.text>이 문항의 예상 오답률은 {predict}%입니다. {"\n"}{"\n"}
        {name}님이 지금까지 틀린 문항의 평균 오답률은 {percent}%입니다.
      </Styled.text>
    </Styled.textBox>
  );
};
export { Analysisbox };
