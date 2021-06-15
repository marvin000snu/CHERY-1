import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./working/Login";
import { FindPassword } from "./src/page/findPw/FindPassWord";
import Find_ID from "./working/Find_ID"
import Find_ID_OK from "./working/Find_ID_OK";
import Find_PW from "./working/Find_PW";
import Find_PW_OK from "./working/Find_PW_OK";
import PW_Change from "./working/PW_Change";
import DiagnosticPage0 from "./working/DiagnosticPage0";
import LoginPopup from "./working/LoginPopup";
import KakaoStack from "./working/KakaoStack";
const Stack = createStackNavigator();

const BeforeLogin = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DiagnosticPage0" component={DiagnosticPage0} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen component={Find_ID} name="Find_ID" />
      <Stack.Screen component={Find_ID_OK} name="Find_ID_OK" />
      <Stack.Screen component={Find_PW} name="Find_PW" />
      <Stack.Screen component={Find_PW_OK} name="Find_PW_OK" />
      <Stack.Screen component={PW_Change} name="PW_Change" />
      <Stack.Screen component={LoginPopup} name="Login_Popup" />
      <Stack.Screen component={KakaoStack} name="Kakao_Stack" />
    </Stack.Navigator>
  );
};

export default BeforeLogin;
