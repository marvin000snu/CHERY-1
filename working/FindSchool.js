import React, { useState, useEffect, useCallback } from "react";
import GlobalStyled from "../src/style/GlobalStyled";
import PrevBtn from "./components/Find/PrevBtn";
import { Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import SignUpLense from "./svg/SignUpLense";
import useSchoolAPI from "../src/hooks/useSchoolAPI";

const FindSchool = (props) => {
  const { school, setSchool, setModalVisible,grade, setGrade, setSchoolValid } = props;
  const [schoolAPI] = useCallback(useSchoolAPI(), []);
  const [schoolArray, setSchoolArray] = useState([{ schoolName: "송림고등학교", adres: "성남대로 343번길 10-6" }]);
  useEffect(() => {
    const AsyncFunction = async () => {
      try {
        if (school !== "") {
          const params = {
            search: school,
          };
          const { data } = await schoolAPI.school.highSchool(params);
          setSchoolArray(data.dataSearch.content);
        } else {
        }
      } catch (err) {
      } finally {
      }
    };
    AsyncFunction();
  }, []);
  const submitHandler = (v) => {
    if (grade === -1) {
      alert("학년을 선택해주세요!");
    } else {
      setSchool(v)
      setModalVisible(false);
      setSchoolValid(true)
    }
  };
  return (
    <GlobalStyled.ViewCol style={{ paddingTop: 40, paddingBottom: 40, justifyContent: "flex-start", backgroundColor: "#FFFFFF" }}>
      <GlobalStyled.ViewRow height="50px" justifyContent="space-between">
        <GlobalStyled.ViewCol width="50px">
          <PrevBtn marginTop={0} />
        </GlobalStyled.ViewCol>
        <Text style={{ fontWeight: "bold", fontSize: 32, color: "#5571FF" }}>학교찾기</Text>
        <GlobalStyled.ViewCol width="50px"></GlobalStyled.ViewCol>
      </GlobalStyled.ViewRow>
      <ScrollView style={{ marginTop: 10, width: wp(100), flex: 1 }} contentContainerStyle={{ flexGrow: 1, flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }} showsVerticalScrollIndicator= {false}>
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
          <GlobalStyled.ViewRow style={{ marginTop: 10, width: "95%", height: 24 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16, width: "100%", textAlign: "left" }}>학년</Text>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow style={{ marginTop: 10, width: "95%", height: 30, justifyContent: "space-between" }}>
            {["예비 고1", "고1", "고2", "고3", "N수생"].map((v, idx) => {
              return (
                <GlobalStyled.ViewRow
                  as={TouchableOpacity}
                  onPress={() => {
                    setGrade(idx);
                  }}
                  width="17%"
                  style={{ borderWidth: grade === idx ? 2 : 1, borderColor: grade === idx ? "#5571FF" : "#979CA7", borderRadius: 4 }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>{v}</Text>
                </GlobalStyled.ViewRow>
              );
            })}
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow style={{ marginTop: 10, width: "95%", height: 24 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16, width: "100%", textAlign: "left" }}>재학/졸업 학교찾기</Text>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow style={{ marginVertical: 10, width: "95%", height: 30, borderRadius: 5, borderWidth: 1, borderColor: "#979CA7" }}>
            <TextInput style={{ flex: 1, height: "100%" }} value={school}></TextInput>
            <SignUpLense style={{ marginHorizontal: 10 }} size={20} />
          </GlobalStyled.ViewRow>
          {schoolArray.map((v) => {
            return (
              <GlobalStyled.ViewCol height="32px" style={{ marginBottom: 10 }} width="90%" as={TouchableOpacity} onPress={()=>{submitHandler(v.schoolName)}}>
                <Text style={{ fontWeight: "bold", fontSize: 14, color: "#5571FF", width: "100%", textAlign: "left" }}>{v.schoolName}</Text>
                <Text style={{ fontSize: 10, color: "#979CA7", width: "100%", textAlign: "left" }}>{v.adres}</Text>
              </GlobalStyled.ViewCol>
            );
          })}
        </GlobalStyled.ViewCol>
      </ScrollView>
    </GlobalStyled.ViewCol>
  );
};

export default FindSchool;
