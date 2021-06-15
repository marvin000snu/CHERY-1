import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import KakaoStart from "./KakaoStart";
import KakaoLogin from "./KakaoLogin";
import AppleStart from "./AppleStart";
import AppleLogin from "./AppleLogin"
const Stack = createStackNavigator();


const KakaoStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="KakaoStart" component={KakaoStart}/>
            <Stack.Screen name="AppleStart" component={AppleStart}/>
            <Stack.Screen name="KakaoLogin" component={KakaoLogin}/>
            <Stack.Screen name="AppleLogin" component={AppleLogin}/>
        </Stack.Navigator>
    )
}

export default KakaoStack


