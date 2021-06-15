import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {DailyLearningPage1} from '../page/dailyLearningPage/DailyLearningPage1'
import {DailyLearningPage2} from '../page/dailyLearningPage/DailyLearningPage2'

const Stack = createStackNavigator(); 

const EveryDayLearningStack = ()=>{
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
    return(
        <Stack.Navigator screenOptions={{
            transitionSpec :{
                open: config,
                close: config
            },
            headerShown: false
        }}>
            <Stack.Screen name="DailyLearningPage1" component={DailyLearningPage1} options={{
            transitionSpec: {
              open: config,
              close: config
            }
          }}/>
            <Stack.Screen name="DailyLearningPage2" component={DailyLearningPage2} options={{
            transitionSpec: {
              open: config,
              close: config
            }
          }}/>
        </Stack.Navigator>
    )
}

export default EveryDayLearningStack