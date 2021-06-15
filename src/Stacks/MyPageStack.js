import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Friend from "../page/myPage/Friend";
import CalenderPage from "../page/myPage/Calender";
import Setting from "../page/myPage/Setting";
import styled from "styled-components/native";
import SettingMenu from "../images/icon/SettingMenu";
import Calender from "../images/icon/Calender";
import FriendMenu from "../images/icon/FriendMenu";
import theme from "../style/theme";
import StatusStack from "../Stacks/StatusStack"
import {View} from "react-native"
import SvgComponent from "../components/Atoms/Svg";

const Stack = createBottomTabNavigator();
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
  navigationButton: styled.TouchableOpacity`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 33%;
    flex:1;
    margin-top:5
  `,
  toolBarText: styled.Text`
    margin-top:4;
    width: 100%;
    text-align: center;
    color: ${(props) => props.color};
  `
};
const MyPageStack = () => {
  function MyTabBar({ state, descriptors, navigation, position }) {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 70,
          justifyContent: "space-around",
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          transform: []
        }}
      >
        {state.routes.map((route, index) =>{
          const focused = state.index === index;
          var onPress = () => {
            // const event = navigation.emit({
            //   type: "tabPress",
            //   target: route.key,
            //   canPreventDefault: true
            // });

            // if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            // }
          };
          if (route.name === "Setting") {
            SvgColor = focused ? "#5571FF" : theme.color.gray;
            title = "설정";
            return (
              <Styled.navigationButton onPress={onPress}>
                <SettingMenu fill={SvgColor} />
                <Styled.toolBarText color={SvgColor}>
                  {title}
                </Styled.toolBarText>
              </Styled.navigationButton>
            );
          } else if (route.name === "Friend") {
            SvgColor = focused ? "#5571FF" : theme.color.gray;
            title = "친구";
            return (
              <Styled.navigationButton onPress={onPress}>
                <FriendMenu fill={SvgColor} />
                <Styled.toolBarText color={SvgColor}>
                  {title}
                </Styled.toolBarText>
              </Styled.navigationButton>
            );
          } else if (route.name === "Calender") {
            SvgColor = focused ? "#5571FF" : theme.color.gray;
            title = "출석체크";
            return (
              <Styled.navigationButton onPress={onPress}>
                <Calender fill={SvgColor} />
                <Styled.toolBarText color={SvgColor}>
                  {title}
                </Styled.toolBarText>
              </Styled.navigationButton>
            );
          }else if (route.name === "status") {
            SvgColor = focused ? "#5571FF" : theme.color.gray;
            title = "학습현황";
            return (
              <Styled.navigationButton onPress={()=>{ navigation.navigate("status", )}}>
                <SvgComponent name="learningStatusNavMarker" size="50%" fill={SvgColor}/>
                <Styled.toolBarText color={SvgColor}>
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
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props)=><MyTabBar {...props}></MyTabBar>}
      screenOptions={({ route }) => ({
        gestureEnabled: false,
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let SvgName;
          let SvgColor;
          let title;
          if (route.name === "Setting") {
            SvgColor = focused ? "#5571FF" : theme.color.gray;
            title = "설정";
            return (
              <Styled.navigationButton>
                <SettingMenu fill={SvgColor} />
                <Styled.toolBarText color={SvgColor}>
                  {title}
                </Styled.toolBarText>
              </Styled.navigationButton>
            );
          } else if (route.name === "Friend") {
            SvgColor = focused ? "#5571FF" : theme.color.gray;
            title = "친구";
            return (
              <Styled.navigationButton>
                <FriendMenu fill={SvgColor} />
                <Styled.toolBarText color={SvgColor}>
                  {title}
                </Styled.toolBarText>
              </Styled.navigationButton>
            );
          } else if (route.name === "Calender") {
            SvgColor = focused ? "#5571FF" : theme.color.gray;
            title = "출석체크";
            return (
              <Styled.navigationButton>
                <Calender fill={SvgColor} />
                <Styled.toolBarText color={SvgColor}>
                  {title}
                </Styled.toolBarText>
              </Styled.navigationButton>
            );
          }else if (route.name === "status") {
            SvgColor = focused ? "#5571FF" : theme.color.gray;
            title = "출석체크";
            return (
              <Styled.navigationButton>
                <Calender fill={SvgColor} />
                <Styled.toolBarText color={SvgColor}>
                  {title}
                </Styled.toolBarText>
              </Styled.navigationButton>
            );
          }
        }
      })}
      tabBarOptions={{
        visible: false,
        showLabel: false,
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        iconStyle: {
          flexGrow: 1
        }
      }}
    >
      <Stack.Screen name="Calender" component={CalenderPage} />
      <Stack.Screen name="Friend" component={Friend} />
      <Stack.Screen name="status" component={StatusStack}/>
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};

export default MyPageStack;
