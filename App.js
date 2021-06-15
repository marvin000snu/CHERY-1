import React, { useEffect, useState, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import styled, { ThemeProvider } from "styled-components/native";
import theme from "./src/style/theme";
import DiagnosticsStack from "./src/Stacks/DiagnosticsStack";
import AfterLoginGradeSolve from "./src/Stacks/AfterLoginGradeSolve";
import BeforeLogin from "./beforeLogin";
import SignUpStack from "./src/Stacks/SignUpStack";
import SplashScreen from "react-native-splash-screen";
import codePush from 'react-native-code-push'
import NetInfo from "@react-native-community/netinfo";
import NotificationPage from "./working/NotificationPage";
// import Home from "./working/home"
import AlarmAdd from "./working/Molecules/AlarmAdd";

import FirstPage from "./working/FirstPage";
import StartPage from "./working/StartPage";
//import LoginPage from "./working/Login";
import Find_ID from "./working/Find_ID";
import Find_ID_OK from "./working/Find_ID_OK";
import Find_PW from "./working/Find_PW";
import Find_PW_OK from "./working/Find_PW_OK";
import PW_Change from "./working/PW_Change";
import FindSchool from "./working/FindSchool";
import PhoneCertificate from "./working/PhoneCertificate";
// import FriendList from "./working/FriendList"
import AnswerSheet from "./working/AnswerSheet";
import GradingComplete from "./working/GradingComplete";
import ProblemAnalysis from "./working/Search";
import AnalyzeResults from "./working/AnalyzeResults";
import ViewQuestions from "./working/ViewQuestions";
import FriendAdd from "./working/FriendAdd";
import Setting from "./working/Setting";
import SettingMyProfile from "./working/SettingMyProfile";
import Setting_PW_Change from "./working/Setting_PW_Change";
import Membership_Withdrawal from "./working/Membership_Withdrawal";
import MyTest from "./working/MyTest";
import MyLevel from "./working/MyLevel";
import FriendManage from "./working/FriendManage";
import MyChery from "./working/MyChery";
import Experi from "./working/experi";
import { DailyLearning, StudyHome } from "./working/Home/StudyHome";
import HomePage from "./working/HomePage";
import Hamburger from "./working/Hamburger";
import AlarmPage from "./working/AlarmPage";
import { diagnosticTestPage7 } from "./src/page/diagnosticpage/DiagnosticPage7";

import TestResultAnalysis from "./working/TestResultAnalysis.js";

import { DirectSolveStack } from "./src/Stacks/DirectSolve";
import SettingStack from "./src/Stacks/SettingStack";
import StudyStatusPage from "./working/StudyStatusPage";
// import KAKAO from "./working/KAKAO";
// import APPLE from "./working/APPLE";
// ㅇㅔ러가 나서 주석처리 해두었습니다
import SignUp from "./src/page/SignUpPage/index";
import { LoginPage } from "./src/page/loginpage/index";
import PW_Change_Curr from "./working/Molecules/PW_Change_Curr";

import KakaoLogin from "./working/KakaoLogin";
import AppleLogin from "./working/AppleLogin";
import LoginPopup from "./working/LoginPopup";
import KakaoStack from "./working/KakaoStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAPI from "./src/hooks/useAPI"
const mainStack = createStackNavigator();
const mainDrawer = createStackNavigator();
const App = () => {
  const [API] = useCallback(useAPI(), []);
  useEffect(() => {
    try {
      SplashScreen.hide();

    } catch (err) {
      //console.log(err);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {/* <mainStack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false
          }}
        >
          <mainStack.Screen component={BeforeLogin} name="beforeLogin" />
          <mainStack.Screen
            component={AfterLoginGradeSolve}
            name="AfterLoginGradeSolve"
          />
        <mainStack.Screen component={HomePage} name="HomePage" />
          
        </mainStack.Navigator> */}
        <mainDrawer.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}
        >
          {/* <mainDrawer.Screen component={PhoneCertificate} name="PhoneCertificate"/> */}
          {/* <mainDrawer.Screen component={SignUp} name="SignUp"/> */}
          {/* <mainDrawer.Screen component={FindSchool} name="FindSchool"/> */}

          <mainDrawer.Screen component={BeforeLogin} name="BeforeLogin" />
          <mainDrawer.Screen component={AfterLoginGradeSolve} name="AfterLoginGradeSolve" />
          {/* <mainDrawer.Screen component={AlarmAdd} name="alarmadd" /> */}
          {/* SIGNUP STACK 이 들어갈 자리임. */}
          <mainDrawer.Screen component={DiagnosticsStack} name="DiagnosticsStack" />
          <mainDrawer.Screen component={SignUpStack} name="SignUpStack" />

          {/* <mainDrawer.Screen component={StudyStatusPage} name="!StudyStatusPage" /> */}
          {/* <mainDrawer.Screen component={TestResultAnalysis} name="!TestResultAnaalysis" /> */}
          {/* <mainDrawer.Screen component={DirectSolveStack} name="DirectSolveStack" /> */}
          {/* 
          <mainDrawer.Screen component={AnswerSheet} name="!AnswerSheet" />
          <mainDrawer.Screen component={GradingComplete} name="!GradingComplete" />
          <mainDrawer.Screen component={ProblemAnalysis} name="!ProblemAnalysis" />
          <mainDrawer.Screen component={AnalyzeResults} name="!AnalyzeResults" />
          <mainDrawer.Screen component={ViewQuestions} name="!ViewQuestions" /> */}
          {/* <mainDrawer.Screen component={FriendList} name="!FriendList" /> */}

          {/* <mainDrawer.Screen component={FriendAdd} name="!FriendAdd" /> */}
          {/* <mainDrawer.Screen component={SettingStack} name="SettingStack" /> */}
          {/* <mainDrawer.Screen component={SettingMyProfile} name="!SettingMyProfile" /> */}
          {/* <mainDrawer.Screen component={Setting_PW_Change} name="!Setting_PW_Change" /> */}
          <mainDrawer.Screen component={Membership_Withdrawal} name="!Membership_Withdrawal" />
          {/* <mainDrawer.Screen component={MyTest} name="!MyTest" /> */}
          {/* <mainDrawer.Screen component={MyLevel} name="!MyLevel" /> */}
          <mainDrawer.Screen component={FriendManage} name="!FriendManage" />
          {/* <mainDrawer.Screen component={MyChery} name="!MyChery" /> */}
          {/* <mainDrawer.Screen component={StudyStatusPage} name="StudyStatusPage" /> */}
        </mainDrawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  installMode: codePush.InstallMode.IMMEDIATE,
}
export default codePush(codePushOptions)(App)