import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import useAPI from "../src/hooks/useAPI";
import PrevNextBtn from "../src/components/Molecules/PrevNextBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
const DiagnosticPage1 = ({ navigation }) => {
  const [API] = useCallback(useAPI(), []);
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
      } catch (err) {}
    };
    useEffectAsyncFunction();
  }, []);

  const Styled = {
    background: styled.View`
      background-color: #5571ff;
      width: ${wp(100)};
      height: ${hp(100)};
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    `,
    section: styled.View`
      height: ${hp(70)}px;
      margin-top: ${hp(3)}px;
      width: ${wp(90)};
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
      background-color: white;
      border-radius: 20px;
      shadow-opacity: 0.25;
      shadow-radius: 3.84;
      elevation: 5;
    `,
    SelectBtn: styled.View`
      margin-top: ${hp(5)}px;
      width: ${wp(80)}px;
      min-height: ${hp(50)}px;
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
      border-radius: 10px;
    `,
    Btn: styled.View`
      margin-bottom: ${hp(2)}px;
      width: ${wp(60)}px;
      min-width: 200px;
      height: ${hp(8)}px;
      min-height: 60px;
      border-radius: 10px;
      border: ${(props) => (props.id === selected ? "2px" : "1px")} solid ${(props) => (props.id === selected ? "#5571FF" : "white")};
      text-align: center;
      font-size: 20px;
      font-weight: 400;
      color: ${(props) => (props.id === selected ? "#5571FF" : "#B2B8C2")};
      background-color: white;
      shadow-color: ${(props) => (props.id === selected ? "#5571FF" : "#000")};
      shadow-opacity: 0.27;
      shadow-radius: 5px;
      elevation: 6;
      shadow-offset: {
        height: 10px;
      }
      justify-content: center;
    `,
    BtnText: styled.Text`
      color: ${(props) => (props.id === selected ? "#5571FF" : "#B2B8C2")};
      font-size: ${wp(6)}px;
      text-align: center;
    `,
    header: styled.View`
      width: ${wp(100)};
      height: ${hp(20)};
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
    `,
    H1: styled.Text`
      font-size: ${wp(6)}px;
      text-align: center;
      font-weight: bold;
      color: white;
      line-height: ${wp(11)}px;
    `,
    H2: styled.Text`
      font-size: ${wp(4.5)}px;
      font-weight: normal;
      color: white;
      text-align: center;
    `,
  };

  const [selected, setSelected] = useState(-1);

  const selectHandler = (i) => {
    setSelected(i);
  };
  const prevHandler = async () => {
    navigation.navigate("DiagnosticPage0");
  };

  const nextHandler = async () => {
    try {
      if (selected === -1) {
        alert("학년을 선택해주세요.");
      } else {
        const userToken = await AsyncStorage.getItem("@userToken");
        const params = {
          userId: jwt_decode(userToken)["cognito:username"],
          body: {
            grade: ["예비고1", "1학년", "2학년", "3학년", "N수생"][selected],
          },
        };
        await API.test.insertGrade(params);
        navigation.navigate("DiagnosticPage2");
      }
    } catch (err) {
      alert("ERR")
      console.log(err);
    } finally {
    }
  };

  return (
    <Styled.background>
      <Styled.header>
        <Styled.H1>학년 선택</Styled.H1>
        <Styled.H2>학년을 선택해주세요.</Styled.H2>
      </Styled.header>
      <Styled.section>
        <Styled.SelectBtn>
          <TouchableWithoutFeedback
            onPress={() => {
              selectHandler(0);
            }}
          >
            <Styled.Btn id={0}>
              <Styled.BtnText id={0}>예비 고1</Styled.BtnText>
            </Styled.Btn>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              selectHandler(1);
            }}
          >
            <Styled.Btn id={1}>
              <Styled.BtnText id={1}>고 1</Styled.BtnText>
            </Styled.Btn>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              selectHandler(2);
            }}
          >
            <Styled.Btn id={2}>
              <Styled.BtnText id={2}>고 2</Styled.BtnText>
            </Styled.Btn>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              selectHandler(3);
            }}
          >
            <Styled.Btn id={3}>
              <Styled.BtnText id={3}>고3 </Styled.BtnText>
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
        <PrevNextBtn onPrev={prevHandler} onNext={nextHandler} btnType={true}/>
      </Styled.section>
    </Styled.background>
  );
};

export default DiagnosticPage1;


