import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAPI from "../../hooks/useAPI";
import jwt_decode from "jwt-decode";
import GlobalStyled from "../../style/GlobalStyled";
const diagnosticTestPage0 = ({ navigation }) => {
  const [API] = useCallback(useAPI(), []);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        const token = await AsyncStorage.getItem("@userToken");
        const deCode = jwt_decode(token);
        setUserName(deCode["cognito:username"]);
      } catch (err) {}
    };
    useEffectAsyncFunction();
  }, []);
  const Styled = {
    body: styled.View`
      width: 100%;
      height: ${hp(100)}px;
      background-color: #f4f5f7;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
    `,
    section: styled.View`
      height: ${hp(100) - Constants.statusBarHeight}px;
      margin-top: ${Constants.statusBarHeight}px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
    `,
    SelectGrade: styled.Text`
      width: 90%;
      height: 40px;
      font-size: 28px;
      font-weight: bold;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #5471ff;
      margin-top: ${hp(8)}px;
    `,
    SelectBtn: styled.View`
      width: 90%;
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-flow: column;
      border-radius: 10px;
    `,
    Btn: styled.View`
      width: 100%;
      height: 12%;
      border-radius: 10px;
      border: ${(props) => (props.id === selected ? "2px" : "1px")} solid
        ${(props) => (props.id === selected ? "#5471FF" : "white")};
      text-align: center;
      line-height: 66px;
      font-size: 20px;
      font-weight: 400;
      color: ${(props) => (props.id === selected ? "#5471FF" : "#B2B8C2")};
      background-color: white;
      shadow-color: ${(props) => (props.id === selected ? "#5471FF" : "#000")};
      shadow-opacity: 0.27;
      shadow-radius: 5px;
      elevation: 6;
      shadow-offset: {
        height: -30;
      }
      justify-content: center;
    `,
    BtnText: styled.Text`
      color: ${(props) => (props.id === selected ? "#5471FF" : "#B2B8C2")};
      font-size: 20px;
      width: 100%;
      text-align: center;
    `,
    BottomBtn: styled.View`
      width: 70%;
      height: 50px;
      background-color: #6f87ff;
      border-radius: 25px;
      margin-bottom: 10px;
    `,
    Text: styled.Text`
      color: #fff;
      text-align: center;
      line-height: 50px;
      font-weight: bold;
      font-size: 18px;
    `
  };
  const [selected, setSelected] = useState(-1);
  const selectHandler = (i) => {
    setSelected(i);
  };
  const nextHandler = async () => {
    try {
      if (selected === -1) {
        alert("학년을 선택해주세요.");
      } else {
        const params = {
          userId: userName,
          body: {
            grade: ["1학년", "2학년", "3학년", "N수생"][selected - 1]
          }
        };
        await API.test.insertGrade(params);
        await AsyncStorage.setItem("@grade", String(selected));
        navigation.navigate("DiagnosticPage2");
      }
    } catch (err) {}
  };
  return (
    <Styled.body>
      <Styled.section>
        <GlobalStyled.ViewCol
          width="91%"
          height="95%"
          justifyContent="flex-start"
          style={{
            borderRadius: 10,
            shadowOffset: {
              width: 0,
              height: 0
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            backgroundColor: "white"
          }}
        >
          <Styled.SelectGrade>학년을 선택해 주세요.</Styled.SelectGrade>
          <Styled.SelectBtn>
            <TouchableWithoutFeedback
              onPress={() => {
                selectHandler(0);
              }}
            >
              <Styled.Btn id={0}>
                <Styled.BtnText id={0}>예비 고등학생</Styled.BtnText>
              </Styled.Btn>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => {
                selectHandler(1);
              }}
            >
              <Styled.Btn id={1}>
                <Styled.BtnText id={1}>고등 1학년</Styled.BtnText>
              </Styled.Btn>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => {
                selectHandler(2);
              }}
            >
              <Styled.Btn id={2}>
                <Styled.BtnText id={2}>고등 2학년</Styled.BtnText>
              </Styled.Btn>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => {
                selectHandler(3);
              }}
            >
              <Styled.Btn id={3}>
                <Styled.BtnText id={3}>고등 3학년</Styled.BtnText>
              </Styled.Btn>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => {
                selectHandler(4);
              }}
            >
              <Styled.Btn id={4}>
                <Styled.BtnText id={4}>N수생</Styled.BtnText>
              </Styled.Btn>
            </TouchableWithoutFeedback>
          </Styled.SelectBtn>
          <TouchableWithoutFeedback onPress={nextHandler}>
            <Styled.BottomBtn>
              <Styled.Text>다음</Styled.Text>
            </Styled.BottomBtn>
          </TouchableWithoutFeedback>
        </GlobalStyled.ViewCol>
      </Styled.section>
    </Styled.body>
  );
};

export { diagnosticTestPage0 };
