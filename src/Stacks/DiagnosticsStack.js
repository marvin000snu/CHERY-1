import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import  DiagnosticPage0 from "../../working/DiagnosticPage0";
import  DiagnosticPage1 from "../../working/DiagnosticPage1";
import  DiagnosticPage2 from "../../working/DiagnosticPage2";
import  DiagnosticPage3 from "../../working/DiagnosticPage3";
import  DiagnosticPage4 from "../../working/DiagnosticPage4";
import  DiagnosticPage5 from "../../working/DiagnosticPage5";
import  DiagnosticPage7 from "../../working/DiagnosticPage7";
import  DiagnosticPage9 from "../../working/DiagnosticPage9";
import  DiagnosticPage10 from "../../working/DiagnosticPage10";



const Stack = createStackNavigator();

const DiagnosticsStack = () => {
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
      <Stack.Screen name="DiagnosticPage0" component={DiagnosticPage0} />
      <Stack.Screen name="DiagnosticPage1" component={DiagnosticPage1} />
      <Stack.Screen name="DiagnosticPage2" component={DiagnosticPage2} />
      <Stack.Screen name="DiagnosticPage3" component={DiagnosticPage3} />
      <Stack.Screen name="DiagnosticPage4" component={DiagnosticPage4} />
      <Stack.Screen name="DiagnosticPage5" component={DiagnosticPage5} />
      <Stack.Screen name="DiagnosticPage7" component={DiagnosticPage7} />
      <Stack.Screen name="DiagnosticPage9" component={DiagnosticPage9} />
      <Stack.Screen name="DiagnosticPage10" component={DiagnosticPage10} />
    </Stack.Navigator>
  );
};

export default DiagnosticsStack;
