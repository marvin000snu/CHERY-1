import GlobalStyled from "../../style/GlobalStyled";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import moment from "moment";
import React, { useCallback, useState, useEffect } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import useAPI from "../../hooks/useAPI";
import { withTiming, useSharedValue, useAnimatedStyle } from "react-native-reanimated";
import Table from "../../components/Organisms/table";
import { useFocusEffect } from "@react-navigation/native";
const HomeDaily = (props) => {
  const { navigation, userName, dayIndex, state } = props;

  const [API] = useCallback(useAPI(), []);
  const [weekInfo, setWeekInfo] = useState([]);
  const [tempAttend, setTempAttend] = useState(false);
  const detailOffset1 = useSharedValue(0, false);
  const detailOffset2 = useSharedValue(0, false);
  const detailOffset3 = useSharedValue(0, false);
  const detailOffset4 = useSharedValue(0, false);
  const detailOffset5 = useSharedValue(0, false);
  const detailOffset6 = useSharedValue(0, false);
  const detailOffset7 = useSharedValue(0, false);
  const tableOffset1 = useSharedValue(0, false);
  const tableOffset2 = useSharedValue(0, false);
  const tableOffset3 = useSharedValue(0, false);
  const tableOffset4 = useSharedValue(0, false);
  const tableOffset5 = useSharedValue(0, false);
  const tableOffset6 = useSharedValue(0, false);
  const tableOffset7 = useSharedValue(0, false);
  const tableOpacity1 = useSharedValue(0, false);
  const tableOpacity2 = useSharedValue(0, false);
  const tableOpacity3 = useSharedValue(0, false);
  const tableOpacity4 = useSharedValue(0, false);
  const tableOpacity5 = useSharedValue(0, false);
  const tableOpacity6 = useSharedValue(0, false);
  const tableOpacity7 = useSharedValue(0, false);
  const tableOffsetStyles = [
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset1.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset2.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset3.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset4.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset5.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset6.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset7.value }] };
    }),
  ];
  const detailOffsetStyles = [
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset1.value }],
        opacity: tableOpacity1.value,
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset2.value }],
        opacity: tableOpacity2.value,
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset3.value }],
        opacity: tableOpacity3.value,
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset4.value }],
        opacity: tableOpacity4.value,
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset5.value }],
        opacity: tableOpacity5.value,
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset6.value }],
        opacity: tableOpacity6.value,
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset7.value }],
        opacity: tableOpacity7.value,
      };
    }),
  ];

  const detailDown = () => {
    detailOffset1.value = withTiming(0);
    tableOffset1.value = withTiming(0);
    detailOffset2.value = withTiming(0);
    tableOffset2.value = withTiming(0);
    detailOffset3.value = withTiming(0);
    tableOffset3.value = withTiming(0);
    detailOffset4.value = withTiming(0);
    tableOffset4.value = withTiming(0);
    detailOffset5.value = withTiming(0);
    tableOffset5.value = withTiming(0);
    detailOffset6.value = withTiming(0);
    tableOffset6.value = withTiming(0);
    detailOffset7.value = withTiming(0);
    tableOffset7.value = withTiming(0);
    tableOpacity1.value = withTiming(0);
    tableOpacity2.value = withTiming(0);
    tableOpacity3.value = withTiming(0);
    tableOpacity4.value = withTiming(0);
    tableOpacity5.value = withTiming(0);
    tableOpacity6.value = withTiming(0);
    tableOpacity7.value = withTiming(0);
  };

  const detailUp = (i) => {
    detailOffset1.value = withTiming(i >= 0 ? 40 : 0);
    tableOffset1.value = withTiming(i >= 0 ? 0 : 40);
    detailOffset2.value = withTiming(i >= 1 ? 40 : 0);
    tableOffset2.value = withTiming(i >= 1 ? 0 : 40);
    detailOffset3.value = withTiming(i >= 2 ? 40 : 0);
    tableOffset3.value = withTiming(i >= 2 ? 0 : 40);
    detailOffset4.value = withTiming(i >= 3 ? 40 : 0);
    tableOffset4.value = withTiming(i >= 3 ? 0 : 40);
    detailOffset5.value = withTiming(i >= 4 ? 40 : 0);
    tableOffset5.value = withTiming(i >= 4 ? 0 : 40);
    detailOffset6.value = withTiming(i >= 5 ? 40 : 0);
    tableOffset6.value = withTiming(i >= 5 ? 0 : 40);
    detailOffset7.value = withTiming(i >= 6 ? 40 : 0);
    tableOffset7.value = withTiming(i >= 6 ? 0 : 40);
    tableOpacity1.value = withTiming(i === 0 ? 1 : 0, { duration: 10 });
    tableOpacity2.value = withTiming(i === 1 ? 1 : 0, { duration: 10 });
    tableOpacity3.value = withTiming(i === 2 ? 1 : 0, { duration: 10 });
    tableOpacity4.value = withTiming(i === 3 ? 1 : 0, { duration: 10 });
    tableOpacity5.value = withTiming(i === 4 ? 1 : 0, { duration: 10 });
    tableOpacity6.value = withTiming(i === 5 ? 1 : 0, { duration: 10 });
    tableOpacity7.value = withTiming(i === 6 ? 1 : 0, { duration: 10 });
  };
  useEffect(() => {
    detailDown();
  }, [state]);
  useFocusEffect(
    useCallback(() => {
      const useEffectAsyncFunction = async () => {
        try {
          const token = await AsyncStorage.getItem("@userToken");
          const deCode = jwt_decode(token);
          const params = {
            userId: deCode["cognito:username"],
            body: {},
          };
          const result = await API.daily.getWeekInfo(params);
          const data = result.data;
          var box = [];
          for (var key in data) {
            box.push({
              date: moment(key).format("MM / DD"),
              is_tested: data[key]["is_tested"],
              is_graded: data[key]["is_graded"],
              result: data[key]["result"],
              length: data[key]["length"],
              link: data[key]["link"],
              attend: data[key]["attend"],
            });
          }
          setWeekInfo(box);
        } catch (err) {
          console.log(err);
        }
      };
      useEffectAsyncFunction();
    }, [])
  );

  const createButtonHandler = async () => {
    try {
      if (weekInfo[dayIndex]["is_graded"]) {
        alert("이미 학습을 완료했습니다.");
      } else if (weekInfo[dayIndex]["is_tested"]) {
        const name = moment().format("YYYYMMDD");
        await AsyncStorage.setItem("@answerList", JSON.stringify(new Array(7).fill(0)));
        navigation.navigate("DirectSolveStack", {
          screen: "DirectSolvePage",
          params: {
            testType: 1,
            testName: name,
            length: 7,
            number: 0,
          },
        });
      } else {
        navigation.navigate("LoadingPage1", {
          type: 1,
          direct: true,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const attendHandler = async () => {
    try {
      setTempAttend(true);
      const params = {
        userId: userName,
        body: {},
      };
      await API.attend.attend(params);
      alert("출석체크를 완료했습니다.");
    } catch (err) {
      alert(err);
      if (err.response.data.msg === "alreadyAttend") {
        alert("이미 출석체크를 완료했습니다.");
      }
    }
  };
  const solveNowHandler = async (name, length) => {
    const params = {
      userId: userName,
      body: { testName: name },
    };
    try {
      const { data } = await API.tempSave.getTempData(params);
      await AsyncStorage.setItem("@answerList", data.answerData);
      await API.tempSave.clearTempData(params);
      navigation.navigate("DirectSolveStack", {
        screen: "DirectSolvePage",
        params: {
          testType: 1,
          testName: data.testName,
          length: JSON.parse(data.answerData).length,
          number: Number(data.number),
        },
      });
    } catch (err) {
      if (err.response.data.msg === "noTestFind") {
        await AsyncStorage.setItem("@answerList", JSON.stringify(new Array(7).fill(0)));
        await API.tempSave.clearTempData(params);
        navigation.navigate("DirectSolveStack", {
          screen: "DirectSolvePage",
          params: {
            testType: 1,
            testName: name,
            length: length,
            number: 0,
          },
        });
      }
    } finally {
    }
  };
  const gradeHandler = (name) => {
    navigation.navigate("GradeStack", {
      screen: "GradePage1",
      params: {
        testType: 1,
        testName: name,
      },
    });
  };
  return (
    <GlobalStyled.ViewCol width={wp(100)} height="100%" style={{ justifyContent: "flex-start" }}>
      <ScrollView
        contentContainerStyle={{
          width: wp(100),
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "center",
        }}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        showsVerticalScrollIndicator= {false}
      >
        <GlobalStyled.ViewCol height="55px">
          <Text style={{ fontFamily: "NotoSansCJKkr-Bold", color: "#1B2C49", textAlign: "left", width: "100%", fontSize: 20, lineHeight: 40, marginTop: 15, marginLeft: 30 }}>일주일 학습</Text>
        </GlobalStyled.ViewCol>
        <GlobalStyled.ViewCol height="auto" width="90%" style={{ borderRadius: 5, marginTop: 30 }}>
          <Table attendHandler={attendHandler} tempAttend={tempAttend} dayIndex={dayIndex} navigation={navigation} weekInfo={weekInfo} tableOffsetStyles={tableOffsetStyles} detailOffsetStyles={detailOffsetStyles} detailDown={detailDown} detailUp={detailUp} solveNowHandler={solveNowHandler} gradeHandler={gradeHandler} type={1} />
        </GlobalStyled.ViewCol>
        <GlobalStyled.ViewRow height="70px"></GlobalStyled.ViewRow>
      </ScrollView>
      <GlobalStyled.ViewCol
        height="50px"
        width="220px"
        style={{
          backgroundColor: "#6F87FF",
          borderRadius: 25,
          position: "absolute",
          bottom: 10,
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
        onPress={createButtonHandler}
      >
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontFamily: "NotoSansKR-Bold",
          }}
        >
          바로풀기
        </Text>
      </GlobalStyled.ViewCol>
    </GlobalStyled.ViewCol>
  );
};

export default HomeDaily;
