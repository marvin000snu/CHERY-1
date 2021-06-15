import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import afterLogin from './afterLogin'
import GradeStack from './Grade'
import {LoadingPage1} from "../page/LoadingPage/LoadingPage1"
import {DirectSolveStack} from "./DirectSolve"
import MyPageStack from './MyPageStack'
import SettingStack from "./SettingStack"
import QuestionAnalysisStack from "./QuestionAnalysisStack"
const AfterLoginGradeSolveStack = createStackNavigator();

const AfterLoginGradeSolve = () => {
    return (
        <AfterLoginGradeSolveStack.Navigator screenOptions={{ headerShown: false , gestureEnabled: false}}>
            <AfterLoginGradeSolveStack.Screen name="afterLogin" component={afterLogin}/>
            <AfterLoginGradeSolveStack.Screen name="GradeStack" component={GradeStack}/>
            <AfterLoginGradeSolveStack.Screen name="LoadingPage" component={LoadingPage1}/>
            <AfterLoginGradeSolveStack.Screen name="QuestionAnalysisStack" component={QuestionAnalysisStack}/>
            <AfterLoginGradeSolveStack.Screen name="MyPageStack" component={MyPageStack}/>
            <AfterLoginGradeSolveStack.Screen name="DirectSolveStack" component={DirectSolveStack}/>
            <AfterLoginGradeSolveStack.Screen name="SettingStack" component={SettingStack}/>
        </AfterLoginGradeSolveStack.Navigator>
    )
}

export default AfterLoginGradeSolve

