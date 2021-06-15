import React from "react";
import styled from "styled-components/native";

const Table = function (props) {
  const { wrongNum ,type, wrongPercent, choice, right } = props;

  const Styled = {
    tablebody: styled.View`
      width: 97%;
      height: 33px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom-width: 1px;
      border-bottom-color: #B2B8C2;
      flex-direction :row;
    `,
    td1: styled.Text`
      width: 25%;
      height: 100%;
      text-align: center;
      line-height: 33px;
      font-size: 12px;
      display : flex;
      justify-content: center;
      align-items: center;
    `,
    td2: styled.Text`
      width: 15%;
      height: 100%;
      display: flex;
      text-align: center;
      line-height: 33px;
      font-size: 12px;
    `,
    td3: styled.Text`
      width: 20%;
      height: 100%;
      text-align: center;
      line-height: 33px;
      font-size: 12px;
    `,
    border: styled.View`
      width: 100%;
      height: 70%;
      border-radius: 6px;
      background-color: #e9eff2;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    borderText : styled.Text`
    font-size: 12px;
    color: #768092;
    `,
    td1border :styled.View`
    display : flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 100%;
    `,
  };
  return (
    <Styled.tablebody>
      <Styled.td1border>
        <Styled.border><Styled.borderText>{wrongNum}</Styled.borderText></Styled.border>
      </Styled.td1border>
      <Styled.td2>{type}</Styled.td2>
      <Styled.td1>{wrongPercent}%</Styled.td1>
      <Styled.td3>{choice}번</Styled.td3>
      <Styled.td2>{right}</Styled.td2>
    </Styled.tablebody>
  );
};
export { Table };