import React, { useState, useCallback } from "react";
import GlobalStyled from "../../style/GlobalStyled";
import { Text, View, ScrollView, TextInput, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TestIcon from "../../images/iconSvg/TestIcon";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import codeParser from "../../function/codeParser";
import Bracket from "../../images/iconSvg/Bracket";
import useAPI from "../../hooks/useAPI";
import Input from "../../function/Input";
import moment from "moment";
const SavedProblemModal = (props) => {
  const { finalProblemInfo, setSaveModal, userName, navigation, testList } = props;
  const [testName, setTestName] = useState(moment().format("MM/DD") + "-AI시험지");
  const [API] = useCallback(useAPI(), []);
  const makeHandler = async () => {
    try {
      if (testList.includes(testName)) {
        alert("시험지 이름 중복됩니다.");
      } else {
        setSaveModal(false);
        navigation.navigate("LoadingPage1", {
          type: 4,
          direct: true,
          inputList: finalProblemInfo.map((v) => {
            return v.code;
          }),
          testName: testName,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <GlobalStyled.ViewCol justifyContent="flex-start" style={{ width: "100%", height: 300, backgroundColor: "white", borderRadius: 10 }}>
      <GlobalStyled.ViewCol style={{ backgroundColor: "white", flex: 1, marginTop: 80, marginBottom: 80, width: "95%", borderRadius: 5, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
        {/* <GlobalStyled.ViewRow style={{ height: 30, marginTop: 30, marginBottom: 20 }} justifyContent="space-between">
            <GlobalStyled.ViewRow width="auto">
              <Text style={{ fontSize: 20, fontFamily: "NotoSansKR-Bold", color: "black", marginLeft: 10 }}>시험지 목록</Text>
              <GlobalStyled.ViewRow width="50" style={{ backgroundColor: "#6F87FF", borderRadius: 5, marginLeft: 10 }}>
                <Text>{finalProblemInfo.length}/10</Text>
              </GlobalStyled.ViewRow>
            </GlobalStyled.ViewRow>
            <GlobalStyled.ViewRow width="50" style={{ borderWidth: 1, height: 30, borderRadius: 15, marginRight: 10 }}>
              <Text>편집</Text>
            </GlobalStyled.ViewRow>
          </GlobalStyled.ViewRow> */}
        <GlobalStyled.ViewCol style={{ flex: 1, borderRadius: 5, width: "95%", marginBottom: 10 }}>
          {/* <ScrollView style={{ marginVertical: 10, flex: 1 }} contentContainerStyle={{ flexGrow: 1, flexDirection: "column" }}>
              {finalProblemInfo.map((v, idx) => {
                return <GlobalStyled.ViewRow height="60" style={{ backgroundColor: "#D2DEFF", marginTop: 10, borderRadius: 10, backgroundColor: "#D2DEFF", width: wp(85), justifyContent: "flex-start" }}>
                  <TestIcon size={40} style={{marginLeft: 10}}></TestIcon>
                  <GlobalStyled.ViewCol style={{flex:1, marginVertical:8}}>
                    <GlobalStyled.ViewRow height="26"><Text style={{fontSize:18, fontFamily:"NotoSansKR-Bold", color:"#1B2C49", width:"100%", textAlign:"left"}}>{codeParser(v.code)}</Text></GlobalStyled.ViewRow>
                    <GlobalStyled.ViewRow height="15"><Text  style={{fontSize:12, fontFamily:"NotoSansKR-Regular", color:"#1B2C49", width:"100%", textAlign:"left"}}>상세정보텍스트</Text></GlobalStyled.ViewRow>
                  </GlobalStyled.ViewCol>
                </GlobalStyled.ViewRow>;
              })}
            </ScrollView> */}
          <GlobalStyled.ViewCol style={{ height: 250, width: "100%", justifyContent: "flex-start" }}>
            <GlobalStyled.ViewRow height="30">
              <Text style={{ fontSize: 20, fontFamily: "NotoSansKR-Bold", color: "#1B2C49", width: "100%", textAlign: "left" }}>시험지 이름 입력</Text>
            </GlobalStyled.ViewRow>
            <GlobalStyled.ViewRow height="90" style={{ backgroundColor: "#94A6FF", marginTop: 30, borderRadius: 10 }}>
              <Input style={{ height: 45, backgroundColor: "white", width: "90%", borderRadius: 10, paddingLeft: 10 }} value={testName} onChangeText={setTestName} autoCapitalize={false}></Input>
            </GlobalStyled.ViewRow>
            <GlobalStyled.ViewRow height="50" justifyContent="space-around" style={{ marginTop: 30 }}>
              <GlobalStyled.ViewCol
                width="150"
                style={{ backgroundColor: "#94A6FF", borderRadius: 25 }}
                onPress={() => {
                  setSaveModal(false);
                }}
                as={TouchableOpacity}
              >
                <Text style={{ color: "white", fontSize: 20, fontFamily: "NotoSansKR-Bold" }}>취소</Text>
              </GlobalStyled.ViewCol>
              <GlobalStyled.ViewCol width="150" style={{ backgroundColor: "#94A6FF", borderRadius: 25 }} as={TouchableOpacity} onPress={makeHandler}>
                <Text style={{ color: "white", fontSize: 20, fontFamily: "NotoSansKR-Bold" }}>생성</Text>
              </GlobalStyled.ViewCol>
            </GlobalStyled.ViewRow>
          </GlobalStyled.ViewCol>
        </GlobalStyled.ViewCol>
      </GlobalStyled.ViewCol>
    </GlobalStyled.ViewCol>
  );
};

export default SavedProblemModal;
