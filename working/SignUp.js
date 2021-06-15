import React, { useState, useCallback } from "react";
import GlobalStyled from "../src/style/GlobalStyled";
import PrevBtn from "./components/Find/PrevBtn";
import { Text, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import SignUpMark from "./svg/SignUpMark";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../src/function/Input";
import Modal from "react-native-modal";
import FindSchool from "./FindSchool";
import useAPI from "../src/hooks/useAPI";
const SignUp = (props) => {
  const { navigation } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = "";
  const [nameValid, setNameValid] = useState(false);
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState(-1);
  const [schoolValid, setSchoolValid] = useState(false);
  const [id, setId] = useState("");
  const [idValid, setIdValid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordDuplicate, setPasswordDuplicate] = useState("");
  const [passwordDuplicateValid, setPasswordDuplicateValid] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneValid, setPhoneValid] = useState(false);
  const [acceptAll, setAcceptAll] = useState(false);
  const [acceptList, setAcceptList] = useState([false, false, false, false]);
  const [userSession, setUserSession] = useState();
  const [API] = useCallback(useAPI(), []);

  const handleOnClickConfirmButton = async (e) => {
    if (nameValid && schoolValid && idValid && passwordValid && passwordDuplicateValid) {
      e.preventDefault();
      try {
        const result = await API.user.register({
          userId: id,
          password: password,
          confirmPassword: passwordDuplicate,
          name: name,
          phoneNumber: phone,
          confirmPhoneNumber: "",
          school: school,
        });
        setUserSession(result);
        alert("인증문자를 발송했습니다.");
        navigation.navigate("PhoneCertificate",{userSession:result})
      } catch (err) {
        console.log(err);
        if (err.message === "PreSignUp failed with error overlap_phonenumber.") {
          alert("이미 사용중인 전화번호입니다.");
        }
        if (err.message === "Invalid phone number format.") {
          alert("올바르지 않은 전화번호 입니다.");
        }
        if (err.message === "User already exists") {
          alert("이미 사용중인 아이디 입니다.");
        }
      } finally {
        setSendCount(sendCount + 1);
      }
    } else {
      alert("모든정보를 정확히 입력해주세요.");
    }
  };


  return (
    <GlobalStyled.ViewCol style={{ paddingTop: 40, paddingBottom: 40, justifyContent: "flex-start", backgroundColor: "#FFFFFF" }}>
      <Modal style={{ padding: 0, margin: 0 }} isVisible={modalVisible}>
        <FindSchool school={school} setSchool={setSchool} setModalVisible={setModalVisible} setSchoolValid={setSchoolValid} grade={grade} setGrade={setGrade} />
      </Modal>
      <GlobalStyled.ViewRow height="50px" justifyContent="space-between">
        <GlobalStyled.ViewCol width="50px">
          <PrevBtn marginTop={0} />
        </GlobalStyled.ViewCol>
        <Text style={{ fontWeight: "bold", fontSize: 32, color: "#5571FF" }}>회원 가입</Text>
        <GlobalStyled.ViewCol width="50px"></GlobalStyled.ViewCol>
      </GlobalStyled.ViewRow>
      <KeyboardAwareScrollView style={{ marginTop: 10, width: wp(100), flex: 1 }} contentContainerStyle={{ flexGrow: 1, flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }}>
        <GlobalStyled.ViewCol
          style={{
            height: 655,
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
          <GlobalStyled.ViewRow style={{ marginTop: 10, width: "95%", height: 24 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16, width: "100%", textAlign: "left" }}>이름</Text>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow style={{ marginTop: 10, width: "95%", height: 30 }}>
            <Input
              onChangeText={setName}
              value={name}
              style={{ flex: 1, borderRadius: 5, borderWidth: 1, borderColor: "#979CA7", height: "100%" }}
              pattern={[/^[가-힣]*$/]}
              onValidation={(e) => {
                setNameValid(e[0]);
              }}
            ></Input>
            <SignUpMark size={wp(5)} style={{ marginLeft: 10 }} fill={nameValid ? "#5571FF" : "gray"} />
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow style={{ marginTop: 10, width: "95%", height: 24 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16, width: "100%", textAlign: "left" }}>학교</Text>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow style={{ marginTop: 10, width: "95%", height: 30 }}>
            <Input onChangeText={setSchool} value={school} style={{ flex: 1, borderRadius: 5, borderWidth: 1, borderColor: "#979CA7", height: "100%" }}></Input>
            <GlobalStyled.ViewRow
              style={{ width: 90, backgroundColor: "#5571FF", borderRadius: 5, marginLeft: 10 }}
              as={TouchableOpacity}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text style={{ color: "white" }}>학교찾기</Text>
            </GlobalStyled.ViewRow>
            <SignUpMark size={wp(5)} style={{ marginLeft: 10 }} fill={schoolValid ? "#5571FF" : "gray"} />
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow style={{ marginTop: 10, width: "95%", height: 24 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16, width: "100%", textAlign: "left" }}>아이디</Text>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow style={{ marginTop: 10, width: "95%", height: 30 }}>
            <Input
              autoCapitalize={false}
              onChangeText={setId}
              value={id}
              style={{ flex: 1, borderRadius: 5, borderWidth: 1, borderColor: "#979CA7", height: "100%" }}
              pattern={[/^[0-9a-z]{8,21}$/]}
              onValidation={(e) => {
                setIdValid(e[0]);
              }}
            ></Input>
            <SignUpMark size={wp(5)} style={{ marginLeft: 10 }} fill={idValid ? "#5571FF" : "gray"} />
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow style={{ marginTop: 10, width: "95%", height: 24 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16, width: "100%", textAlign: "left" }}>비밀번호</Text>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow style={{ marginTop: 10, width: "95%", height: 30 }}>
            <Input
              secureTextEntry={true}
              onValidation={(e) => {
                setPasswordValid(e[0]);
              }}
              onChangeText={setPassword}
              value={password}
              style={{ flex: 1, borderRadius: 5, borderWidth: 1, borderColor: "#979CA7", height: "100%" }}
              pattern={[/^(?=.*[a-z])(?=.*\d)[a-z\d]{8,21}$/]}
              textContentType={'newPassword'}
              onValidation={(e) => {
                setPasswordValid(e[0]);
              }}
            ></Input>
            <SignUpMark size={wp(5)} style={{ marginLeft: 10 }} fill={passwordValid ? "#5571FF" : "gray"} />
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow style={{ marginTop: 10, width: "95%", height: 24 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16, width: "100%", textAlign: "left" }}>비밀번호 확인</Text>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow style={{ marginTop: 10, width: "95%", height: 30 }}>
            <Input
              secureTextEntry={true}
              onChangeText={setPasswordDuplicate}
              textContentType={'newPassword'}
              onChange={(e) => {
                setPasswordDuplicateValid(e.nativeEvent.text === password);
              }}
              value={passwordDuplicate}
              style={{ flex: 1, borderRadius: 5, borderWidth: 1, borderColor: "#979CA7", height: "100%" }}
            ></Input>
            <SignUpMark size={wp(5)} style={{ marginLeft: 10 }} fill={passwordDuplicateValid ? "#5571FF" : "gray"} />
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow style={{ marginTop: 10, width: "95%", height: 24 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16, width: "100%", textAlign: "left" }}>휴대폰</Text>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow style={{ marginTop: 10, width: "95%", height: 30 }}>
            <Input
              onChangeText={setPhone}
              value={phone}
              style={{ flex: 1, borderRadius: 5, borderWidth: 1, borderColor: "#979CA7", height: "100%" }}
              pattern={[/^[0-9]{11}$/]}
              onValidation={(e) => {
                setPhoneValid(e[0]);
              }}
            ></Input>
            <SignUpMark size={wp(5)} style={{ marginLeft: 10 }} fill={phoneValid ? "#5571FF" : "gray"} />
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow style={{ width: "95%", marginTop: 10, height: 30 }} justifyContent="flex-start">
            <GlobalStyled.ViewRow
              width="20px"
              height="20px"
              style={{ backgroundColor: "white", marginRight: 10, borderRadius: 4, borderWidth: 1, borderColor: "#DBDCDC" }}
              as={TouchableOpacity}
              onPress={() => {
                setAcceptAll(!acceptAll);
                if (!acceptAll) {
                  setAcceptList([true, true, true, true]);
                }
              }}
            >
              {acceptAll && <SignUpMark size={15} fill="#5571FF"></SignUpMark>}
            </GlobalStyled.ViewRow>
            <Text>전체동의</Text>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow style={{ width: "95%", marginTop: 10, height: 30, backgroundColor: "#F6F5F6", borderRadius: 5, borderWidth: 1, borderColor: "#DBDCDC" }} justifyContent="space-between">
            <Text style={{ paddingLeft: 10 }}>만 14세 이상이며, 약관에 모두 동의합니다.</Text>
            <GlobalStyled.ViewRow
              width="20px"
              height="20px"
              style={{ backgroundColor: "white", marginRight: 10, borderRadius: 4, borderWidth: 1, borderColor: "#DBDCDC" }}
              as={TouchableOpacity}
              onPress={() => {
                var temp = [...acceptList];
                temp[0] = !temp[0];
                setAcceptList(temp);
              }}
            >
              {acceptList[0] && <SignUpMark size={15} fill="#5571FF"></SignUpMark>}
            </GlobalStyled.ViewRow>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow style={{ width: "95%", marginTop: 10, height: 30, backgroundColor: "#F6F5F6", borderRadius: 5, borderWidth: 1, borderColor: "#DBDCDC" }} justifyContent="space-between">
            <Text style={{ paddingLeft: 10 }}>만 14세 이상이며, 약관에 모두 동의합니다.</Text>
            <GlobalStyled.ViewRow
              width="20px"
              height="20px"
              style={{ backgroundColor: "white", marginRight: 10, borderRadius: 4, borderWidth: 1, borderColor: "#DBDCDC" }}
              as={TouchableOpacity}
              onPress={() => {
                var temp = [...acceptList];
                temp[1] = !temp[1];
                setAcceptList(temp);
              }}
            >
              {acceptList[1] && <SignUpMark size={15} fill="#5571FF"></SignUpMark>}
            </GlobalStyled.ViewRow>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow style={{ width: "95%", marginTop: 10, height: 30, backgroundColor: "#F6F5F6", borderRadius: 5, borderWidth: 1, borderColor: "#DBDCDC" }} justifyContent="space-between">
            <Text style={{ paddingLeft: 10 }}>만 14세 이상이며, 약관에 모두 동의합니다.</Text>
            <GlobalStyled.ViewRow
              width="20px"
              height="20px"
              style={{ backgroundColor: "white", marginRight: 10, borderRadius: 4, borderWidth: 1, borderColor: "#DBDCDC" }}
              as={TouchableOpacity}
              onPress={() => {
                var temp = [...acceptList];
                temp[2] = !temp[2];
                setAcceptList(temp);
              }}
            >
              {acceptList[2] && <SignUpMark size={15} fill="#5571FF"></SignUpMark>}
            </GlobalStyled.ViewRow>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow style={{ width: "95%", marginTop: 10, height: 30, backgroundColor: "#F6F5F6", borderRadius: 5, borderWidth: 1, borderColor: "#DBDCDC" }} justifyContent="space-between">
            <Text style={{ paddingLeft: 10 }}>만 14세 이상이며, 약관에 모두 동의합니다.</Text>
            <GlobalStyled.ViewRow
              width="20px"
              height="20px"
              style={{ backgroundColor: "white", marginRight: 10, borderRadius: 4, borderWidth: 1, borderColor: "#DBDCDC" }}
              as={TouchableOpacity}
              onPress={() => {
                var temp = [...acceptList];
                temp[3] = !temp[3];
                setAcceptList(temp);
              }}
            >
              {acceptList[3] && <SignUpMark size={15} fill="#5571FF"></SignUpMark>}
            </GlobalStyled.ViewRow>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>

        <GlobalStyled.ViewRow style={{ marginTop: 15, height: 40, width: 180, borderRadius: 20, backgroundColor: "#5571FF" }} as={TouchableOpacity} onPress={handleOnClickConfirmButton}>
          <Text style={{ fontSize: 18, color: "white" }}>회원가입</Text>
        </GlobalStyled.ViewRow>
      </KeyboardAwareScrollView>
    </GlobalStyled.ViewCol>
  );
};

export default SignUp;
