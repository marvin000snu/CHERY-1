import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { QuestionAnalysis8 } from "../page/questionAnalysis/QuestionAnalysis8";
import { QuestionAnalysisPage1 } from "../page/questionAnalysis/QuestionAnalysis1";
import { QuestionAnalysis11 } from "../page/questionAnalysis/QuestionAnalysis11";

const Stack = createStackNavigator();

const QuestionAnalysisStack = () => {
  return (
    <Stack.Navigator
      navigationOptions={{
        gestureEnabled: false
      }}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        swipeEnabled: false
      }}
      defaultNavigationOptions={{
        gestureEnabled: false
      }}
      configureScene={(route) => {
        {
        }
      }}
      enableGestures={false}
    >
      <Stack.Screen
        name="QuestionAnalysis1"
        component={QuestionAnalysisPage1}
        options={{gestureEnabled:false}}
      />
      <Stack.Screen name="QuestionAnalysis8" component={QuestionAnalysis8} options={{gestureEnabled:false}}/>
      <Stack.Screen name="QuestionAnalysis11" component={QuestionAnalysis11} options={{gestureEnabled:false}}/>
    </Stack.Navigator>
  );
};

export default QuestionAnalysisStack;
