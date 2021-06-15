import React from "react";
import styled from "styled-components/native";
import { Sentence } from "../../components/Molecules/Sentence";
import { StyleSheet, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Constants from "expo-constants";
import GlobalStyled from "../../style/GlobalStyled";
const Styled = {
  body: styled.View`
  width: ${wp(90)}
    height: ${hp(100) - Constants.statusBarHeight}px;
    background-color: #f0f3f8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column;
    margin-top: ${Constants.statusBarHeight}px;
  `,
  section: styled.View`
    width: 96%;
    height: 85%;
    background-color: #fff;
    margin-top: 17px;
    border: 2px solid #707070;
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    align-items: center;
    border-radius: 6px;
  `,
  bar: styled.View`
    width: 100%;
    height: 2px;
    background: #47c4ee;
    border: 1px solid #47c4ee;
    border-radius: 5px;
  `,
  summit: styled.View`
    width: 100%;
    height: 5%;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 30px;
  `,
  summitbtn: styled.View`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  `,
  prevbtn: styled.View`
    width: 40%;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #121b50;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  `,
  nextbtn: styled.View`
    width: 40%;
    height: 100%;
    background-color: #d4d7dc;
    border-radius: 5px;
    border: 1px solid #d4d7dc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #fff;
  `,
  nav: styled.View`
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `,
  navlist: styled.Text`
    width: 21%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: 400;
    color: #a4b6d6;
  `,
  navlist1: styled.Text`
    width: 14%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: 400;
    color: #a4b6d6;
  `,
  navlist2: styled.Text`
    width: 22%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: 500;
    color: #a4b6d6;
  `,
  wrap: styled.View`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    align-items: center;
    border-radius: 6px;
  `
};
const QuestionAnalysis9 = function (props) {
  const { sentence, addHandler, result } = props;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight
    },
    scrollView: {
      backgroundColor: "pink",
      marginHorizontal: 20,
      width: wp(91),
      height: "70%"
    },
    text: {
      fontSize: 42
    }
  });
  return (
    <Styled.wrap>
      <ScrollView styled={styles.scrollView} style={{flex:1}} contentContainerStyle={{alignItems: "center"}} showsVerticalScrollIndicator= {false}>
        <GlobalStyled.ViewCol width={wp(90)}>
          {sentence.map((v, idx) => {
            return (
              <Sentence
                num={idx + 1}
                main={v}
                id={idx}
                addHandler={() => {
                  addHandler(result[idx], 1);
                }}
              />
            );
          })}
        </GlobalStyled.ViewCol>
      </ScrollView>
    </Styled.wrap>
  );
};
export { QuestionAnalysis9 };
