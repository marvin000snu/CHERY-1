/*
import React, { useState, useEffect, useCallback } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAPI from "../src/hooks/useAPI";
usecallback 때문에 작동하진 않음

const SignOut = () => {
    const [API] = useCallback(useAPI(), []);
    const clearAllData = () => {
        AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))
            .then(() => console.log('Removing All success'));
    };    
    const signOut = async () => {
        try{
            const accessToken = await AsyncStorage.getItem("@AccessToken");
            console.log("token is,", accessToken);
                const signOut = await API.user.deleteUser({
                AccessToken: accessToken,
              });
              console.log("signingOut,", signOut);
              clearAllData();
            } catch (err) {
                /*
                현재 비밀번호가 틀렸을시: [NotAuthorizedException: Incorrect username or password.]
                token이 잘못됐을때(사용자 없을때) [NotAuthorizedException: Invalid Access Token]
                */
//                 console.log(err);
//             }
//       }
// }
