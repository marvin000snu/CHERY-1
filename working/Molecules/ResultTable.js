import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import styled from "styled-components/native";

import ResultAnalysisBox from "../Atom/ResultAnalysisBox";
const Styled = {
  table: styled.View`
    margin-top: ${hp(1.5)}px;
    align-items: flex-end;
    flex: 1;
  `,
  tableText: styled.Text`
    width:25%;
    color: white;
    text-align: center;
    font-size: ${hp(1.8)}px;
    font-weight: bold;
  `,
  tableIndex: styled.View`
    background-color: #5571ff;
    color: white;
    width: ${wp(93)};
    height: ${hp(4)}px;
    flex-flow: row;
    justify-content: space-between;
    border: solid 1px #999;
    border-radius: ${hp(2)}px;
    align-items: center;
    padding-left: ${wp(2)}px;
    padding-right: ${wp(2)}px;
    margin-top: ${hp(1)}px;
  `,
  tableContents: styled.View`
    align-items: center;
  `,
};

const nextHandler = () => {
};

const ResultTable = (props) => {
  const { info, userName,navigation, setCode, setModalVisible } = props;
  const buttonPress = () => {
    alert("buttonPress");
  };

  const startNowHandler = () => {
    navigation.navigate("DiagnosticPage1");
  };

  let Rows = info.map((v, idx) => {
    return <ResultAnalysisBox key={idx} QCode={v.code} timeSpent={v.duration} difficulty={v.difficulty} ox={v.correct == 1} userName={userName} navigation={navigation} setCode={setCode} setModalVisible={setModalVisible}/>;
  });
  return (
    <Styled.table>
      <Styled.tableIndex>
        <Styled.tableText> 문항코드 </Styled.tableText>
        <Styled.tableText>결과</Styled.tableText>
        <Styled.tableText>소요시간</Styled.tableText>
        <Styled.tableText>난이도</Styled.tableText>
      </Styled.tableIndex>
      <Styled.tableContents>{Rows}</Styled.tableContents>
    </Styled.table>
  );
};

export default ResultTable;
