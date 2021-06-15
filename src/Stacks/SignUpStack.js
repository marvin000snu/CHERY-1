import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
// import SignUp from "../page/SignUpPage/index"
import {FindPassword} from "../page/findPw/FindPassWord"
import {FindId} from "../page/findIdPage/index"
import SignUp from "../../working/SignUp"
import FindSchool from "../../working/FindSchool"
import PhoneCertificate from "../../working/PhoneCertificate"
const Stack = createStackNavigator();


const SignUpStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="FindSchool" component={FindSchool}/>
            <Stack.Screen name="FindId" component={FindId}/>
            <Stack.Screen name="PhoneCertificate" component={PhoneCertificate}/>
        </Stack.Navigator>
    )
}

export default SignUpStack


