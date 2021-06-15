import React from "react";
import styled from "styled-components/native";
import { Text, TouchableWithoutFeedback} from "react-native"
const Styled = {
  btnbox: styled.View`
    width: 100%;
    flex : 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-flow: column;
  `,
  btnboxa: styled.TextInput`
    width: 85%;
    height: 30px;
    background-color: #fff;
    border: 1px solid #D6DDED;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:12px;
    font-weight: 600;
    color: #000;
  `,
  btnboxb: styled.View`
    width: 85%;
    height: 30px
    border: 1px solid #48a3ff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #48a3ff;
    color: #fff;
    font-size: 12px;
    margin-bottom: 5px;
    margin-top : 5px;
  `,
};
const CreateBtn = function (props) {
  const {createHandler, testPaperName, setTestPaperName} = props
  return (
    <Styled.btnbox>
      <Styled.btnboxa
       placeholder=" 시험지 이름을 입력하세요. "
       value={testPaperName}
       onTextChange={text=>setTestPaperName(text)}
      >
      </Styled.btnboxa>
      <TouchableWithoutFeedback onPress={createHandler}>
        <Styled.btnboxb>
          <Text>시험지 생성하기</Text>
        </Styled.btnboxb>
      </TouchableWithoutFeedback>
    </Styled.btnbox>
  );
};
export { CreateBtn };
