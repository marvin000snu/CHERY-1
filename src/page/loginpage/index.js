import React, { useEffect, useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styled from "styled-components/native";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { CheckBox } from "../../components/Molecules/CheckBox";
import useAPI from "../../hooks/useAPI";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import GlobalStyled from "../../style/GlobalStyled";
import Logo from "../../images/iconSvg/logo";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
});
const Styled = {
  body: styled.View`
    width: 100%;
    height: ${hp(100)}px;
    background-color: #F0F2F7;
  `,
  wrap: styled.View`
    margin-top: ${Constants.statusBarHeight}px;
    width: 100%;
    height: ${hp(100) - Constants.statusBarHeight}px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  `,
  logintext: styled.View`
    width: 50%;
    height: 50px;
    font-size: 24px;
    font-weight: bold;
    color: #097ff5;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  text: styled.Text`
    width: 85%;
    height: 90px;
    text-align: center;
    margin-top: 15px;
    color: #d3d3d4;
    font-size: 25px;
    font-weight: bold;
  `,
  input: styled.View`
    width: 80%;
    margin-top: 30px;
    padding: 20px;
    text-align: center;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    height: 100px;
  `,
  form: styled.View`
    width: 75%;
    background-color: #097ff5;
    height: 50%;
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,

  id: styled.TextInput`
    font-size: 14px;
    padding: 11px;
    border: none;
    width: 90%;
    height: auto;
    background-color: #f7f7f7;
  `,

  pass: styled.TextInput`
    font-size: 14px;
    padding: 11px;
    border: none;
    width: 90%;
    height: auto;
    background-color: #f7f7f7;
  `,
  in: styled.View`
    width: 65%;
    height: auto;
  `,
  check: styled.View`
    width: 15px;
    height: 15px;
    border-color: #097ff5;
    border-width: 1px;
    border-style: solid;
  `,
  links: styled.View`
    width: 100%;
    height: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;
  `,
  logincheck: styled.View`
    height: 15px;
    width: auto;
    display: flex;
    justify-content: center;
    flex-direction: row;
  `,
  button: styled.TouchableOpacity`
    width: 60%;
    height: 50px;
    border-radius: 25px;
    border: 1px solid #fff;
    background-color: #6F87FF;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
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
  h1: styled.Text`
    font-size: 36px;
    color: #5471FF;
  `,
  h2: styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: #097ff5;
    text-align: center;
    margin-top: 25.6px;
    margin-bottom: 25.6px;
  `,
  p: styled.Text`
    width: 30%;
    text-align: center;
    margin-top: 5px;
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    color: #6F87FF;
  `,
  fancyFont: styled.Text`
    margin-left: 5px;
    font-size: 13px;
    color: #a4b6d6;
  `,
  form: styled.View`
    width: 100%;
    height: 50px;
  `,
  id: styled.TextInput`
    font-size: 14px;
    padding: 11px;
    border: none;
    width: 95%;
    height: auto;
    background-color: #f7f7f7;
    border-left-width: 5px;
    border-color: #5471FF;
  `
};

