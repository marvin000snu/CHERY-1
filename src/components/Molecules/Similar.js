import React from "react";
import styled from "styled-components/native";
const Similar = function (props) {
    const { th, number, color, addHandler,id} = props;
    const Styled = {
        box: styled.View`
      width: 90%;
      height: 122px;
      background-color: #f7f9fd;
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-flow: column;
      maxHeight : 33%;
    `,
        p: styled.Text`
      color: #1b2c49;
      font-size: 17px;
    `,
        h1: styled.Text`
      color: ${props => props.color};
      font-size: 28px;
      font-weight: 500;
    `,
        btn: styled.TouchableOpacity`
      width: 70%;
      height: 30px;
      color: #fff;
      font-size:12px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color:#8E5FFA;
      border-radius:10px;
      margin-bottom:10px;
    `,
        btnText: styled.Text`
    color: #fff;
    font-size:16px;
    `
    };
    return (
        <Styled.box>
            <Styled.p>{th}순위 유사문항 유사도</Styled.p>
            <Styled.h1 color={color}>{number}</Styled.h1>
            <Styled.btn onPress={()=>{addHandler(id, 0)}}><Styled.btnText>문항 담기</Styled.btnText></Styled.btn>
        </Styled.box>
    );
};
export { Similar };
