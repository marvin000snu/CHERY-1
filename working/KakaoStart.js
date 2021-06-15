import {
    login as KakaoLogin,
    getProfile as getKakaoProfile
    } from '@react-native-seoul/kakao-login';
import React, { useState, useCallback } from "react";
import styled from "styled-components/native";
import { View,  TouchableWithoutFeedback} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAPI from "../src/hooks/useAPI";
const Styled = {
    background: styled.View`
      width: ${wp(10)};
      height: ${hp(10)};
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      background-color: blue;
    `,
    };
const KakaoStart = (props) => {
  const {navigation} = props;
  const [API] = useCallback(useAPI(), []);
    const [userToken, setUserToken] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
      const nav = async () => {
        navigation.navigate("KakaoLogin");
      }
      const kakaoPress = async () => {
        try {
        const loginInfo = await KakaoLogin();
        const profileInfo = await getKakaoProfile();
        setUserToken(loginInfo.accessToken);
        setUserPhone(profileInfo["phoneNumber"]);
        setUserId(profileInfo["id"]);
        setUserName(profileInfo["nickname"]);
        const oauth2 = await API.auth.kakaoAuth({body: {id: userId}}); //kakao가입이 되어있는지 확인
        if(oauth2.status != 200)
          throw new Error("옳지 않은 접근입니다. 다시 시도해 주세요")
        if(oauth2.data.process === "SigningUp") { //가입 중인 사람이라면 페이지 이동
                    navigation.navigate("KakaoLogin", {
              userId: oauth2.data.id,
              password: oauth2.data.pw,
              name: userName,
              phoneNumber: userPhone,
            });
        }
        if(oauth2.data.process === "logIn") {
          const loginParams = { userId: oauth2.data.id, password: oauth2.data.pw };
          const result = await API.user.login(loginParams);
          const testResult = await API.test.isTested(loginParams);
          await AsyncStorage.setItem("@userToken", result[0]);
          await AsyncStorage.setItem("@AccessToken", result[1]);

          navigating(testResult.data.result);
        }
    
    } catch (err) {
      if(err.message === "PreSignUp failed with error overlap_phonenumber.") // 이미 기존회원이고, kakao login만 하겠다는 뜻
      {
        alert("MISE로 이미 가입되어있어요, 카카오 연동은 v2에서 신속 안내해드릴게요!")
        //kakaoLink(kakao_id) API를 만들어서, MISE.social_id를 update해주는걸로 충분
      }else { // 기존 회
      alert(err.message);
      }
            console.log(err)
        }
    }  


  return (
        <View>
            <TouchableWithoutFeedback onPress = {kakaoPress}>
            <Styled.background>
            </Styled.background>
            </TouchableWithoutFeedback>
        </View>
    )
}
const navigating = (ctr) => {
  if (ctr === 1) {
    /*
    navigation.navigate("AfterLoginGradeSolve", {
      screen: "afterLogin",
      params: { screen: "Home" },
    });
    */
  } else {
      /*
    navigation.navigate("DiagnosticsStack", {
      screen: "DiagnosticPage1",
    });
    */
  }

}

export default KakaoStart