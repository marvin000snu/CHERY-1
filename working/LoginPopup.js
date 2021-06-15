import React, { useCallback } from "react";
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import LoginBtn from "./components/Login/LoginBtn"
import KakaoLogo from "./svg/KakaoLogo"
import AppleLogo from "./svg/AppleLogo"
import MiseLogo from "./svg/MiseLogo"

import {
    login as KakaoLogin,
    getProfile as getKakaoProfile
    } from '@react-native-seoul/kakao-login';
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAPI from "../src/hooks/useAPI";
import { appleAuth} from '@invertase/react-native-apple-authentication';

//    setUserToken(result.code)
//    const params = { token: userToken };
//    const oauth2 = await API.user.kakaoAuth(params);
//    const testResult = await API.test.isTested(params);
//    await AsyncStorage.setItem("@userToken", result[0]);   



const Styled = {
    Wrap:styled.View`
        width:${wp(100)};
        height:${hp(34.1)};
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        background-color:#fff;
        position: absolute;
        bottom: 0;
    `,
    Section: styled.View`
        width:84%;
        height:200px;
        display:flex;
        flex-direction: column;
        justify-content:space-between;
        align-items:center;
    `,
    BtnWrap: styled.TouchableOpacity`
    width:100%;
    height:45px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    background-color: white;
    border-radius:5px;
    `,

}



const LoginPopup =(props)=>{
        //이름, 로고, 색깔, 기능 click
    const {navigation} = props;
    const [API] = useCallback(useAPI(), []);
    const onMise = () => {
        navigation.navigate("Login");
        props.setModalVisible(false);
      }
    
    onApple = async () => {
        try {
          const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME], //phone number는 불가능 
          });
          const { user, fullName, realUserStatus } = appleAuthRequestResponse;
       let nickName = fullName["familyName"] + fullName["givenName"];
          if(nickName) //이름이 있으면 aka 처음이면
              await AsyncStorage.setItem("@nickName", nickName);
          else
            nickName = await AsyncStorage.getItem("@nickName");
          if (realUserStatus > 0) {
            const oauth2 = await API.auth.appleAuth({body: {id: user, name: nickName}}); //apple가입이 되어있는지 확인
            if(oauth2.data.process === "SigningUp") { //가입 중인 사람이라면 페이지 이동
                        navigation.navigate("AppleLogin", {
                  userId: oauth2.data.id, password: oauth2.data.pw, name: nickName, phoneNumber: null});
            }
            if(oauth2.data.process === "logIn") {
              const loginParams = { userId: oauth2.data.id, password: oauth2.data.pw };
              const result = await API.user.login(loginParams);
              await AsyncStorage.setItem("@userToken", result[0]);
              await AsyncStorage.setItem("@AccessToken", result[1]);
              await AsyncStorage.setItem("@AutoLogin", "1");
              await AsyncStorage.setItem("@userName", `${oauth2.data.id}`);
              await AsyncStorage.setItem("@password", `${oauth2.data.pw}`);
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
          }
        } catch (error) {
          if (error.code === appleAuth.Error.CANCELED) {
            console.warn('User canceled Apple Sign in.');
          } else {
            console.error(error);
          }
        } finally {
            props.setModalVisible(false);
        }
      }    
    const onKakao = async () => {
        try {
        const loginInfo = await KakaoLogin();
        const profileInfo = await getKakaoProfile();
        const oauth2 = await API.auth.kakaoAuth({body: {id: profileInfo["id"]}}); //kakao가입이 되어있는지 확인
        if(oauth2.data.process === "SigningUp") { //가입 중인 사람이라면 페이지 이동
                    navigation.navigate("Kakao_Stack", {
                    screen: "KakaoLogin",
                    params: { userId: oauth2.data.id, password: oauth2.data.pw, name: profileInfo["nickname"], phoneNumber: profileInfo["phoneNumber"]}})
        }
        if(oauth2.data.process === "logIn") {
            const loginParams = { userId: oauth2.data.id, password: oauth2.data.pw };
            const result = await API.user.login(loginParams);
            const testResult = await API.test.isTested(loginParams);
            await AsyncStorage.setItem("@userToken", result[0]);
            await AsyncStorage.setItem("@AccessToken", result[1]);
            await AsyncStorage.setItem("@AutoLogin", "1");
            await AsyncStorage.setItem("@userName", `${oauth2.data.id}`);
            await AsyncStorage.setItem("@password", `${oauth2.data.pw}`);
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
    
    } catch (err) {
        if(err.message === "PreSignUp failed with error overlap_phonenumber.") // 이미 기존회원이고, kakao login만 하겠다는 뜻
        {
        alert("MISE로 이미 가입되어있어요, 카카오 연동은 v2에서 신속 안내해드릴게요!")
        //kakaoLink(kakao_id) API를 만들어서, MISE.social_id를 update해주는걸로 충분
        }else { // 기존 회
          if(err.message === "The operation couldn’t be completed. (KakaoSDKCommon.SdkError error 0.)")
            return;
        alert(err.message);
        }
            console.log(err)
        } finally {
            props.setModalVisible(false);
        }
    }  
    const loginTexts = ["Mise", "Kakao", "Apple"];
    const logos = [MiseLogo, KakaoLogo, AppleLogo];
    const colors = ["#5471FF", "#FFDD0A", "#000"]
    const fontColors = ["#fff", "#000", "#fff"]
    const functions = [onMise, onKakao, onApple];
    return(
            <Styled.Wrap>
                <Styled.Section>
                    {loginTexts.map((v, idx)=>{
                        return(
                        <Styled.BtnWrap onPress = {functions[idx]}>
                            <LoginBtn loginText={loginTexts[idx]} Logo = {logos[idx]} color = {colors[idx]} fontColor = {fontColors[idx]}/>
                        </Styled.BtnWrap>
                        )})}
                </Styled.Section>
            </Styled.Wrap>
    )
}
export default React.memo(LoginPopup)