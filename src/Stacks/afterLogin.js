import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled, { ThemeProvider } from "styled-components/native";
import theme from "../style/theme";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FriendMenu from "../images/icon/FriendMenu";
import BetaHome from "../images/iconSvg/BetaHome";
import Friend from "../page/myPage/Friend";
import WordStack from "./WordStack";
import WordPage from "../../working/WordPage";
import WordTab from "../images/iconSvg/WordTab";
import StatusStack from "./StatusStack";
import HomeStack from "./HomeStack";
import StatusBar from "../images/iconSvg/StatusBar";
import MyCheryBar from "../../working/svg/MyCheryBar";
import FriendPage from "../../working/FriendPage";
import StudyStatusPage from "../../working/StudyStatusPage";

const AfterLoginTab = createMaterialTopTabNavigator();
const Styled = {
  navigationBar: styled.View`
    display: flex;
    flex-direction: row;
    height: 55px;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: nowrap;
  `,
  buttonCover: styled.View`
    display: flex;
    padding: 5px;
  `,
  navigationButton: styled.View`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 25%;
    height: 100%;
  `,
  toolBarText: styled.Text`
    width: 100%;
    text-align: center;
    color: ${(props) => props.color};
    font-family: GmarketSansTTFMedium;
  `,
};
export default function AfterLogin() {
  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  function MyTabBar({ state, descriptors, navigation, position }) {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 86,
          justifyContent: "space-around",
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          transform: [],
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          var title;
          const isFocused = state.index === index;
          var onPress = () => {
            navigation.navigate(route.name);
          };
          if (route.name === "Home") {
            SvgName = "home";
            SvgColor = isFocused ? "#5471FF" : theme.color.gray;
            title = "홈";
            return (
              <Styled.navigationButton onPress={onPress} as={TouchableOpacity}>
                <BetaHome size={25} fill={SvgColor} style={{ marginTop: 5 }} />
                <Styled.toolBarText style={{ marginTop: 5 }} color={SvgColor}>
                  {title}
                </Styled.toolBarText>
              </Styled.navigationButton>
            );
          } else if (route.name === "Status") {
            SvgName = "learningStatusNavMarker";
            SvgColor = isFocused ? "#5471FF" : theme.color.gray;
            onPress = () => {
              navigation.navigate(route.name, { screen: "DailyLearningPage1" });
            };
            title = "학습현황";
            return (
              <Styled.navigationButton onPress={onPress} as={TouchableOpacity}>
                <StatusBar size={30} fill={SvgColor} style={{ marginTop: 7 }} />
                <Styled.toolBarText style={{ marginTop: 5 }} color={SvgColor}>
                  {title}
                </Styled.toolBarText>
              </Styled.navigationButton>
            );
          } else if (route.name === "Word") {
            SvgName = "weaknessNavMarker";
            SvgColor = isFocused ? "#5471FF" : theme.color.gray;
            title = "단어장";
            onPress = () => {
              navigation.navigate(route.name, { screen: "WeakLearningPage0" });
            };
            return (
              <Styled.navigationButton onPress={onPress} as={TouchableOpacity}>
                <WordTab fill={SvgColor} style={{ marginTop: 5 }} size={25} />
                <Styled.toolBarText color={SvgColor} style={{ marginTop: 5 }}>
                  {title}
                </Styled.toolBarText>
              </Styled.navigationButton>
            );
          } else if (route.name === "MyChery") {
            SvgColor = isFocused ? "#5471FF" : theme.color.gray;
            title = "마이체리";
            onPress = () => {
              navigation.navigate(route.name, { screen: "WeakLearningPage0" });
            };
            return (
              <Styled.navigationButton onPress={onPress} as={TouchableOpacity}>
                <MyCheryBar fill={SvgColor} style={{ marginTop: 5 }} size={25} />
                <Styled.toolBarText color={SvgColor} style={{ marginTop: 5 }}>
                  {title}
                </Styled.toolBarText>
              </Styled.navigationButton>
            );
          }
        })}
      </View>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <AfterLoginTab.Navigator tabBarPosition="bottom" tabBar={(props) => <MyTabBar {...props} />} swipeEnabled={true}>
        <AfterLoginTab.Screen
          name="Home"
          component={HomeStack}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <AfterLoginTab.Screen
          name="Status"
          component={StudyStatusPage}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <AfterLoginTab.Screen name="Word" component={WordPage} />
        <AfterLoginTab.Screen name="MyChery" component={FriendPage} />
        {/* <AfterLoginTab.Screen name="MyChery" component={Friend} /> */}
      </AfterLoginTab.Navigator>
    </ThemeProvider>
  );
}
