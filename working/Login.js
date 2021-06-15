import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import CheryLogo2 from "./svg/CheryLogo2.png";
import InputBox from "./components/Login/InputBox";
import LoginFunction from "./components/Login/LoginFunction";
import useAPI from "../src/hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Styled = {
  background: styled.View`
    background-color: #fff;
    width: ${wp(100)};
    height: ${hp(100)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,
  LogoIMG: styled.Image`
    width: 183px;
    height: 39px;
    margin-top: 25%;
  `,
  InputWrap: styled.View`
    width: 271px;
    height: 104px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-top: 150px;
  `,
  LoginBtn: styled.TouchableOpacity`
    width: 270px;
    height: 40px;
    border-radius: 20px;
    background-color: #6f87ff;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
  `,
  LoginBtnText: styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    font-family: NotoSansKR-Bold;
  `,
  FindWrap: styled.View`
    width: 270px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: 12px;
  `,
  Find_ID: styled.TouchableOpacity`
    width: auto;
    height: auto;
  `,
  Find_Text: styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #6f87ff;
    font-family: NotoSansKR-Bold;
  `,
  Find_PW: styled.TouchableOpacity`
    width: auto;
    height: auto;
  `,
};
const Login = (props) => {
  const navigation = props.navigation
  const [data, setData] = useState(["ID", "PW"]);
  const [Check, setCheck] = useState(false);
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");
  const [API] = useCallback(useAPI(), []);
  
  useEffect(()=>{
    const useEffectAsyncFunction = async () => {
      try{
        const autoLogin = await AsyncStorage.getItem("@AutoLogin");
        if(autoLogin=="1"){
          const saveId = await AsyncStorage.getItem("@userName");
          const savePassword = await AsyncStorage.getItem("@password")
          const params = { userId: saveId, password:savePassword};
          const result = await API.user.login(params);
          const testResult = await API.test.isTested(params);
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
        }
      }catch (err) {
        console.log(err)
        alert("err")
      }finally{

      }

    }
    // useEffectAsyncFunction()
  },[])

  const loginHandler = async () => {
    try {
      const params = { userId: ID, password: PW };
      const result = await API.user.login(params);
      const testResult = await API.test.isTested(params);
      await AsyncStorage.setItem("@userToken", result[0]);
      await AsyncStorage.setItem("@AccessToken", result[1]);
      if (Check) {
        await AsyncStorage.setItem("@password", PW);
        await AsyncStorage.setItem("@userName", ID);
//        await AsyncStorage.setItem("@loginType", "CHERY")
      }
      await AsyncStorage.setItem("@AutoLogin", Check ? "1" : "0");
      await AsyncStorage.removeItem("@timeData");
      await AsyncStorage.removeItem("@answerList");
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
    } catch (err) {
      alert(err)
      if (err.code === "NotAuthorizedException") {
        alert("아이디 혹은 비밀번호가 정확하지 않습니다.");
      }
      if (err.message === "Missing required parameter USERNAME") {
        alert("아이디를 입력해주세요.");
      }
    }
  };

  const findIDHandler = ()=> {
    navigation.navigate("Find_ID")
    alert(1)
  }
  const findPasswordHandler = ()=>{
    navigation.navigate("Find_PW")
    alert(2)
  }
  const CheckingLogin = () => {
    if (ID === "") {
      alert("아이디를 입력해주세요.");
    } else if (PW === "") {
      alert("비밀번호를 입력해주세요");
    } else {
      loginHandler();
    }
  };
  return (
    <Styled.background>
      {/* FIX-REQUEST 로고를 이미지->SVG */}
      <Styled.LogoIMG source={CheryLogo2} />
      <Styled.InputWrap>
        {data.map((v) => {
          return <InputBox data={v} ID={ID} setID={setID} PW={PW} setPW={setPW} />;
        })}
      </Styled.InputWrap>
      <LoginFunction Check={Check} setCheck={setCheck} navigation = {navigation}/>
      <Styled.LoginBtn
        onPress={() => {
          CheckingLogin();
        }}
      >
        <Styled.LoginBtnText>로그인</Styled.LoginBtnText>
      </Styled.LoginBtn>
      <Styled.FindWrap>
        <Styled.Find_ID onPress={findIDHandler}>
          <Styled.Find_Text>아이디 찾기</Styled.Find_Text>
        </Styled.Find_ID>
        <Styled.Find_PW onPress={findPasswordHandler}>
          <Styled.Find_Text>비밀번호 찾기</Styled.Find_Text>
        </Styled.Find_PW>
      </Styled.FindWrap>
    </Styled.background>
  );
};
export default Login;
