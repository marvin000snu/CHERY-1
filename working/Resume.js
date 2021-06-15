import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useCallback } from "react";
import GlobalStyled from "../src/style/GlobalStyled";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import moment from "moment";
import ProgressBar from "../src/components/Atoms/TestProgressBar";
import { useFocusEffect } from "@react-navigation/native";
import useAPI from "../src/hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import testNameParser from "../src/function/testNameParser";
const Resume = (props) => {
  const [select, setSelect] = useState(-1);
  const [resumeList, setResumeList] = useState([]);
  const [API] = useCallback(useAPI(), []);
  const [fullData, setFullData] = useState([]);
  useFocusEffect(
    useCallback(() => {
      const asyncCallBack = async () => {
        try {
          userToken = await AsyncStorage.getItem("@userToken");
          const params = {
            userId: jwt_decode(userToken)["cognito:username"],
          };
          const { data } = await API.tempSave.getTempDataByDate(params);
          setFullData(data.result);
        } catch (err) {
          alert(err);
        } finally {
        }
      };
      asyncCallBack();
      return () => {};
    }, [])
  );
  const clickHandler = (i, fullDate) => {
    setSelect(i);
    setResumeList(fullData[fullDate]);
  };
  const progressCustomStyles = {
    borderRadius: 5,
    height: 8,
    backgroundColor: "#FF606D",
    underlyingColor: "#E3E4EC",
  };
  var dayArray = [];
  for (var i = 6; i >= 0; i--) {
    dayArray.push({
      day: moment().subtract(i, "day").format("DD"),
      dayOfWeek: moment().subtract(i, "day").day(),
      fullDate: moment().subtract(i, "day").format("YYYYMMDD"),
    });
  }
  const moveHandler = async (v) => {
    props.navigation.navigate("AfterLoginGradeSolve", { screen: "DirectSolveStack", params: { screen: "DirectSolvePage", params: { testName: v.testName, testType: v.testType, length: v.length, tempSave: true }}});
  };
  return (
    <View style={{ width: "100%", height: "100%", justifyContent: "flex-start", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#FFFFFF" }}>
      <GlobalStyled.ViewRow height="75px" justifyContent="flex-start" alignItems="center">
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 15 }}>이어풀기 목록</Text>
      </GlobalStyled.ViewRow>
      <GlobalStyled.ViewCol height="125px">
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, minWidth: wp(100), flexDirection: "row", alignItems: "center" }} horizontal showsHorizontalScrollIndicator= {false}>
          {dayArray.map((v, idx) => {
            return (
              <GlobalStyled.ViewCol
                as={TouchableOpacity}
                width="60px"
                height="115px"
                style={{
                  borderRadius: 30,
                  backgroundColor: "#FFFFFF",
                  marginHorizontal: 10,
                  borderWidth: idx === select ? 2 : 1,
                  borderColor: idx === select ? "#5571FF" : "#DBDCDC",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
                key={idx}
                onPress={() => {
                  clickHandler(idx, v.fullDate);
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>{v.day}</Text>
                <Text style={{ fontSize: 13 }}>{["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][v.dayOfWeek]}</Text>
              </GlobalStyled.ViewCol>
            );
          })}
        </ScrollView>
      </GlobalStyled.ViewCol>
      <ScrollView style={{ flex: 1, marginTop: 20 }} contentContainerStyle={{ width: wp(100), flexGrow: 1, alignItems: "center" }} showsVerticalScrollIndicator= {false}>
        {resumeList.length === 0 ? (
          <GlobalStyled.ViewRow
            width="90%"
            style={{
              height: 65,
              borderRadius: 5,
              backgroundColor: "#FFFFFF",
              marginVertical: 10,
              borderWidth: 1,
              borderColor: "#DBDCDC",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
          >
            <Text style={{ fontSize: 15, color: "#787A7E" }}>이어풀기 목록을 선택해주세요!</Text>
          </GlobalStyled.ViewRow>
        ) : (
          resumeList.map((v) => {
            return (
              <GlobalStyled.ViewCol
                width="90%"
                style={{
                  height: 65,
                  borderRadius: 5,
                  backgroundColor: "#FFFFFF",
                  marginVertical: 10,
                  borderWidth: 1,
                  borderColor: "#DBDCDC",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
                as={TouchableOpacity}
                onPress={() => {
                  moveHandler(v);
                }}
              >
                <GlobalStyled.ViewRow height="40px" justifyContent="space-between">
                  <Text style={{ marginLeft: 10, fontSize: 19, color: "#1B2C49", fontWeight: "500" }}>{testNameParser(v.testName)}</Text>
                  <ProgressBar {...progressCustomStyles} borderWidth={0} width={wp(30)} height={10} maxValue={100} startvalue={(v.number / v.length) * 100} finalvalue={(v.number / v.length) * 100} style={{ marginRight: 10 }} />
                </GlobalStyled.ViewRow>
                <GlobalStyled.ViewRow height="25px" justifyContent="space-between" alignItems="flex-start">
                  <Text style={{ marginLeft: 10, fontSize: 14, color: "#909398", fontWeight: "400" }}>{["매일학습", "약점학습"][parseInt(v.testType) - 1]}</Text>
                  <Text style={{ marginRight: 10, fontSize: 14, color: "#909398", fontWeight: "400", textAlign: "right" }}>
                    {v.length} 문제 중 {v.length - v.number} 문제 남음
                  </Text>
                </GlobalStyled.ViewRow>
              </GlobalStyled.ViewCol>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};

export default Resume;
