import React, { useCallback, useState } from "react";
import GlobalStyled from "../../style/GlobalStyled";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import Bracket from "../../images/iconSvg/Bracket";
import styled from "styled-components";
import Input from "../../function/Input";
import Constants from "expo-constants";
import useAPI from "../../hooks/useAPI";
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

const FindId = ({ navigation }) => {
  const [API] = useCallback(useAPI(), []);
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState([false, false]);
  const goBackHandler = () => [
    navigation.navigate("beforeLogin", { screen: "login" })
  ];
  const searchHandler = async () => {
    try {
      if (valid.includes(false)) {
        if (!valid[0]) {
          alert("이름을 정확하게 입력하세요.");
        } else {
          alert("전화번호를 정확하게 입력하세요.");
        }
      } else {
        const params = {
          userId: userName,
          body: { phoneNumber: "+82" + phoneNumber, inputName: userName }
        };
        const { data } = await API.auth.findId(params);
        Alert.alert(
          "비밀번호 찾기 진행",
          `${userName} 님의 아이디는 ${data.id} 입니다. 비밀번호 찾기를 진행할까요?`,
          [
            {
              text: "취소",
              onPress: () => {},
              style: "cancel"
            },
            {
              text: "진행",
              onPress: () => {
                navigation.navigate("findPassword", { id: data.id });
              },
              style: "ok"
            }
          ]
        );
      }
    } catch (err) {
      console.log(err);
      if (err.response.data.msg === "phone not register") {
        alert("등록되지 않은 전화번호 입니다.");
      }
      if (err.response.data.msg === "phone name unmatch") {
        alert("전화번호와 이름이 일치하지 않습니다.");
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
                아이디 찾기
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  marginTop:10
                }}
              >
                아이디를 잊으셨나요?
              </Text>
              <GlobalStyled.ViewCol
                style={{
                  marginTop: 40,
                  marginBottom: 50,
                  borderRadius: 10,
                  width: "90%",
                  paddingVertical: 20,
                  backgroundColor:"white"
                }}
                flexDirectionL="column"
                height="250"
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
                  이름
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
                  placeholder="이름을 입력해주세요."
                  value={userName}
                  onChangeText={setUserName}
                  pattern={[/^[가-힣]*$/]}
                  onValidation={(isValid) => {
                    setValid([isValid[0], valid[1]]);
                  }}
                ></Input>
                <Text
                  style={{
                    width: "80%",
                    marginBottom: 10,
                    fontSize: 16,
                    color: "#1B2C49"
                  }}
                >
                  휴대전화
                </Text>

                <Input
                  style={{
                    width: "80%",
                    borderRadius: 4,
                    borderWidth: 1,
                    height: "100%",
                    maxHeight: 30,
                    borderColor: "#1B2C49",
                    marginBottom: 50
                  }}
                  placeholder="-없이 입력해주세요."
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  pattern={[/^\d{11}$/]}
                  onValidation={(isValid) => {
                    setValid([valid[0], isValid[0]]);
                  }}
                ></Input>
                <GlobalStyled.ViewCol width="60%" height="50px">
                  <GlobalStyled.ViewCol
                    width="100%"
                    height="100%"
                    style={[{ backgroundColor: "#6F87FF", borderRadius: 10 }]}
                    as={TouchableOpacity}
                    onPress={searchHandler}
                  >
                    <Text style={{ color: "white", fontSize: 18 }}>
                      아이디 찾기
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

export { FindId };
