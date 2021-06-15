import React from "react";
import styled from "styled-components/native";

const PhoneCertifyCheck = function (props) {
  const inputTitle = props.inputTitle;
  const Styled = {
    wrap: styled.View`
      width: 80%;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
    `,
    name: styled.Text`
      width: 100%;
      height: 35%;
      margin-bottom: 8px;
      font-size:12px;
    `,
    inputWrap: styled.View`
        width:100%;
        height:65%;
        display:flex;
        justify-content: space-between;
        flex-direction : row;
    `,
    input: styled.TextInput`
      width: 65%;
      height: 100%;
      border-radius: 10px;
      border: 2px solid #e6ecef;
    `,
    send: styled.Text`
      background-color: #F3F3F3;
      border: 2px solid #F3F3F3;
      font-size: 12px;
      width: 28%;
      height: 100%;
      border-radius: 5px;
      color:#A6ADB7;
      text-align : center;
      line-height: 30px;
    `,
  };

  return (
    <Styled.wrap>
      <Styled.name>{inputTitle}</Styled.name>
      <Styled.inputWrap>
        <Styled.input></Styled.input>
        <Styled.send>확인</Styled.send>
      </Styled.inputWrap>
    </Styled.wrap>
  );
};
export { PhoneCertifyCheck };
