import React from "react";
import styled from "styled-components/native";

const Sentence = function (props) {
  const { num, main, addHandler } = props;
  const Styled = {
    wrap: styled.View`
      width: 95%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      margin-top: 15px;
      padding: 15px;
      border-bottom-width: 1px;
      border-bottom-color: #dbe5ea;
    `,
    titlebox: styled.View`
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    `,
    title: styled.Text`
      width: auto;
      height: 20px;
      font-size: 16px;
      font-weight: 500;
      color: #1b2c49;
    `,
    btn: styled.TouchableOpacity`
      border-radius: 6px;
      width: 170px;
      height: 30px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 8px;
      background-color: #282FB0;
      padding: 5px;
    `,
    BtnText: styled.Text`
      font-size: 16px;
      color: white;
    `,
    main: styled.View`
      width: 100%;
      height: auto;
      padding: 5px 10px 10px 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      border-radius: 10px;
      background-color: #f7f9fd;
    `,
    MainText: styled.Text`
      color: #768092;
      font-size: 16px;
      font-weight: 400;
      width: 100%;
    `
  };
  return (
    <Styled.wrap>
      <Styled.titlebox>
        <Styled.title>문장 {num}</Styled.title>
        <Styled.btn onPress={addHandler}>
          <Styled.BtnText>유사구문 포함 문항 담기</Styled.BtnText>
        </Styled.btn>
      </Styled.titlebox>
      <Styled.main
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5
        }}
      >
        <Styled.MainText>{main}</Styled.MainText>
      </Styled.main>
    </Styled.wrap>
  );
};

export { Sentence };
