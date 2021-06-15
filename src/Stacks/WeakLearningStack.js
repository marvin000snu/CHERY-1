import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { WeakLearningPage0 } from "../page/WeakLearning/WeakLearningPage0";
import { WeakLearningPage1 } from "../page/WeakLearning/WeakLearningPage1";
import { WeakLearningPage2 } from "../page/WeakLearning/WeakLearningPage2";

const Stack = createStackNavigator();

const WeakLearningStack = () => {
  return (
    <Stack.Navigator
      navigationOptions={{
        gestureEnabled: false,
      }}
      screenOptions={{ headerShown: false, gestureEnabled: false , swipeEnabled: false}}
      defaultNavigationOptions= {{
        gestureEnabled: false
      }}
      configureScene={(route) => {{}}}
      enableGestures={false}
    >
      <Stack.Screen name="WeakLearningPage0" component={WeakLearningPage0} options={{gestureEnabled:false}}/>
      <Stack.Screen name="WeakLearningPage1" component={WeakLearningPage1} options={{gestureEnabled:false}}/>
      <Stack.Screen name="WeakLearningPage2" component={WeakLearningPage2} options={{gestureEnabled:false}}/>
    </Stack.Navigator>
  );
};

export default WeakLearningStack;
