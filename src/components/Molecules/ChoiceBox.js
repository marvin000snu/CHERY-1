import React from "react";
import styled from "styled-components/native";
import { TouchableWithoutFeedback } from 'react-native'
const ChoiceBox = function (props) {
  // const front = props.front
  // const back = props.back
  const { front, back, frontHandler, backHandler, activeInfo } = props
  const frontInfo = activeInfo.front
  const backInfo = activeInfo.back

  const Styled = {
    btnbox: styled.View`
      width: 100%;
      height: 67px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction : row;
    `,
    button: styled.View`
      width: 45%;
      height: 40px;
      background-color: #fff;
      border: 2px solid ${props => props.active ? "#bfcce2" : "#5471FF"};;
      border-radius: 10px;
      color: #bfcce2;
      display: flex;
      justify-content: center;
      align-items: center;
    `, buttonText: styled.Text`
    font-size: 18px;
      color: ${props => props.active ? "#bfcce2" : "#5471FF"};
  `, blank : styled.View`
    width : 10%;
  `
  };
  return (
    <Styled.btnbox>
      <TouchableWithoutFeedback onPress={frontHandler}>
        <Styled.button active={frontInfo}><Styled.buttonText active={frontInfo}>#{front}</Styled.buttonText></Styled.button>
      </TouchableWithoutFeedback>
      <Styled.blank/>
      <TouchableWithoutFeedback onPress={backHandler}>
        <Styled.button active={backInfo}><Styled.buttonText active={backInfo}>#{back}</Styled.buttonText></Styled.button>
      </TouchableWithoutFeedback>
    </Styled.btnbox>
  );
};

export { ChoiceBox }