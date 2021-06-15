import React from "react";
import styled from "styled-components/native";

const WordBtn = function (props) {
    const { word1 } = props;

    const Styled = {

        wrap: styled.View`
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right : 5px;
      margin-bottom : 3px;
    `,
        word: styled.View`
      width: auto;
      height: 18px;
      background-color: #e9eff2;
      border-radius: 10px;
      padding: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #768092;
    `,
        BtnText: styled.Text`
        font-size: 12px;
        color: #768092;
    `
    };
    return (
        <Styled.wrap>
            <Styled.word><Styled.BtnText>{word1}</Styled.BtnText></Styled.word>
        </Styled.wrap>
    );
};
export { WordBtn };
