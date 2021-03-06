import React, {useCallback} from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Constants from "expo-constants";
import { Text, TouchableOpacity, ScrollView, Alert } from "react-native";
import GlobalStyled from "../../style/GlobalStyled";
import useAPI from "../../hooks/useAPI";

const QuestionAnalysis6 = function (params) {
  const { wordInfo, userName } = params;
  const [API] = useCallback(useAPI(), [])
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
    wordBox1: styled.View`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 95%;
      height: 33.33%;
      border-bottom-width: 1px;
      border-color: #b2b8c2;
      flex-wrap: wrap;
      margin-bottom: 15px;
      padding-bottom: 15px;
    `,
    wordtitle: styled.Text`
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #1b2c49;
      font-size: 17;
    `,
    wordBox2: styled.View`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: column;
      width: 95%;
      height: 33.33%;
      border-bottom-width: 1px;
      border-color: #b2b8c2;
      flex-wrap: wrap;
      margin-bottom: 15px;
      padding-bottom: 15px;
    `,
    wordBox3: styled.View`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: column;
      width: 95%;
      height: 33.33%;
      flex-wrap: wrap;
      margin-bottom: 15px;
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
    Wrap: styled.View`
      width: 20%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      flex-flow: column;
      align-items: center;
      border-radius: 6px;
    `,
  };
  const Word = ({ word }) => {
    return (
      <TouchableOpacity
        style={{
          height: 30,
          borderRadius: 15,
          backgroundColor: "#EAE1FC",
          justifyContent: "center",
          alignItems: "center",
          minWidth: 40,
          margin: 5,
        }}
        onPress={() => {
          addWord(word);
        }}
      >
        <Text style={{ marginLeft: 10, marginRight: 10 }}>{word}</Text>
      </TouchableOpacity>
    );
  };
  const addWord = (v) => {
    Alert.alert("????????? ??????", `${v}??? ???????????? ????????????????\n?????? ???????????? ?????? ????????? ???????????? ????????????.`, [
      { text: "??????" },
      {
        text: "??????",
        onPress: async () => {
          try {
            const params = {
              userId: userName,
              body: {
                voca: v,
              },
            };
            await API.voca.addVoca(params);
          } catch (err) {
            console.log(err.response.data);
          }
        },
      },
    ]);
  };
  return (
    <Styled.Wrap>
      <Styled.wordBox1>
        <Styled.wordtitle>1?????? ??????</Styled.wordtitle>
        <ScrollView style={{ flex: 1, width: wp(90), height: 100 }} showsVerticalScrollIndicator= {false}>
          <GlobalStyled.ViewRow width={wp(90)} style={{ flexWrap: "wrap" }}>
            {wordInfo.low.map((v) => {
              return <Word word={v}></Word>;
            })}
          </GlobalStyled.ViewRow>
        </ScrollView>
      </Styled.wordBox1>
      <Styled.wordBox2>
        <Styled.wordtitle>2?????? ??????</Styled.wordtitle>
        <ScrollView style={{ flex: 1, width: wp(90), height: 100 }} showsVerticalScrollIndicator= {false}>
          <GlobalStyled.ViewRow width={wp(90)} style={{ flexWrap: "wrap" }}>
            {wordInfo.mid.map((v) => {
              return <Word word={v}></Word>;
            })}
          </GlobalStyled.ViewRow>
        </ScrollView>
      </Styled.wordBox2>
      <Styled.wordBox3>
        <Styled.wordtitle>3?????? ??????</Styled.wordtitle>
        <ScrollView style={{ flex: 1, width: wp(90), height: 100 }} showsVerticalScrollIndicator= {false}>
          <GlobalStyled.ViewRow width={wp(90)} style={{ flexWrap: "wrap" }}>
            {wordInfo.high.map((v) => {
              return <Word word={v}></Word>;
            })}
          </GlobalStyled.ViewRow>
        </ScrollView>
      </Styled.wordBox3>
    </Styled.Wrap>
  );
};
export { QuestionAnalysis6 };
