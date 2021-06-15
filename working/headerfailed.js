import React, { useRef } from "react";
import styled from "styled-components/native";
import { View, StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import * as Progress from "react-native-progress";
import ProgressBar from "../src/utils/progress"

const Styled = {
  Title: styled.View`
    width: ${wp(100)};
    height: ${hp(30)};
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  `,
  TitleWrap: styled.View`
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin-top: ${hp(4)}px;
  `,
  H1: styled.Text`
    font-size: ${wp(4)}px;
    text-align: center;
    font-weight: normal;
    color: white;
    line-height: ${wp(11)}px;
  `,
  H2: styled.Text`
    font-size: ${wp(7)}px;
    font-weight: normal;
    color: white;
    text-align: center;
  `,
  word: styled.View`
    width: 100%;
    margin-top: 10px;
    min-height: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row;
  `,
  headText: styled.Text`
    color: white;
  `,
  bar: styled.View`
    flex-flow: column;
    justify-content: flex-end;
  `,
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 15,
    padding: 15,
    borderColor: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  buttonContainer: {
    marginTop: 5,
  },
  label: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
  },
});


const TestTitle = (props) => {
  const { Title, SubTitle, value,progress } = props;

  const barWidth = Dimensions.get("screen").width - 30;

  return (
    <Styled.Title>
      <Styled.TitleWrap>
        <Styled.H1>{Title}</Styled.H1>
        <Styled.H2>{SubTitle}</Styled.H2>
      </Styled.TitleWrap>
      <View style={styles.container}>
        <Styled.bar>
          <ProgressBar barWidth={barWidth} barHeight={10} borderColor="white"  progress={progress} fill="white"/>
        </Styled.bar>
        <Styled.word>
          <Styled.headText>AI가 실력을 분석중 입니다.</Styled.headText>
          <Styled.headText>{value}%</Styled.headText>
        </Styled.word>
      </View>
    </Styled.Title>
  );
};

export default TestTitle;
