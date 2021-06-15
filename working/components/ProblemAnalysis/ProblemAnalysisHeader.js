import React from "react";
import styled from "styled-components";
import PrevImg from "../../svg/PrevImg";
import Nav from "./atom/Nav";
const Styled = {
  Header: styled.View`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    border-bottom-width: 1px;
    border-color: #cdcdcd;
  `,
  ProblemNumberWrap: styled.View`
    width: 100%;
    height: 30px;
    border-bottom-width: 2px;
    border-color: #5571ff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  `,
  PrevBtn: styled.TouchableOpacity`
    width: auto;
    height: auto;
    margin-left: 15px;
  `,
  MainTextBox: styled.View`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  ProblemNumber: styled.Text`
    font-family: NotoSansKR-Bold;
    font-weight: 400;
    font-size: 18px;
    color: #1b2c49;
  `,
  Difficulty: styled.View`
    width: 60px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: #5571ff;
    border-radius: 12px;
    margin-left: 10px;
  `,
  DifficultyText: styled.Text`
    font-family: NotoSansKR-Bold;
    font-weight: 500;
    font-size: 13px;
    color: #fff;
  `,
  None: styled.View`
    width: auto;
    height: auto;
  `,
  NavWrap: styled.View`
    height: 35px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  Nav: styled.TouchableOpacity`
    width: 33.3%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `,
};
const ProblemAnalysisHeader = (props) => {
  const { NavColor, setNavColor, ProblemNumber,backHandler } = props;
  const PasswordCheck = ["Question Information", "Explanation paper", "Vocabulary"]
  return (
    <Styled.Header>
      <Styled.ProblemNumberWrap>
        <Styled.PrevBtn onPress={backHandler}>
          <PrevImg />
        </Styled.PrevBtn>
        <Styled.MainTextBox>
          <Styled.ProblemNumber>{ProblemNumber}</Styled.ProblemNumber>
          <Styled.Difficulty>
            <Styled.DifficultyText>Hard</Styled.DifficultyText>
          </Styled.Difficulty>
        </Styled.MainTextBox>
        <Styled.None />
      </Styled.ProblemNumberWrap>
      <Styled.NavWrap>
        {PasswordCheck.map((v, idx) => {
          return <Nav text={v} NavColor={NavColor} setNavColor={setNavColor} index={idx} />;
        })}
      </Styled.NavWrap>
    </Styled.Header>
  );
};
export default ProblemAnalysisHeader;
