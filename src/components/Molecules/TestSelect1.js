import React from "react";
import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native"
const TestSelect1 = function (props) {
  const { SelectTitle, selected, selectedHandler } = props;
  const StyledSelect = {
    wrap: styled.View`
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
    `,
    title: styled.Text`
      width: 90%;
      height: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 13px;
      margin-bottom: 10px;
      color: #1b2c49;
    `,
    selectBtn: styled.View`
      width: 30%;
      height: 35px;
      border-radius: 4px;
      font-size:13px;
      color: #1b2c49;
      display: flex;
      justify-content: center;
      align-items: center;
      border:1px solid ${props => props.id === selected ? "#48a3ff" : "#E6ECEF"};
    `,
    Btnbox: styled.View`
      width:93%;
      height: 35px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;

    `,
    BtnText: styled.Text`
    font-size:13px;
    color: ${props => props.id === selected ? "#48a3ff" : "#E6ECEF"};
    width: 100%;
    line-height : 35px;
    text-align : center;
    `
  };

  return (
    <StyledSelect.wrap>
      <StyledSelect.title>{SelectTitle}</StyledSelect.title>
      <StyledSelect.Btnbox>
        <TouchableWithoutFeedback onPress={()=>{selectedHandler(1)}}>
          <StyledSelect.selectBtn id={1}><StyledSelect.BtnText id={1}>매일학습 시험지</StyledSelect.BtnText></StyledSelect.selectBtn>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>{selectedHandler(2)}}>
          <StyledSelect.selectBtn id={2}><StyledSelect.BtnText id={2}>약점학습 시험지</StyledSelect.BtnText></StyledSelect.selectBtn>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>{selectedHandler(3)}}>
          <StyledSelect.selectBtn id={3}><StyledSelect.BtnText id={3}>문항분석 시험지</StyledSelect.BtnText></StyledSelect.selectBtn>
        </TouchableWithoutFeedback>
      </StyledSelect.Btnbox>
    </StyledSelect.wrap>
  );
};
export { TestSelect1 };
