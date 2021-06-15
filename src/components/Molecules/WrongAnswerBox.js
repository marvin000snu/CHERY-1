import React, { useState } from "react";
import styled from "styled-components/native";
import { WrongProblem } from "../Atoms/WrongProblem";
import { SavedProblem } from "../Atoms/SavedProblem";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import GlobalStyled from "../../style/GlobalStyled";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
const WrongAnswerBox = function (props) {
  const { wrongList, setWrongList, savedList, setSavedList } = props;
  const Styled = {
    search: styled.View`
      width: 100%;
      height: 70px;
      background-color: #fff;
      border-radius: 10px 10px 0 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom-width: 2px;
      border-bottom-color: #dbe5ea;
    `,
    searchbar: styled.View`
      height: 36px;
      width: 160px;
      border: 1px solid #1b5ac2;
      background: #fff;
    `,
    input: styled.TextInput`
      font-size: 15px;
      width: 100px;
      padding: 7px;
      border: 0px;
      outline: none;
      background-color: #fff;
    `,
    searchbtn: styled.View`
      width: 30px;
      height: 100%;
      border: 0px;
      background: #a4b6d6;
      outline: none;
      color: #fff;
    `,
    wronganswerbox: styled.View`
      width: 100%;
      height: 100%;
      background-color: #fff;
      display: flex;
      justify-content: flex-start
      align-items: center;
      flex-flow: column;

    `,
    wronganswer: styled.View`
      width: 90%;
      height: 45%;
      background-color: #fff;
      margin-top: 15px;
      border-style: dashed;
      border-width: 2px;
      border-radius: 10px;
      border-color: #e9eff2;
    `,
    wronglist: styled.View`
      width: 100%;
      height: 53px;
      background-color: #fff;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      border-bottom-width: 1px;
      border-bottom-color: #e9eff2;
      font-size: 12px;
      font-weight: 400;
    `,
    wrongnumber: styled.View`
      width: 100%;
      flex: 1;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
    `,
    wrongnum: styled.View`
      width: 100%;
      height: 18px;
      margin-top: 15px;
      background-color: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
    `,
    p1: styled.Text`
      font-size: 12px;
      font-weight: 400;
    `,
    p: styled.Text`
      font-size: 12px;
      font-weight: 400;
      background-color: #e9eff2;
      color: #768092;
      padding: 3.5px;
      border-radius: 10px;
    `,
    plus: styled.View`
      width: 13px;
      height: 13px;
      background-color: red;
    `,
    testnum: styled.View`
      width: 50px;
      height: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
    `,
    testbox: styled.View`
      width: 100%;
      height: 18px;
      margin-top: 15px;
      background-color: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
    `,
    test: styled.View`
      width: 100%;
      height: 18px;
      margin-top: 15px;
      background-color: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
    `,
    putbtn: styled.TouchableOpacity`
      width: 80%;
      height: 25px;
      background-color: #a4b6d6;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      font-size: 13px;
      margin: 2.5px;
    `,
    p3: styled.Text`
      font-size: 13px;
      font-weight: 600;
    `,
    p4: styled.Text`
      font-size: 11px;
      font-weight: 500;
      margin-top: 5px;
      color: #a4b6d6;
    `,
    putbtnText: styled.Text`
      width: 100%;
      text-align: center;
      color: white;
    `
  };
  const handleAddOnPress = (i) => {
    var temp = [...wrongList];
    setSavedList([...savedList, temp[i]]);
    temp.splice(i, 1);
    setWrongList(temp);
  };
  const handleDeleteOnPress = (i) => {
    var temp = [...savedList];
    setWrongList([...wrongList, temp[i]]);
    temp.splice(i, 1);
    setSavedList(temp);
  };
  const addAllHandler = () => {
    setSavedList([...savedList, ...wrongList]);
    setWrongList([]);
  };

  const deleteAllHandler = () => {
    setSavedList([]);
    setWrongList([...savedList, ...wrongList]);
  };
  return (
    <Styled.wronganswerbox>
      <Styled.wronganswer>
        <Styled.wronglist>
          <Styled.p3>오답 문항</Styled.p3>
          <Styled.p4>
            최근 틀린 문항 목록입니다. 약점학습 문항을 담아주세요.
          </Styled.p4>
        </Styled.wronglist>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator= {false}>
          <Styled.wrongnumber>
            {wrongList.map((v, idx) => {
              return (
                <WrongProblem
                  key={idx}
                  id={idx}
                  testName={v.title}
                  testNum={v.code}
                  handleOnPress={handleAddOnPress}
                ></WrongProblem>
              );
            })}
          </Styled.wrongnumber>
        </ScrollView>
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: "#dbe5ea",
            width: "100%",
            height: hp(4),
            justifyContent: "center",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <GlobalStyled.ViewRow
            as={TouchableOpacity}
            style={{
              flex: 1,
              backgroundColor: "#6F87FF",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10
            }}
            onPress={addAllHandler}
          >
            <Text style={{ color: "white", fontSize: 18 }}>모두담기</Text>
          </GlobalStyled.ViewRow>
        </View>
      </Styled.wronganswer>
      <Styled.wronganswer>
        <Styled.wronglist>
          <Styled.p3>담긴 문항</Styled.p3>
          <Styled.p4>약점학습을 진행할 문항입니다.</Styled.p4>
        </Styled.wronglist>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator= {false}>
          <Styled.wrongnumber>
            {savedList.map((v, idx) => {
              return (
                <SavedProblem
                  key={idx}
                  id={idx}
                  testName={v.title}
                  testNum={v.code}
                  handleOnPress={handleDeleteOnPress}
                ></SavedProblem>
              );
            })}
          </Styled.wrongnumber>
        </ScrollView>
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: "#dbe5ea",
            width: "100%",
            height: hp(4),
            justifyContent: "center",
            display: "flex",
            flexDirection: "row"
          }}
        >
          <GlobalStyled.ViewRow
            as={TouchableOpacity}
            onPress={deleteAllHandler}
            style={{
              flex: 1,
              backgroundColor: "#6F87FF",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>모두제거</Text>
          </GlobalStyled.ViewRow>
        </View>
      </Styled.wronganswer>
    </Styled.wronganswerbox>
  );
};
export { WrongAnswerBox };
