import React, { useRef, useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import useAPI from "../../hooks/useAPI";
import styled from "styled-components";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Constants from "expo-constants";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  ScrollView
} from "react-native";
import jwt_decode from "jwt-decode";
import Bracket from "../../images/iconSvg/Bracket";
import GlobalStyled from "../../style/GlobalStyled";
import moment from "moment";
import AttendGray from "../../images/iconSvg/attendGray";
import AttendPurple from "../../images/iconSvg/attendPurple";
import Percent5 from "../../images/iconSvg/percent5";
import Percent10 from "../../images/iconSvg/percent10";
import Discount500 from "../../images/iconSvg/discount500";
import Discount1000 from "../../images/iconSvg/discount1000";
import DoubleChery from "../../images/iconSvg/doubleChery";
import Percent5Purple from "../../images/iconSvg/percent5Purple";
import Percent10Purple from "../../images/iconSvg/percent10Purple";
import Discount500Purple from "../../images/iconSvg/discount500Purple";
import Discount1000Purple from "../../images/iconSvg/discount1000Purple";
import DoubleCheryPurple from "../../images/iconSvg/doubleCheryPurple";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AttendBackground from "../../images/iconSvg/AttendBackground.js";

const Styled = {
  body: styled.View`
    width: 100%;
    height: ${hp(100) - 70}px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: column;
  `,
  section: styled.View`
    width: 100%;
    height: ${hp(100) - 70 - Constants.statusBarHeight}px;
    margin-top: 17px;
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    align-items: center;
    overflow: hidden;
    opacity: 1;
    margin-top: ${Constants.statusBarHeight}px;
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
    justifyContent: "flex-start"
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
    marginTop: Constants.statusBarHeight
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

const getDaysInMonth = function (month, year) {
  return new Date(year, month, 0).getDate();
};

const CalenderPage = ({ navigation }) => {
  const [API] = useCallback(useAPI(), []);
  const [selectMonth, setSelectMonth] = useState(Number(moment().format("MM")));
  const [selectYear, setSelectYear] = useState(Number(moment().format("YYYY")));
  const [selected, setSelected] = useState(0);
  const [cordX, setCordX] = useState(0);
  const [cordY, setCordY] = useState(0);
  const scale = useRef(new Animated.Value(0)).current;
  const offSetX = useRef(new Animated.Value(0)).current;
  const offSetY = useRef(new Animated.Value(0)).current;
  const nameOfDay = ["일", "월", "화", "수", "목", "금", "토"];
  const [btnDisable, setBtnDisable] = useState(true);
  const [attendCount, setAttendCount] = useState(0);
  const [deCode, setDeCode] = useState();
  useFocusEffect(
    useCallback(() => {
      const CallBackFunction = async () => {
        try {
          const token = await AsyncStorage.getItem("@userToken");
          const tempDeCode = jwt_decode(token);
          const params = {
            userId: tempDeCode["cognito:username"],
            body: {}
          };
          setDeCode(tempDeCode);
          const { data } = await API.attend.getAttendInfo(params);
          setBtnDisable(data.todayAttend);
          setAttendCount(Number(data.attendCount));
        } catch (err) {
          console.log(err);
        }
      };
      CallBackFunction();
    }, [])
  );
  useEffect(() => {}, [selected]);
  const month = [...Array(getDaysInMonth(selectMonth, selectYear)).keys()].map(
    (v) => {
      return v + 1;
    }
  );
  for (var i = 0; i < new Date(selectYear, selectMonth - 1, 1).getDay(); i++) {
    month.unshift("");
  }
  for (
    var i = 0;
    i <
    6 -
      new Date(
        selectYear,
        selectMonth - 1,
        getDaysInMonth(selectMonth, selectYear)
      ).getDay();
    i++
  ) {
    month.push("");
  }

  const moveToHomeHandler = () => {
    navigation.navigate("afterLogin", {
      screen: "Home",
      params: {
        screen: "DailyLearningPage0"
      }
    });
  };
  const small = () => {
    Animated.timing(scale, {
      duration: 300,
      toValue: 0,
      useNativeDriver: true
    }).start();
    Animated.timing(offSetX, {
      duration: 300,
      toValue: 0,
      useNativeDriver: true
    }).start();
  };
  const attendArray = new Array(25).fill(1);

  const attendHandler = async () => {
    try {
      const params = {
        userId: deCode["cognito:username"],
        body: {}
      };
      await API.attend.attend(params);
      setBtnDisable(true);
      setAttendCount(attendCount + 1);
      alert("출석체크를 완료했습니다.");
    } catch (err) {
      if (err.response.data.msg === "alreadyAttend") {
        alert("이미 출석체크를 완료했습니다.");
      }
    }
  };
  return (
    <Styled.body>
      <Styled.section>
        <View
          style={{
            height: 190,
            width: "100%",
            borderBottomWidth: 1,
            borderColor: "#B2B8C2"
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
              onPress={moveToHomeHandler}
              style={{ height: 60, width: "20%", justifyContent: "center" }}
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
                  fontSize: 24,
                  color: "#1B2C49",
                  fontWeight: "bold"
                }}
              >
                출석체크
              </Text>
            </View>
            <View
              style={{
                height: 60,
                width: "20%",
                justifyContent: "center",
                alignItems: "flex-end"
              }}
            ></View>
          </View>
          <GlobalStyled.ViewRow style={{ flex: 1, overflow: "hidden" }}>
            <AttendBackground size={wp(100)} />
            <GlobalStyled.ViewCol style={{ position: "absolute" }}>
              <Text
                style={{fontSize: 35, lineHeight:40, color: "white",fontFamily: "NotoSansKR-Bold"}}
              >
                출첵하고{"\n"}체리받자
              </Text>
              <Text
                style={{fontSize: 15, color: "white" }}
              >
                3월 1일 ~ 3월 31일
              </Text>
            </GlobalStyled.ViewCol>
          </GlobalStyled.ViewRow>
        </View>
        <GlobalStyled.ViewRow
          height="50px"
          style={{ backgroundColor: "#A199DB", }}
        >
          <Text style={{ fontSize: 16, color: "white" }}>
            현재까지 {deCode ? deCode.name : ""}님의 출석일수는 {attendCount}일!
          </Text>
        </GlobalStyled.ViewRow>
        <View
          style={{
            width: wp(100),
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:"#F4F0FF", 

          }}
        >
          <ScrollView style={{height:"100%", flex:1}} contentContainerStyle={{backgroundColor:"#F4F0FF", flex:1, height:"100%"}} showsVerticalScrollIndicator= {false}>
            <GlobalStyled.ViewRow
              style={{
                flex: 1,
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                backgroundColor: "#F4F0FF"
              }}
            >
              {attendArray.map((v, idx) => {
                let attend = idx >= attendCount;
                if (attend) {
                  if (idx == 4) {
                    return (
                      <GlobalStyled.ViewCol
                        width="20%"
                        style={{ height: wp(20) }}
                      >
                        <Discount500 size={wp(17)} />
                      </GlobalStyled.ViewCol>
                    );
                  } else if (idx === 9) {
                    return (
                      <GlobalStyled.ViewCol
                        width="20%"
                        style={{ height: wp(20) }}
                      >
                        <DoubleChery size={wp(17)} />
                      </GlobalStyled.ViewCol>
                    );
                  } else if (idx === 14) {
                    return (
                      <GlobalStyled.ViewCol
                        width="20%"
                        style={{ height: wp(20) }}
                      >
                        <Percent5 size={wp(17)} />
                      </GlobalStyled.ViewCol>
                    );
                  } else if (idx === 19) {
                    return (
                      <GlobalStyled.ViewCol
                        width="20%"
                        style={{ height: wp(20) }}
                      >
                        <Percent10 size={wp(17)} />
                      </GlobalStyled.ViewCol>
                    );
                  } else if (idx === 24) {
                    return (
                      <GlobalStyled.ViewCol
                        width="20%"
                        style={{ height: wp(20) }}
                      >
                        <Discount1000 size={wp(17)} />
                      </GlobalStyled.ViewCol>
                    );
                  } else {
                    return (
                      <GlobalStyled.ViewCol
                        width="20%"
                        style={{ height: wp(20) }}
                      >
                        <AttendGray size={wp(15)} />
                      </GlobalStyled.ViewCol>
                    );
                  }
                } else {
                  if (idx == 4) {
                    return (
                      <GlobalStyled.ViewCol
                        width="20%"
                        style={{ height: wp(20) }}
                      >
                        <Discount500Purple size={wp(17)} />
                      </GlobalStyled.ViewCol>
                    );
                  } else if (idx === 9) {
                    return (
                      <GlobalStyled.ViewCol
                        width="20%"
                        style={{ height: wp(20) }}
                      >
                        <DoubleCheryPurple size={wp(17)} />
                      </GlobalStyled.ViewCol>
                    );
                  } else if (idx === 14) {
                    return (
                      <GlobalStyled.ViewCol
                        width="20%"
                        style={{ height: wp(20) }}
                      >
                        <Percent5Purple size={wp(17)} />
                      </GlobalStyled.ViewCol>
                    );
                  } else if (idx === 19) {
                    return (
                      <GlobalStyled.ViewCol
                        width="20%"
                        style={{ height: wp(20) }}
                      >
                        <Percent10Purple size={wp(17)} />
                      </GlobalStyled.ViewCol>
                    );
                  } else if (idx === 24) {
                    return (
                      <GlobalStyled.ViewCol
                        width="20%"
                        style={{ height: wp(20) }}
                      >
                        <Discount1000Purple size={wp(17)} />
                      </GlobalStyled.ViewCol>
                    );
                  } else {
                    return (
                      <GlobalStyled.ViewCol
                        width="20%"
                        style={{ height: wp(20) }}
                      >
                        <AttendPurple size={wp(15)} />
                      </GlobalStyled.ViewCol>
                    );
                  }
                }
              })}
            </GlobalStyled.ViewRow>
          </ScrollView>
          <GlobalStyled.ViewCol height="80px" style={{ position: "absolute", bottom:10}}>
            <GlobalStyled.ViewCol
              as={TouchableOpacity}
              onPress={attendHandler}
              height="50px"
              width="70%"
              style={{ backgroundColor: "#5571FF", borderRadius: 25 }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>출석체크</Text>
            </GlobalStyled.ViewCol>
          </GlobalStyled.ViewCol>
        </View>
      </Styled.section>
    </Styled.body>
  );
};

export default CalenderPage;
