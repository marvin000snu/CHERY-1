import React, { useRef, useState, useCallback } from "react";
import GlobalStyled from "../src/style/GlobalStyled";
import PrevBtn from "./components/Find/PrevBtn";
import { Text, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Input from "../src/function/Input";
import useAPI from "../src/hooks/useAPI";
const PhoneCertificate = (props) => {
  const {navigation} = props;
  const [API] = useCallback(useAPI(), []);
  const TextInputRef1 = useRef();
  const TextInputRef2 = useRef();
  const TextInputRef3 = useRef();
  const TextInputRef4 = useRef();
  const TextInputRef5 = useRef();
  const TextInputRef6 = useRef();
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");
  const [val4, setVal4] = useState("");
  const [val5, setVal5] = useState("");
  const [val6, setVal6] = useState("");
  const signUpHandler = async () => {
    try {
      if (val1 && val2 && val3 && val4 && val5 && val6) {
        console.log("session?", props.route.params.userSession);
        await API.user.confirmRegister(props.route.params.userSession, val1 + val2 + val3 + val4 + val5 + val6);
        alert("회원가입을 완료했습니다!");
        const {username} = props.route.params.userSession;
        const authCallBack = await API.auth.callBack({body: {id: username}});
        props.navigation.navigate("beforeLogin", {
          screen: "login",
        });
      } else {
        alert("입력하지 않은 정보가 있습니다.");
      }
    } catch (err) {
      console.log(err);
      if ((err.code = "InvalidLambdaResponseException")) {
        if (err.message === "Invalid version. Version should be 1") {
          navigation.navigate("beforeLogin", {
            screen: "login",
          });
        } else if (err.message === "Invalid verification code provided, please try again.") {
          alert("인증번호가 바르지 않습니다.");
        } else {
          alert("오류가 발생했습니다. 다시 시도해주세요.");
        }
      }
      if (err.code === "CodeMismatchException") {
        alert("인증번호가 올바르지 않습니다.");
      } else {
      }
    } finally {
    }
  };

  return (
    <GlobalStyled.ViewCol style={{ paddingTop: 40, paddingBottom: 40, justifyContent: "flex-start", backgroundColor: "#FFFFFF" }}>
      <GlobalStyled.ViewRow height="50px" justifyContent="space-between">
        <GlobalStyled.ViewCol width="50px">
          <PrevBtn marginTop={0} />
        </GlobalStyled.ViewCol>
        <Text style={{ fontWeight: "bold", fontSize: 32, color: "#5571FF" }}>인증번호 입력</Text>
        <GlobalStyled.ViewCol width="50px"></GlobalStyled.ViewCol>
      </GlobalStyled.ViewRow>
      <KeyboardAwareScrollView style={{ marginTop: 10, width: wp(100), flex: 1 }} contentContainerStyle={{ flexGrow: 1, flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }}>
        <GlobalStyled.ViewCol
          style={{
            height: "auto",
            width: "95%",
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            backgroundColor: "white",
            marginTop: 10,
          }}
        >
          <GlobalStyled.ViewRow height="60px" width="320px" justifyContent="space-between" style={{ marginVertical: 20 }}>
            <Input
              onChange={(e) => {
                setVal1(e.nativeEvent.text.slice(-1));
                if (e.nativeEvent.text.length >= 1) {
                  TextInputRef2.current.focus();
                }
              }}
              // maxLength={1}
              value={val1}
              getref={TextInputRef1}
              style={{ width: "15%", height: "100%", borderBottomWidth: 3, borderColor: "black", fontSize: 40, textAlign: "center" }}
            ></Input>
            <Input
              // maxLength={1}
              onChange={(e) => {
                setVal2(e.nativeEvent.text.slice(-1));
                if (e.nativeEvent.text.length >= 1) {
                  TextInputRef3.current.focus();
                }
                if (e.nativeEvent.text.length <= 0) {
                  TextInputRef1.current.focus();
                }
              }}
              value={val2}
              getref={TextInputRef2}
              style={{ width: "15%", height: "100%", borderBottomWidth: 3, borderColor: "black", fontSize: 40, textAlign: "center" }}
            ></Input>
            <Input
              // maxLength={1}
              onChange={(e) => {
                setVal3(e.nativeEvent.text.slice(-1));
                if (e.nativeEvent.text.length >= 1) {
                  TextInputRef4.current.focus();
                }
                if (e.nativeEvent.text.length <= 0) {
                  TextInputRef2.current.focus();
                }
              }}
              value={val3}
              getref={TextInputRef3}
              style={{ width: "15%", height: "100%", borderBottomWidth: 3, borderColor: "black", fontSize: 40, textAlign: "center" }}
            ></Input>
            <Input

              onChange={(e) => {
                setVal4(e.nativeEvent.text.slice(-1));
                if (e.nativeEvent.text.length <= 0) {
                  TextInputRef3.current.focus();
                }
                if (e.nativeEvent.text.length >= 1) {
                  TextInputRef5.current.focus();
                }
              }}
              getref={TextInputRef4}
              value={val4}
              style={{ width: "15%", height: "100%", borderBottomWidth: 3, borderColor: "black", fontSize: 40, textAlign: "center" }}
            ></Input>
            <Input
 
              onChange={(e) => {
                setVal5(e.nativeEvent.text.slice(-1));
                if (e.nativeEvent.text.length <= 0) {
                  TextInputRef4.current.focus();
                }
                if (e.nativeEvent.text.length >= 1) {
                  TextInputRef6.current.focus();
                }
              }}
              getref={TextInputRef5}
              value={val5}
              style={{ width: "15%", height: "100%", borderBottomWidth: 3, borderColor: "black", fontSize: 40, textAlign: "center" }}
            ></Input>
            <Input
              maxLength={1}
              onChange={(e) => {
                setVal6(e.nativeEvent.text.slice(-1));
                if (e.nativeEvent.text.length <= 0) {
                  TextInputRef5.current.focus();
                }
              }}
              getref={TextInputRef6}
              value={val6}
              style={{ width: "15%", height: "100%", borderBottomWidth: 3, borderColor: "black", fontSize: 40, textAlign: "center" }}
            ></Input>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow height="30px" style={{ marginVertical: 10 }} as={TouchableOpacity}>
            <Text>인증번호 재전송</Text>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow width="180px" height="40px" style={{ borderRadius: 20, marginVertical: 20, backgroundColor: "#6F87FF" }} as={TouchableOpacity} onPress={signUpHandler}>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>가입완료</Text>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      </KeyboardAwareScrollView>
    </GlobalStyled.ViewCol>
  );
};

export default PhoneCertificate;
