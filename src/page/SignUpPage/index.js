import React, { useCallback, useState } from "react";
import styled from "styled-components/native";
import GlobalStyled from "../../style/GlobalStyled";
import Constants from "expo-constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Modal,
  ScrollView
} from "react-native";
import Bracket from "../../images/iconSvg/Bracket";
import useSchoolAPI from "../../hooks/useSchoolAPI";
import useAPI from "../../hooks/useAPI";
import Input from "../../function/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const Styled = {
  body: styled.View`
    width: 100%;
    height: ${hp(100)}px;
    background-color: #F0F2F7;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    width: wp(100),
    alignItems: "center",
    height: hp(100)
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  container: {
    flex: 1,
    marginTop: 20.04
  },
  scrollView: {
    backgroundColor: "pink"
  },
  container: {
    flex: 1
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
});
const SignUp = ({ navigation }) => {
  const [API] = useCallback(useAPI(), []);
  const [school, setSchool] = useState("");
  const [schoolId, setSchoolId] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [schoolAPI] = useCallback(useSchoolAPI(), []);
  const [schoolArray, setSchoolArray] = useState([]);
  const [schoolDisable, setSchoolDisable] = useState(true);
  const [phone, setPhone] = useState("");
  const [certificateCode, setCertificateCode] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(false  );
  const [idValid, setIdValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [certificateCodeEdit, setCertificateCodeEdit] = useState(false);
  const [userSession, setUserSession] = useState();
  const [sendCount, setSendCount] = useState(0);
  const schoolSearch = async () => {
    try {
      if (!schoolDisable) {
        setSchoolDisable(true);
      } else {
        setModalVisible(true);
        const params = {
          search: school
        };
        const { data } = await schoolAPI.school.highSchool(params);
        setSchoolArray(data.dataSearch.content);
      }
    } catch (err) {
      console.log(err);
      console.log(err);
    }
  };
  const modalClose = () => {
    setModalVisible(false);
  };
  const selectSchoolHandler = (id, name) => {
    setModalVisible(false);
    setSchool(name);
    setSchoolId(id);
    setSchoolDisable(false);
  };
  const handleOnClickConfirmButton = async (e) => {
    const isEmptyValue = false;
    if (phoneValid && idValid && nameValid && passwordValid) {
      e.preventDefault();
      try {
        let isRegularExpression = true;
        if (isRegularExpression) {
          if(sendCount===0){
            const result = await API.user.register({
              userId: userId,
              password: password,
              confirmPassword: passwordCheck,
              name: name,
              phoneNumber: phone,
              confirmPhoneNumber: "",
              school: school,
              loginWith: "MISE",
            });
            setUserSession(result);
            setCertificateCodeEdit(true);
            alert("인증문자를 발송했습니다.");
          }else{
            await API.user.resendConfirmationCode(userSession)
          }
        }
      } catch (err) {
        console.log(err)
        if (
          err.message === "PreSignUp failed with error overlap_phonenumber."
        ) {
          alert("이미 사용중인 전화번호입니다.");
        }
        if (err.message === "Invalid phone number format.") {
          alert("올바르지 않은 전화번호 입니다.");
        }
        if (err.message === "User already exists") {
          alert("이미 사용중인 아이디 입니다.");
        }
      } finally {
        setSendCount(sendCount+1)
      }
    } else {
      alert("모든정보를 정확히 입력해주세요.");
    }
  };
  const signUpHandler = async (e) => {
    try {
      if (phoneValid && idValid && nameValid && passwordValid) {
        await API.user.confirmRegister(userSession, certificateCode);
        alert("회원가입을 완료했습니다!")
        navigation.navigate("beforeLogin", {
          screen: "login"
        });
      } else {
        alert("입력하지 않은 정보가 있습니다.");
      }
    } catch (err) {
      console.log(err);
      if ((err.code = "InvalidLambdaResponseException")) {
        if (err.message === "Invalid version. Version should be 1") {
          navigation.navigate("beforeLogin", {
            screen: "login"
          });
        } else if (
          err.message ===
          "Invalid verification code provided, please try again."
        ) {
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
  const goBackHandler = () => {
    navigation.navigate("beforeLogin", { screen: "login" });
  };
  return (
    <Styled.body behavior="height" enabled>
      <Modal visible={modalVisible} animationType="slide">
        <Styled.body>
          <Styled.section>
            <GlobalStyled.ViewRow
              as={TouchableOpacity}
              height={30}
              justifyContent="flex-start"
              onPress={modalClose}
            >
              <Bracket style={{ marginLeft: 20 }} />
            </GlobalStyled.ViewRow>
            <GlobalStyled.ViewRow height={100}>
              <Text
                style={{ color: "#5471FF", fontSize: 25, fontWeight: "bold"}}
              >
                학교 목록
              </Text>
            </GlobalStyled.ViewRow>
            <GlobalStyled.ViewCol style={{ flex: 1, marginBottom:50, borderRadius:15, overflow: "hidden"}}>
              <ScrollView contentContainerStyle={{backgroundColor:"white",}} showsVerticalScrollIndicator= {false}>
                <GlobalStyled.ViewCol width={wp(90)}>
                  {schoolArray.map((v) => {
                    return (
                      <GlobalStyled.ViewRow
                        height={60}
                        style={{
                          borderBottomWidth: 1,
                          borderColor: "#E6ECEF",
                          marginBottom: 10,
                          marginTop: 10
                        }}
                      >
                        <GlobalStyled.ViewCol width="80%">
                          <GlobalStyled.ViewRow height={40}>
                            <Text style={{ lineHeight: 40, fontSize: 20 }}>
                              {v.schoolName}
                            </Text>
                          </GlobalStyled.ViewRow>
                          <GlobalStyled.ViewRow height={20}>
                            <Text style={{ fontSize: 10 }}>{v.adres}</Text>
                          </GlobalStyled.ViewRow>
                        </GlobalStyled.ViewCol>
                        <GlobalStyled.ViewCol width="20%">
                          <GlobalStyled.ViewCol
                            onPress={() => {
                              selectSchoolHandler(v.seq, v.schoolName);
                            }}
                            width="90%"
                            height="90%"
                            as={TouchableOpacity}
                            style={{
                              backgroundColor: "#AC8AFA",
                              borderRadius: 5
                            }}
                          >
                            <Text
                              style={{
                                color: "white",
                                fontSize: 15,
                                fontWeight: "bold"
                              }}
                            >
                              선택
                            </Text>
                          </GlobalStyled.ViewCol>
                        </GlobalStyled.ViewCol>
                      </GlobalStyled.ViewRow>
                    );
                  })}
                </GlobalStyled.ViewCol>
              </ScrollView>
            </GlobalStyled.ViewCol>
          </Styled.section>
        </Styled.body>
      </Modal>
      <KeyboardAwareScrollView
        scrollEnabled={false}
        extraHeight={100}
        resetScrollToCoords={{ x: 0, y: 0 }}
        style={{ width: wp(100), height: hp(100) }}
      >
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
              >
                <Text
                  style={{
                    textAlign: "center",
                    width: "100%",
                    fontSize: 32,
                    color: "#5471FF",
                    fontWeight: "bold",
                    fontFamily:"12LotteMartDreamMedium"
                  }}
                >
                  회원가입
                </Text>
              </View>
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
          <ScrollView style={{width: "100%",}} contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator= {false}>
          <View
            style={{
              width: "100%",
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <GlobalStyled.ViewCol
              justifyContent="flex-start"
              width="90%"
              height={560}
              style={{
                marginTop: 30,
                backgroundColor: "white",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
                borderRadius: 10
              }}
            >
              <GlobalStyled.ViewCol height={560}>
                <GlobalStyled.ViewCol height={80} style={{}}>
                  <GlobalStyled.ViewRow height="50%">
                    <Text style={{ width: "90%" }}>이름</Text>
                  </GlobalStyled.ViewRow>
                  <GlobalStyled.ViewRow height="50%" alignItems="flex-start">
                    <Input
                      onValidation={(isValid) => {
                        setNameValid(isValid[0]);
                      }}
                      pattern={[/^[가-힣]*$/]}
                      placeholder=" 이름을 입력해주세요."
                      placeholderTextColor="#979CA7"
                      value={name}
                      onChangeText={setName}
                      style={{
                        width: "90%",
                        borderRadius: 4,
                        borderWidth: 1,
                        height: "100%",
                        maxHeight: 30,
                        borderColor: nameValid ? "#E6ECEF" : "red"
                      }}
                    ></Input>
                  </GlobalStyled.ViewRow>
                </GlobalStyled.ViewCol>
                <GlobalStyled.ViewRow height={80}>
                  <GlobalStyled.ViewCol width="70%">
                    <GlobalStyled.ViewRow height="50%">
                      <Text style={{ width: "86%" }}>학교</Text>
                    </GlobalStyled.ViewRow>
                    <GlobalStyled.ViewRow height="50%" alignItems="flex-start">
                      <TextInput
                        value={school}
                        editable={schoolDisable}
                        onChangeText={setSchool}
                        placeholder=" 학교이름을 검색해주세요. "
                        placeholderTextColor="#979CA7"
                        style={{
                          width: "86%",
                          borderRadius: 4,
                          borderWidth: 1,
                          height: "100%",
                          maxHeight: 30,
                          borderColor: "#E6ECEF"
                        }}
                      ></TextInput>
                    </GlobalStyled.ViewRow>
                  </GlobalStyled.ViewCol>
                  <GlobalStyled.ViewCol width="30%">
                    <GlobalStyled.ViewRow height="50%">
                      <Text style={{ width: "80%" }}></Text>
                    </GlobalStyled.ViewRow>
                    <GlobalStyled.ViewRow
                      height="50%"
                      alignItems="flex-start"
                      justifyContent="space-around"
                    >
                      <GlobalStyled.ViewRow
                        as={TouchableOpacity}
                        width="70%"
                        style={{
                          maxHeight: 30,
                          backgroundColor: "#5471FF",
                          borderRadius: 4
                        }}
                        onPress={schoolSearch}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 15,
                            fontWeight: "bold"
                          }}
                        >
                          {schoolDisable ? "검색" : "수정"}
                        </Text>
                      </GlobalStyled.ViewRow>
                    </GlobalStyled.ViewRow>
                  </GlobalStyled.ViewCol>
                </GlobalStyled.ViewRow>

                <GlobalStyled.ViewCol height={80}>
                  <GlobalStyled.ViewRow height="50%">
                    <Text style={{ width: "90%" }}>아이디</Text>
                  </GlobalStyled.ViewRow>
                  <GlobalStyled.ViewRow height="50%" alignItems="flex-start">
                    <Input
                      value={userId}
                      onChangeText={setUserId}
                      autoCapitalize={false}
                      onValidation={(isValid) => {
                        setIdValid(isValid[0]);
                      }}
                      pattern={[/^[0-9a-z]{8,21}$/]}
                      placeholder="숫자 + 소문자, 8자리 이상의 아이디"
                      placeholderTextColor="#979CA7"
                      style={{
                        width: "90%",
                        borderRadius: 4,
                        borderWidth: 1,
                        height: "100%",
                        maxHeight: 30,
                        borderColor: idValid ? "#E6ECEF" : "red"
                      }}
                      maxLength={20}
                    ></Input>
                  </GlobalStyled.ViewRow>
                </GlobalStyled.ViewCol>
                <GlobalStyled.ViewCol height={80}>
                  <GlobalStyled.ViewRow height="50%">
                    <Text style={{ width: "90%" }}>비밀번호</Text>
                  </GlobalStyled.ViewRow>
                  <GlobalStyled.ViewRow height="50%" alignItems="flex-start">
                    <Input
                      value={password}
                      onChangeText={setPassword}
                      pattern={[/^(?=.*[a-z])(?=.*\d)[a-z\d]{8,21}$/]}
                      onValidation={(isValid) => {
                        setPasswordValid(isValid[0]);
                      }}
                        placeholderTextColor="#979CA7"
                        secureTextEntry={true}
                      placeholder="숫자 + 소문자, 8자리 이상의 비밀번호"                                                                                                                    
                      style={{
                        width: "90%",
                        borderRadius: 4,
                        borderWidth: 1,
                        height: "100%",
                        maxHeight: 30,
                        borderColor: passwordValid ? "#E6ECEF" : "red"
                      }}
                      maxLength={20}
                    ></Input>
                  </GlobalStyled.ViewRow>
                </GlobalStyled.ViewCol>
                <GlobalStyled.ViewCol height={80}>
                  <GlobalStyled.ViewRow height="50%">
                    <Text style={{ width: "90%" }}>비밀번호 재입력</Text>
                  </GlobalStyled.ViewRow>
                  <GlobalStyled.ViewRow height="50%" alignItems="flex-start">
                    <Input
                      value={passwordCheck}
                      onChangeText={setPasswordCheck}
                      secureTextEntry={true}
                      placeholderTextColor="#979CA7"
                      placeholder="비밀번호를 다시 입력해주세요."
                      style={{
                        width: "90%",
                        borderRadius: 4,
                        borderWidth: 1,
                        height: "100%",
                        maxHeight: 30,
                        borderColor:
                          password === passwordCheck || passwordCheck === ""
                            ? "#E6ECEF"
                            : "red"
                      }}
                    ></Input>
                  </GlobalStyled.ViewRow>
                </GlobalStyled.ViewCol>
                <GlobalStyled.ViewRow height={80}>
                  <GlobalStyled.ViewCol width="65%">
                    <GlobalStyled.ViewRow height="50%">
                      <Text style={{ width: "86%" }}>전화번호</Text>
                    </GlobalStyled.ViewRow>
                    <GlobalStyled.ViewRow height="50%" alignItems="flex-start">
                      <Input
                        keyboardType="number-pad"
                        value={phone}
                        pattern={[/^[0-9]{11}$/]}
                        onChangeText={setPhone}
                        onValidation={(isValid) => {
                          setPhoneValid(isValid[0]);
                        }}
                        placeholderTextColor="#979CA7"
                        placeholder=" -없이 입력해주세요."
                        style={{
                          width: "86%",
                          borderRadius: 4,
                          borderWidth: 1,
                          height: "100%",
                          maxHeight: 30,
                          borderColor: phoneValid ? "#E6ECEF" : "red"
                        }}
                      ></Input>
                    </GlobalStyled.ViewRow>
                  </GlobalStyled.ViewCol>
                  <GlobalStyled.ViewCol width="35%">
                    <GlobalStyled.ViewRow height="50%">
                      <Text style={{ width: "80%" }}></Text>
                    </GlobalStyled.ViewRow>
                    <GlobalStyled.ViewRow
                      height="50%"
                      alignItems="flex-start"
                      justifyContent="flex-start"
                    >
                      <GlobalStyled.ViewRow
                        as={TouchableOpacity}
                        width="90%"
                        style={{
                          maxHeight: 30,
                          backgroundColor: "#5471FF",
                          borderRadius: 4
                        }}
                        onPress={handleOnClickConfirmButton}
                      >
                        <Text
                          style={{
                            color: "white",
                            fontSize: 12,
                            fontWeight: "bold"
                          }}
                        >
                          {sendCount===0? "인증번호 전송":"재전송"}
                        </Text>
                      </GlobalStyled.ViewRow>
                    </GlobalStyled.ViewRow>
                  </GlobalStyled.ViewCol>
                </GlobalStyled.ViewRow>
                <GlobalStyled.ViewCol height={80}>
                  <GlobalStyled.ViewRow height="50%">
                    <Text style={{ width: "90%" }}>인증번호 입력</Text>
                  </GlobalStyled.ViewRow>
                  <GlobalStyled.ViewRow height="50%" alignItems="flex-start">
                    <TextInput
                      editable={certificateCodeEdit}
                      value={certificateCode}
                      onChangeText={setCertificateCode}
                      placeholderTextColor="#979CA7"
                      placeholder=""
                      style={{
                        width: "90%",
                        borderRadius: 4,
                        borderWidth: 1,
                        height: "100%",
                        maxHeight: 30,
                        borderColor: "#E6ECEF"
                      }}
                    ></TextInput>
                  </GlobalStyled.ViewRow>
                </GlobalStyled.ViewCol>
              </GlobalStyled.ViewCol>
            </GlobalStyled.ViewCol>
              <GlobalStyled.ViewRow
                onPress={signUpHandler}
                as={TouchableOpacity}
                height={50}
                width="80%"
                style={{ backgroundColor: "#6F87FF", borderRadius: 25, marginVertical:10 }}
              >
                <Text style={{ color: "white", fontSize: 24, fontFamily:"NotoSansCJKkr-Bold" }}>회원가입</Text>
              </GlobalStyled.ViewRow>
          </View>
          </ScrollView>
       
        </Styled.section>
      </KeyboardAwareScrollView>
    </Styled.body>
  );
};

export default SignUp;
