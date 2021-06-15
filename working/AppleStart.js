 //최초 로그인했을때만 email과 fullname 전화번호가 온다

import React, { useState, useEffect, useCallback } from 'react';
 import { StyleSheet, View, Text } from 'react-native';
 import { appleAuth, AppleButton } from '@invertase/react-native-apple-authentication';
 import jwt_decode from "jwt-decode";
import useAPI from "../src/hooks/useAPI";

 async function onAppleButtonPress(updateCredentialStateForUser) {
   // start a login request
   try {
     const appleAuthRequestResponse = await appleAuth.performRequest({
       requestedOperation: appleAuth.Operation.LOGIN,
       requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME], //phone number는 불가능 
     });
     const { user, email, nonce, identityToken, realUserStatus, fullName } = appleAuthRequestResponse;
     const userInfo = jwt_decode(identityToken); //userInfo["sub"] -> Since this token is meant for your application, the value is the unique identifier for the user.
     setUserName(fullName);
     fetchAndUpdateCredentialState(updateCredentialStateForUser).catch(error =>
       updateCredentialStateForUser(`Error: ${error.code}`),
     );
     if (realUserStatus === appleAuth.UserStatus.LIKELY_REAL) {
       //여기서 옮겨야합니다

       
     }
   } catch (error) {
     if (error.code === appleAuth.Error.CANCELED) {
       console.warn('User canceled Apple Sign in.');
     } else {
       console.error(error);
     }
   }
 }
 
 export default function AppleStart(props) {
  const {navigation} = props;
   const [credentialStateForUser, updateCredentialStateForUser] = useState(-1);
   const [API] = useCallback(useAPI(), []);
   const [userName, setUserName] = useState("");
   const [userId, setUserId] = useState("");
   async function onNext() {
    const userInfo = await jwt_decode("eyJraWQiOiJZdXlYb1kiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLm1pc2Uuc3dhIiwiZXhwIjoxNjIxNDA2NDA0LCJpYXQiOjE2MjEzMjAwMDQsInN1YiI6IjAwMDk5NS44ZmZmMDRmODIzODc0YWRmYWM4OGVmYTIyMjhkNjE1Zi4wNjExIiwibm9uY2UiOiIzYjVmMDUyYWM3NTRiY2ZlMWE2N2I4YjdjMWY4MWQwNzIxYzI4Mzg4OWExMmIyZTJiMjUyZTk2ZTcyOTE4ZGI1IiwiY19oYXNoIjoiOXFhUGxtX3RISXhjNzdFd0VTVXNOUSIsImVtYWlsIjoibmN4NjY1ZHZzZkBwcml2YXRlcmVsYXkuYXBwbGVpZC5jb20iLCJlbWFpbF92ZXJpZmllZCI6InRydWUiLCJpc19wcml2YXRlX2VtYWlsIjoidHJ1ZSIsImF1dGhfdGltZSI6MTYyMTMyMDAwNCwibm9uY2Vfc3VwcG9ydGVkIjp0cnVlfQ.L6MQvBFw5b-OUsMLRwKrzjiWdhMQOSIc0Hki1T5k4LHA9ktKWKy3VJlU0_CGNHYZ7uXiSUR7uXo1uZ2WiLtd9FYGL1FrYF_X49sNH5zyj9EKSzP50ctSoCon8mltkjyWee2VHjZa9p9fjp4y1Emvzo0xE5tdJFctGC2Z0vporl7kL2TmqKR0ixW2Iw1ELnkLsXZXzRp2Ckf4ET_UuASBd1Uswp3ObnTLj-FnNod3eH-5WDClBnmfVWoeCJ6b_bYSBSUtCmdwtvnzukq1Xte5FpAbM9CLekWF_gfq0V-nBSFvaEJSc_SSjbaF2X_sGZVrwyqlSXs5bRXIfCB3GWxDZA");
    setUserName("유동훈");
    //첨에 fullName을 받아야해요

    setUserId(userInfo["sub"]);
    const oauth2 = await API.auth.appleAuth({body: {id: userId, name: userName}}); //apple가입이 되어있는지 확인
    if(oauth2.status != 200)
      throw new Error("옳지 않은 접근입니다. 다시 시도해 주세요")
    if(oauth2.data.process === "SigningUp") { //가입 중인 사람이라면 페이지 이동
                navigation.navigate("AppleLogin", {
          userId: oauth2.data.id,
          password: oauth2.data.pw,
          name: oauth2.data.userName,
          phoneNumber: null,
        });
    }
    if(oauth2.data.process === "logIn") {
      const loginParams = { userId: oauth2.data.id, password: oauth2.data.pw };
      const result = await API.user.login(loginParams);
      const testResult = await API.test.isTested(loginParams);
      await AsyncStorage.setItem("@userToken", result[0]);
      await AsyncStorage.setItem("@AccessToken", result[1]);

      navigating(testResult.data.result);
    }


  }

   useEffect(() => {
     if (!appleAuth.isSupported) return; 
     return appleAuth.onCredentialRevoked(async () => {
       fetchAndUpdateCredentialState(updateCredentialStateForUser).catch(error =>
         updateCredentialStateForUser(`Error: ${error.code}`),
       );
     });
   }, []);

   if (!appleAuth.isSupported) {
     return (
       <View style={[styles.container, styles.horizontal]}>
         <Text>Apple Authentication이 지원되지 않는 기기입니다.</Text>
       </View>
     );
   }
 
   return (
     <View style={[styles.container, styles.horizontal]}>
       <AppleButton
         style={styles.appleButton}
         cornerRadius={5}
         buttonStyle={AppleButton.Style.BLACK}
         buttonType={AppleButton.Type.SIGN_IN}
         onPress={() => onNext()}

         //         onPress={() => onAppleButtonPress(updateCredentialStateForUser)}
       />
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   appleButton: {
     width: 200,
     height: 60,
     margin: 10,
   },
   header: {
     margin: 10,
     marginTop: 30,
     fontSize: 18,
     fontWeight: '600',
   },
   container: {
     flex: 1,
     justifyContent: 'center',
     backgroundColor: 'pink',
   },
   horizontal: {
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
     padding: 10,
   },
 });
/*
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import appleAuth, {
    AppleButton
  } from '@invertase/react-native-apple-authentication';
  



const Apple = () => {
    useEffect(() => {
        // onCredentialRevoked returns a function that will remove the event listener.
        return appleAuth.onCredentialRevoked(async () => {
          console.warn('If this function executes, User Credentials have been Revoked');
        });
      }, []);
    const onAppleButtonPress = async () => {
        try{
            const appleAuthRequestResponse = await appleAuth.performRequest({
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
            });
            // get current authentication state for user
            // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
            // ?? iOs Simulator에서 Apple Sign In 에러 다수 발생... Login 기능 안되는 것으로 밝혀져... 일동 충격
            const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
            // use credentialState response to ensure the user is authenticated
            if (credentialState === appleAuth.State.AUTHORIZED) {
            // user is authenticated
            }
        } catch (err) {
        console.log("err!!", err);
    }
      };
    

  return (
    <SafeAreaView style={styles.container}>
      <AppleButton
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.SIGN_IN}
        style={styles.appleButton}
        onPress={() => onAppleButtonPress()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appleButton: {width: '70%', height: 45},
});

export default Apple;
*/