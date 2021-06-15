import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WordPage1 from "../page/WordPage/WordPage1"
const Stack = createStackNavigator();

const WordStack = () => {
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
      <Stack.Screen name="WordPage1" component={WordPage1} options={{gestureEnabled:false}}/>
    </Stack.Navigator>
  );
};

export default WordStack;
