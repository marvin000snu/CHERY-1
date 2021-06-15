import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { GradePage1 } from "../page/Grade/GradePage1";
import { GradePage2 } from "../page/Grade/GradePage2";
import { GradePage3 } from "../page/Grade/GradePage3";

const Grade = createStackNavigator();

const GradeStack = () => {
  return (
    <Grade.Navigator screenOptions={{ headerShown: false }}>
      <Grade.Screen name="GradePage3" component={GradePage3} />
      <Grade.Screen name="GradePage1" component={GradePage1} />
      <Grade.Screen name="GradePage2" component={GradePage2} />
    </Grade.Navigator>
  );
};

export default GradeStack;
