import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {LearningStatusPage1} from "../page/statuspage/index"

const Stack = createStackNavigator(); 

const StatusStack = ()=>{

    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LearningStatusPage1" component={LearningStatusPage1}/>
        </Stack.Navigator>
    )
}

export default StatusStack