import React, { useState, useEffect, useCallback } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import styled from "styled-components/native";
import { TouchableWithoutFeedback, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import NextBracket from "../src/images/iconSvg/NextBracket";
import Modal from "react-native-modal";
import GlobalStyled from "../src/style/GlobalStyled";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAPI from "../src/hooks/useAPI";
import LoginPopup from "./LoginPopup";
const Styled = {
  background: styled.View`
    background-color: #5571ff;
    width: ${wp(100)};
    height: ${hp(100)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,
  sbox: styled.Text`
    margin-top: ${hp(12)}px;
    margin-left: ${wp(10)}px;
    height: ${hp(70)}px;
  `,
  h1: styled.Text`
    font-size: ${wp(7)}px;
    font-weight: normal;
    color: white;
    line-height: ${wp(11)}px;
  `,
  bold: styled.Text`
    font-weight: bold;
    color: white;
  `,
  button: styled.View`
    width: ${wp(60)}px;
    margin-left: ${wp(20)}px;
    height: ${hp(5)}px;
    min-height: 50px;
    border-radius: 40px;
    border: 2px solid #fff;
    color: #fff;
    font-size: ${wp(10)}px;
    font-weight: bold;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
  `,
  btnText: styled.Text`
    margin-left: ${wp(12)}px;
    font-size: ${wp(5)}px;
    font-weight: 900;
    color: white;
    width: 60%;
    text-align: center;
    line-height: 50px;
  `,
  findBtn: styled.View`
    width: 100%;
    height: 30px;
    color: #1673ff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    flex-direction: row;
  `,
  h2: styled.Text`
    font-size: ${wp(4)}px;
    font-weight: bold;
    color: white;
    line-height: ${wp(11)}px;
    min-height: 50%;
    padding-left: ${wp(10)}px;
    text-decoration-line: underline;
  `,
  h3: styled.Text`
    font-size: ${wp(4)}px;
    font-weight: bold;
    color: white;
    line-height: ${wp(11)}px;
    min-height: 50%;
  `,
};

const DiagnosticPage0 = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pending, setPending] = useState(true);
  const [API] = useCallback(useAPI(), []);
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        const autoLogin = await AsyncStorage.getItem("@AutoLogin");
        if (autoLogin == "1") {
          const saveId = await AsyncStorage.getItem("@userName");
          const savePassword = await AsyncStorage.getItem("@password");
          //          const loginType = await AsyncStorage.getItem("@loginType");
          //          if (loginType === "CHERY") {
          const params = { userId: saveId, password: savePassword };
          console.log(params);
          const result = await API.user.login(params);
          const testResult = await API.test.isTested(params);
          console.log(testResult);
          await AsyncStorage.setItem("@userToken", result[0]);
          await AsyncStorage.setItem("@AccessToken", result[1]);
          if (testResult.data.result === 1) {
            navigation.navigate("AfterLoginGradeSolve", {
              screen: "afterLogin",
              params: { screen: "Home" },
            });
          } else {
            navigation.navigate("DiagnosticsStack", {
              screen: "DiagnosticPage1",
            });
          }
          //          }
        }
      } catch (err) {
        console.log(err);
        alert("err");
      } finally {
        setPending(false);
      }
    };
    useEffectAsyncFunction();
  }, []);
  const buttonPress = () => {
    setModalVisible(true);
  };

  const startNowHandler = () => {
    navigation.navigate("DiagnosticsStack", { screen: "DiagnosticPage1" });
  };
  const closeHandler = () => {
    setModalVisible(false);
  };

  return (
    <Styled.background>
      <Modal isVisible={modalVisible} onBackdropPress={closeHandler} style={{ padding: 0, margin: 0, justifyContent: "flex-end", flexDirection: "column" }}>
        <LoginPopup navigation={navigation} setModalVisible={setModalVisible} />
        {/* 
        <TouchableOpacity
          style={{ flex: 1, width: "100%" }}
          onPress={() => {
            setModalVisible(false);
          }}
        ></TouchableOpacity>
        <GlobalStyled.ViewCol height="300px" style={{ backgroundColor: "white", justifyContent: "flex-start" }}>
          <GlobalStyled.ViewRow height="45" width="90%" style={{ backgroundColor: "#5471FF", borderRadius: 10, marginTop: 45 }} as={TouchableOpacity} onPress={moveToChery}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>CHERY 계정으로 시작하기</Text>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow height="45" width="90%" style={{ backgroundColor: "#E7E600", borderRadius: 10, marginTop: 15 }}>
            <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>카카오 계정으로 시작하기</Text>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow height="45" width="90%" style={{ backgroundColor: "black", borderRadius: 10, marginTop: 15 }}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>APPLE 계정으로 시작하기</Text>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
        */}
      </Modal>
      <Styled.sbox>
        <Styled.h1>
          CHERY에 오신 것을{"\n"}
          환영합니다!!{"\n"}
          <Styled.bold>
            우선 AI가 당신의 실력을{"\n"}
            진단
          </Styled.bold>
          해드릴게요.
        </Styled.h1>
      </Styled.sbox>
      <TouchableWithoutFeedback onPress={startNowHandler}>
        <Styled.button>
          <Styled.btnText>시작하기</Styled.btnText>
          <NextBracket color="white" style={{ marginLeft: 10 }} />
        </Styled.button>
      </TouchableWithoutFeedback>
      <Styled.findBtn>
        <Styled.h3>이미 회원이에요!</Styled.h3>
        <TouchableWithoutFeedback onPress={buttonPress}>
          <Styled.h2>로그인</Styled.h2>
        </TouchableWithoutFeedback>
      </Styled.findBtn>
      {pending && (
        <GlobalStyled.ViewCol style={{ position: "absolute" }}>
          <ActivityIndicator size="large" color="black" />
          <Text style={{ marginTop: 5 }}>자동로그인을 시도중입니다.</Text>
        </GlobalStyled.ViewCol>
      )}
    </Styled.background>
  );
};

export default DiagnosticPage0;
