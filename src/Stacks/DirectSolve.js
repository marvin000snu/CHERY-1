import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DirectSolvePage } from "../page/directsolvePage/index";
import testResultPage from "../../working/TestResultAnalysis";
const DirectSolveStack = () => {
  const DirectSolve = createStackNavigator();
  return (
    <DirectSolve.Navigator screenOptions={{ headerShown: false }}>
      <DirectSolve.Screen name="DirectSolvePage" component={DirectSolvePage} />
      <DirectSolve.Screen name="testResultPage" component={testResultPage} />
    </DirectSolve.Navigator>
  );
};

export { DirectSolveStack };