const LoginPage = ({ navigation }) => {
  const [API] = useCallback(useAPI(), []);
  const loginCheck = async () => {
    try {
      const useAutoLogin = await AsyncStorage.getItem("@AutoLogin");
      if (useAutoLogin == "1") {
        const savedPassword = await AsyncStorage.getItem("@password");
        const savedId = await AsyncStorage.getItem("@userName");
        const params = { userId: savedId, password: savedPassword };
        const testResult = await API.test.isTested(params);
        const result = await API.user.login(params);
        await AsyncStorage.setItem("@userToken", result[0]);
        await AsyncStorage.setItem("@AccessToken", result[1]);
        if (isSelected) {
          await AsyncStorage.setItem("@password", password);
          await AsyncStorage.setItem("@userName", id);
        }
        await AsyncStorage.removeItem("@timeData");
        await AsyncStorage.removeItem("@answerList");
        if (testResult.data.result === 1) {
          navigation.navigate("AfterLoginGradeSolve", {
            screen: "afterLogin",
            params: { screen: "Home" }
          });
        } else {
          navigation.navigate("DiagnosticsStack", {
            screen: "DiagnosticPage1"
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    loginCheck();
  }, []);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20
    },
    checkbox: {
      alignSelf: "center"
    },
    label: {
      margin: 8
    }
  });
  const [isSelected, setIsSelected] = useState(false);
  const setSelection = () => {
    setIsSelected(!isSelected);
  };

  const loginHandler = async () => {
    try {
      const params = { userId: id, password: password };
      const result = await API.user.login(params);
      const testResult = await API.test.isTested(params);
      await AsyncStorage.setItem("@userToken", result[0]);
      await AsyncStorage.setItem("@AccessToken", result[1]);
      if (isSelected) {
        await AsyncStorage.setItem("@password", password);
        await AsyncStorage.setItem("@userName", id);
      }
      await AsyncStorage.setItem("@AutoLogin", isSelected ? "1" : "0");
      await AsyncStorage.removeItem("@timeData");
      await AsyncStorage.removeItem("@answerList");
      if (testResult.data.result === 1) {
        navigation.navigate("AfterLoginGradeSolve", {
          screen: "afterLogin",
          params: { screen: "Home" }
        });
      } else {
        navigation.navigate("DiagnosticsStack", {
          screen: "DiagnosticPage1"
        });
      }
    } catch (err) {
      console.log(err);
      if (err.code === "NotAuthorizedException") {
        alert("아이디 혹은 비밀번호가 정확하지 않습니다.");
      }
      if (err.message === "Missing required parameter USERNAME") {
        alert("아이디를 입력해주세요.");
      }
    }
  };

  const notSignUpHandler = () => {
    navigation.navigate("SignUpStack", { screen: "SignUp" });
  };

  const findPassword = () => {
    navigation.navigate("SignUpStack", { screen: "findPassword" });
  };

  const findId = () => {
    navigation.navigate("SignUpStack", { screen: "FindId" });
  };
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Styled.body>
      <Styled.wrap>
        <GlobalStyled.ViewCol height="30%" justifyContent="flex-end">
          <Logo size={200} />
        </GlobalStyled.ViewCol>
        <GlobalStyled.ViewCol height="10%">
          <Styled.logintext>
            <Styled.h1>LOGIN</Styled.h1>
          </Styled.logintext>
        </GlobalStyled.ViewCol>
        <GlobalStyled.ViewCol height="40%" justifyContent="space-between">
          <Styled.input>
            <Styled.form>
              <Styled.id
                placeholderTextColor="gray"
                placeholder="ID"
                value={id}
                onChangeText={setId}
                autoCapitalize="none"
              />
            </Styled.form>
            <Styled.form>
              <Styled.id
                placeholderTextColor="gray"
                placeholder="PW"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                onSubmitEditing={loginHandler}
              />
            </Styled.form>
          </Styled.input>
          <Styled.in>
            <Styled.links>
              <Styled.logincheck as={TouchableOpacity} onPress={setSelection}>
                <CheckBox isClicked={isSelected} onChange={setSelection} />
                <Styled.fancyFont>로그인 유지하기</Styled.fancyFont>
              </Styled.logincheck>
              <TouchableOpacity onPress={notSignUpHandler}>
                <Text style={{ color: "#5471FF", marginLeft: 40 }}>
                  회원이 아니신가요?
                </Text>
              </TouchableOpacity>
            </Styled.links>
          </Styled.in>
          <Styled.button onPress={loginHandler}>
            <Text style={{ color: "#fff", fontSize: 18 }}>로그인</Text>
          </Styled.button>
          <Styled.findBtn>
            <TouchableWithoutFeedback onPress={findId}>
              <Styled.p>아이디 찾기</Styled.p>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={findPassword}>
              <Styled.p>비밀번호 찾기</Styled.p>
            </TouchableWithoutFeedback>
          </Styled.findBtn>
        </GlobalStyled.ViewCol>
      </Styled.wrap>
    </Styled.body>
  );
};

export { LoginPage };
