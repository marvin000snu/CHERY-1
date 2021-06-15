import React, { useCallback, useState } from "react";
import GlobalStyled from "../../style/GlobalStyled";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { View, TouchableOpacity, Text } from "react-native";
import Bracket from "../../images/iconSvg/Bracket";
import styled from "styled-components";
import Input from "../../function/Input";
import Constants from "expo-constants";
import useAPI from "../../hooks/useAPI";
import makeId from "../../function/randomString";
import Clipboard from "@react-native-clipboard/clipboard";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Styled = {
  body: styled.View`
    width: 100%;
    height: ${hp(100)}px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
    background-color: #f0f2f7;
  `,
  section: styled.View`
    height: ${hp(100) - Constants.statusBarHeight}px;
    margin-top: ${Constants.statusBarHeight}px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  `
};
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle
} from "react-native-reanimated";

const FindPassword = ({ navigation, route }) => {
  const [API] = useCallback(useAPI(), []);
  const [userName, setUserName] = useState(route.params ? route.params.id : "");
  const [certificateCode, setCertificateCode] = useState("");
  const [buttonType, setButtonType] = useState(0);

  const offSet = useSharedValue(-60);
  const offSetStyle = useAnimatedStyle(() => {
    return { transform: [{ translateY: offSet.value }] };
  });
  const opacity = useSharedValue(0);
  const opacityStyle = useAnimatedStyle(() => {
    return { opacity: opacity.value };
  });
  const goBackHandler = () => [
    navigation.navigate("beforeLogin", { screen: "login" })
  ];
  const loginHandler = async () => {
    if (buttonType === 0) {
      if (userName === "") {
        alert("아이디를 입력해주세요.");
      } else {
        try {
          alert("인증번호를 발송했습니다.");
          offSet.value = withTiming(0);
          opacity.value = withTiming(1);
          setButtonType(1);
        } catch (err) {
          if (err.response.data.err === "invalidId") {
            alert("등록되지 않은 아이디 입니다.");
          } else {}
        } finally {}
      }
    } else {
      const tempPassword = makeId(8);
      try {
        const params = {
          Password: tempPassword,
          ConfirmationCode: certificateCode,
          Username: userName
        };
        Clipboard.setString(tempPassword);
        alert(
          tempPassword +
            " 로 비밀번호가 변경되었습니다. 클립보드에 복사되었습니다."
        );
      } catch (err) {
        if (
          err.code === "InvalidLambdaResponseException" &&
          err.message === "Invalid version. Version should be 1"
        ) {
          Clipboard.setString(tempPassword);
          alert(
            tempPassword +
              " 로 비밀번호가 변경되었습니다. 클립보드에 복사되었습니다."
          );
          navigation.navigate("beforeLogin", { screen: "login" });
        }
        console.log(Object.keys(err));
        console.log(err);
      }
    }
  };
  return (
    <Styled.body>
      <KeyboardAwareScrollView>
        <Styled.section>
          <View
            style={{
              height: 60,
              width: "100%",
              alignItems: "center"
            }}
          >
            <View
              style={{
                height: 60,
                width: "100%",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                style={{ height: 60, width: "20%", justifyContent: "center" }}
                onPress={goBackHandler}
              >
                <Bracket style={{ marginLeft: 10 }} />
              </TouchableOpacity>
              <View
                style={{ height: 60, width: "60%", justifyContent: "center" }}
              ></View>
              <TouchableOpacity
                style={{
                  height: 60,
                  width: "20%",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              ></TouchableOpacity>
            </View>
          </View>
          <GlobalStyled.ViewCol style={{ flex: 1 }}>
            <GlobalStyled.ViewCol>
              <Text
                style={{ fontWeight: "bold", fontSize: 32, color: "#5471FF" }}
              >
                비밀번호 찾기
              </Text>
              <Text style={{ marginTop: 10, fontSize: 16}}>
                비밀번호를 잊으셨나요?
              </Text>
              <GlobalStyled.ViewCol
                style={{
                  marginTop: 50,
                  backgroundColor: "white",
                  paddingVertical: 30,
                  width: "90%",
                  borderRadius: 10,
                }}
                flexDirectionL="column"
                height="260"
                justifyContent="flex-start"
              >
                <Text
                  style={{
                    width: "80%",
                    marginBottom: 10,
                    fontSize: 16,
                    color: "#1B2C49"
                  }}
                >
                  아이디
                </Text>

                <Input
                  style={{
                    width: "80%",
                    borderRadius: 4,
                    borderWidth: 1,
                    height: "100%",
                    maxHeight: 30,
                    borderColor: "#1B2C49",
                    marginBottom: 10
                  }}
                  placeholder="아이디를 입력해주세요."
                  value={userName}
                  onChangeText={setUserName}
                  autoCapitalize={false}
                ></Input>
                <Animated.View
                  style={[
                    {
                      width: "100%",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      height: 50
                    },
                    opacityStyle
                  ]}
                >
                  <Text
                    as={Animated.Text}
                    style={[
                      {
                        width: "80%",
                        marginBottom: 10,
                        fontSize: 16,
                        color: "#1B2C49"
                      }
                    ]}
                  >
                    인증번호
                  </Text>
                  <Input
                    style={{
                      width: "80%",
                      borderRadius: 4,
                      borderWidth: 1,
                      height: "100%",
                      maxHeight: 30,
                      borderColor: "#1B2C49"
                    }}
                    placeholder="인증번호를 입력해주세요."
                    value={certificateCode}
                    onChangeText={setCertificateCode}
                  ></Input>
                </Animated.View>
                <GlobalStyled.ViewCol
                  width="60%"
                  height="50px"
                  style={[offSetStyle]}
                  as={Animated.View}
                >
                  <GlobalStyled.ViewCol
                    width="100%"
                    height="100%"
                    style={[
                      {
                        backgroundColor: "#6F87FF",
                        marginTop: 50,
                        borderRadius: 10
                      }
                    ]}
                    as={TouchableOpacity}
                    onPress={loginHandler}
                  >
                    <Text style={{ color: "white", fontSize: 18 }}>
                      {buttonType === 0 ? "비밀번호 찾기" : "인증번호 입력"}
                    </Text>
                  </GlobalStyled.ViewCol>
                </GlobalStyled.ViewCol>
              </GlobalStyled.ViewCol>
            </GlobalStyled.ViewCol>
          </GlobalStyled.ViewCol>
          <View
            style={{
              height: 60,
              width: "100%",
              alignItems: "center",
            }}
          ></View>
        </Styled.section>
      </KeyboardAwareScrollView>
    </Styled.body>
  );
};

export { FindPassword };
