import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DailyLearningPage0 } from "../page/dailyLearningPage/DailyLearningPage0";
import HomePage from "../../working/HomePage";
import Resume from "../../working/Resume";
import Study from "../../working/Study";
import { View, Button, TouchableWithoutFeedback } from "react-native";
import Search from "../../working/Search";
import BackArrow from "../../working/svg/backArrow";
import ViewQuestions from "../../working/ViewQuestions";
import AlarmPage from "../../working/AlarmPage"
const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
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
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen
        name="Resume"
        component={Resume}
        options={{
          title: "이어풀기",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor: "white",
          headerLeft: () => (
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("HomePage");
              }}
            >
              <BackArrow width={25} height={37} style={{ marginLeft: 10 }} />
            </TouchableWithoutFeedback>
          ),
          headerStyle: {
            backgroundColor: "#5571FF",
          },
        }}
      />
      <Stack.Screen
        name="Study"
        component={Study}
        options={{
          // headerTitle: (props) => <View {...props} />,
          title: "학습하기",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor: "white",
          headerLeft: () => (
            <BackArrow
              width={25}
              height={37}
              onPress={() => {
                navigation.navigate("HomePage");
              }}
              style={{ marginLeft: 10 }}
            />
          ),
          headerStyle: {
            backgroundColor: "#5571FF",
          },
        }}
      />
      <Stack.Screen
        name="Search"
        component={ViewQuestions}
        options={{
          // headerTitle: (props) => <View {...props} />,
          title: "문항분석",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTintColor: "white",
          headerLeft: () => (
            <BackArrow
              width={25}
              height={37}
              onPress={() => {
                navigation.navigate("HomePage");
              }}
              style={{ marginLeft: 10 }}
            />
          ),
          headerStyle: {
            backgroundColor: "#5571FF",
          },
        }}
      />
      <Stack.Screen name="AlarmPage" component={AlarmPage}/>
    </Stack.Navigator>
  );
};

export default HomeStack;
