import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useCallback } from "react";
import GlobalStyled from "../src/style/GlobalStyled";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import PlayBtn from "./svg/PlayBtn";
import Clock from "./svg/Clock";
import CheckedTest from "./svg/CheckedTest";
import Test from "./svg/Test";
import useAPI from "../src/hooks/useAPI";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import moment from "moment";
const Study = (props) => {
  const [grade, setGrade] = useState(0);
  const [API] = useCallback(useAPI(), []);
  const [weakArray, setWeakArray] = useState([{ difficulty: "Hard", num: 10, time: 8, name: "빈칸추론" }]);
  const [result, setResult] = useState("");
  const [userName, setUserName]  = useState("");
  useFocusEffect(
    useCallback(() => {
      const callBackAsyncFunction = async () => {
        const params = {
          userId: jwt_decode(await AsyncStorage.getItem("@userToken"))["cognito:username"],
        };
        setUserName(jwt_decode(await AsyncStorage.getItem("@userToken"))["cognito:username"])
        const { data } = await API.daily.getDailyTested(params);
        setResult(data.result);
        setGrade(data.graded);
        setWeakArray(
          data.weakTypeFinal.map((v) => {
            return { difficulty: "Hard", num: 5, time: 6, name: v };
          })
        );
      };
      callBackAsyncFunction();
      return () => {};
    }, [])
  );
  const dailyHandler = () => {
    props.navigation.navigate("LoadingPage", {
      type: 1,
      direct: true,
    });
  };
  const makeWeakHandler = (v) => {
    props.navigation.navigate("LoadingPage", {
      type: 2,
      problemType: v.type,
      num: v.num,
      direct: true,
    });
  };
  return (
    <View style={{ backgroundColor: "white" }}>
      <GlobalStyled.ViewCol height="55%" justifyContent="flex-start" alignItems="flex-start" style={{ borderBottomWidth: 1, borderBottomColor: "#707070" }}>
        <Text style={{ marginTop: hp(3), marginLeft: 15, fontSize: 20, fontWeight: "bold" }}>매일학습</Text>
        <Text style={{ marginTop: hp(0.5), marginLeft: 15, fontSize: 14 }}>
          특허받은 인공지능이 나에게 꼭 필요한 <Text style={{ fontSize: 14, fontWeight: "bold" }}>5문항</Text>을 추천해줘요.
        </Text>
        <GlobalStyled.ViewRow style={{ flex: 1 }}>
          {!grade ? (
            <GlobalStyled.ViewCol style={{ width: wp(50), borderRadius: wp(25), height: wp(50), backgroundColor: "#5E78FD" }} as={TouchableOpacity} onPress={dailyHandler}>
              <GlobalStyled.ViewRow height={50}>
                <Clock size={wp(5)} />
                <Text style={{ marginLeft: 5, color: "white", fontSize: 23, fontWeight: "bold" }}>08:00</Text>
              </GlobalStyled.ViewRow>
              <PlayBtn size={wp(20)} style={{ marginLeft: wp(1) }}></PlayBtn>
              <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>Start!</Text>
            </GlobalStyled.ViewCol>
          ) : (
            <GlobalStyled.ViewCol
              style={{ width: wp(50), borderRadius: wp(25), height: wp(50), backgroundColor: "#5E78FD" }}
              as={TouchableOpacity}
              onPress={() => {
                props.navigation.navigate("AfterLoginGradeSolve", {
                  screen: "DirectSolveStack",
                  params: {
                    screen: "testResultPage",
                    params: { params: {testName: moment().format("YYYYMMDD"), testType: 1, userName: userName} },
                  },
                });
              }}
            >
              <GlobalStyled.ViewRow height={30}>
                <Clock size={wp(5)} />
                <Text style={{ marginLeft: 5, color: "white", fontSize: 23, fontWeight: "bold" }}>08:00</Text>
              </GlobalStyled.ViewRow>
              <GlobalStyled.ViewRow height={30} style={{ marginBottom: 30 }}>
                <CheckedTest size={wp(5)} />
                <Text style={{ marginLeft: 5, color: "white", fontSize: 23, fontWeight: "bold" }}>{result}</Text>
              </GlobalStyled.ViewRow>
              <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>{eval(result) > 0.6 ? "Good!" : eval(result) > 0.3 ? "Soso" : "Bad"}</Text>
            </GlobalStyled.ViewCol>
          )}
        </GlobalStyled.ViewRow>
      </GlobalStyled.ViewCol>
      <GlobalStyled.ViewCol height="45%" style={{}} justifyContent="flex-start" alignItems="flex-start">
        <Text style={{ marginTop: hp(1.5), marginLeft: 15, fontSize: 20, fontWeight: "bold" }}>약점학습</Text>
        <Text style={{ marginTop: hp(0.5), marginLeft: 15, fontSize: 14 }}>
          자체 알고리즘을 통해 <Text style={{ fontSize: 14, fontWeight: "bold" }}>취약유형</Text>을 완벽히 정복해줘요.
        </Text>
        <GlobalStyled.ViewCol style={{ height: hp(21), maxHeight: 116, marginTop: hp(2) }}>
          <ScrollView style={{ width: wp(100), height: hp(21), maxHeight: 116 }} contentContainerStyle={{ height: hp(21), maxHeight: 116, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }} horizontal showsHorizontalScrollIndicator= {false}>
            <GlobalStyled.ViewRow style={{ height: hp(20), maxHeight: 106, width: "100%" }} justifyContent="flex-start" alignItems="center">
              {weakArray.map((v) => {
                return (
                  <GlobalStyled.ViewCol
                    style={{ width: Math.min(hp(24), 120), marginHorizontal: hp(1), borderRadius: 10, overflow: "hidden" }}
                    as={TouchableOpacity}
                    onPress={() => {
                      makeWeakHandler({ num: v.num, type: v.name });
                    }}
                  >
                    <GlobalStyled.ViewRow height="25%" style={{ backgroundColor: "#5571FF" }}>
                      <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>{v.difficulty}</Text>
                    </GlobalStyled.ViewRow>
                    <GlobalStyled.ViewRow height="50%" style={{ borderWidth: 1, borderColor: "#5571FF" }}>
                      <Text style={{ color: "#1B2C49", fontSize: 20, fontWeight: "bold" }}>{v.name}</Text>
                    </GlobalStyled.ViewRow>
                    <GlobalStyled.ViewRow height="25%" style={{ backgroundColor: "#5571FF" }}>
                      <Clock size={Math.min(18, hp(3))} />
                      <Text style={{ fontSize: 12, color: "white", marginLeft: 2, marginRight: 4 }}>{v.time}분</Text>
                      <Test height={Math.min(18, hp(3))} />
                      <Text style={{ fontSize: 12, color: "white", marginLeft: 4 }}>{v.num}문제</Text>
                    </GlobalStyled.ViewRow>
                  </GlobalStyled.ViewCol>
                );
              })}
            </GlobalStyled.ViewRow>
          </ScrollView>
        </GlobalStyled.ViewCol>
      </GlobalStyled.ViewCol>
    </View>
  );
};

export default Study;
