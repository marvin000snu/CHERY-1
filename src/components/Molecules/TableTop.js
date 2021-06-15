import React from "react";
import styled from "styled-components/native";

const TableTop = function () {
    const Styled = {
      tableTop: styled.View`
      width:94%;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction:row;
      border-bottom-width: 1px; 
      border-bottom-color: #eee;
    `,
        tr1: styled.Text`
      width: 25%;
      height: 100%;
      display: flex;
      line-height: 30px;
      text-align : center;
      font-size: 13px;
      color:#1B2C49;
      font-weight:400;
    `,
        tr2: styled.Text`
      width: 15%;
      height: 100%;
      line-height: 30px;
      text-align : center;
      font-size: 13px;
      color:#1B2C49;
      font-weight:400;
      `,
        tr3: styled.Text`
      width: 20%;
      height: 100%;
      line-height: 30px;
      text-align : center;
      font-size: 13px;
      color:#1B2C49;
      font-weight:400;
    `,
    };
    return (
        <Styled.tableTop>
            <Styled.tr1>오답문항</Styled.tr1>
            <Styled.tr2>유형</Styled.tr2>
            <Styled.tr1>평균 오답률</Styled.tr1>
            <Styled.tr3>선택한 답</Styled.tr3>
            <Styled.tr2>정답</Styled.tr2>
        </Styled.tableTop>

    )
};
export { TableTop };