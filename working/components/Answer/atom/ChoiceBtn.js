import React from "react";
import styled from "styled-components";

const Styled = {
  ChoiceBtnText: styled.Text`
    font-size: 16px;
    font-weight: 400;
    color: #1b2c49;
  `,
};
const ChoiceBtn = (props) => {
  const { color, number, setExamNumber, idx,ExamNumber } = props;
  const ChoiceBtn = styled.TouchableOpacity`
    width: 28px;
    height: 28px;
    border-radius: 25px;
    border: 1px solid #707070;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: ${color ? "#95A7FF" : "#fff"};
  `;
  return (
    <ChoiceBtn
      onPress={() => {
        var temp = [...ExamNumber];
        temp[idx] = number;
        setExamNumber(temp);
      }}
    >
      <Styled.ChoiceBtnText>{number}</Styled.ChoiceBtnText>
    </ChoiceBtn>
  );
};
export default ChoiceBtn;
