import React, { useEffect, useState, useCallback, useRef } from "react";
import styled from "styled-components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Constants from "expo-constants";
import { Header } from "../../components/Molecules/Header";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Alert,
  TouchableOpacity
} from "react-native";
import moment from "moment";
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS
} from "react-native-reanimated";
import jwt_decode from "jwt-decode";
import useAPI from "../../hooks/useAPI";
import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalStyled from "../../style/GlobalStyled";
import DropDownPicker from "react-native-dropdown-picker";
import { useFocusEffect } from "@react-navigation/native";
import Table from "../../components/Organisms/table";
import Snackbar from "react-native-snackbar";

const Styled = {
  body: styled.View`
    width: ${wp(100)}px;
    height: ${hp(100) - 70}px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
    background-color: #f0f2f7;
  `,
  section: styled.View`
    height: ${hp(100) - 80 - Constants.statusBarHeight}px;
    margin-top: ${Constants.statusBarHeight}px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  `,
  Title: styled.Text`
    width: 100%;
    font-size: 18px
    font-weight: bold;
    margin-left: 30px;
    color: #1b2c49;
    margin-top : ${hp(2.5)}px;
    padding-left : 20px;
  `,
  contentWrapper: styled.View`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,
  subContentWrapper: styled.View`
    height: ${(props) => props.height}%;
    width: 95%;
    flex-direction: column;
    justify-content: flex-start;
  `,
  subTitle: styled.Text`
    font-size: 13px;
    color: #1b2c49;
    width: 100%;
    margin-left: 30px;
    padding-left: 20px;
    margin-top: ${hp(1)}px;
  `,
  selectWrapper: styled.View`
      width : 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 30%
      minHeight: 120px;
      maxHeight: 160px;
      align-items: center;
      margin-top: ${hp(1)}px;

    `,
  selectWrapper1: styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    align-items: center;
  `,
  selectBtn: styled.TouchableOpacity`
    width: 80%;
    height: 30px;
    border-width: ${(props) => props.borderWidth};
    border-color: ${(props) => props.borderColor};
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  `,
  selectBtnText: styled.Text`
    width: 100%;
    text-align: center;
    font-size: 16px;
    color: ${(props) => props.color};
  `,
  BtnWrapper: styled.View`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 103px;
    padding-bottom: 15px;
  `,
  Btn: styled.View`
    width: 80%;
    height: 44px;
    background-color: #6f87ff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  BtnText: styled.Text`
    color: white;
    font-size: 15px;
    font-weight: bold;
    width: 100%;
    text-align: center;
  `,
  BtnGray: styled.View`
    margin-top: 10px;
    width: 80%;
    height: 44px;
    background-color: #6f87ff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  BtnTextGray: styled.Text`
    color: white;
    font-size: 15px;
    font-weight: bold;
    width: 100%;
    text-align: center;
  `,
  centerView: styled.View`
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 90%;
    background-color: white;
  `,
  closerView: styled.View`
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 10%;
    background-color: white;
  `,
  table: styled.View`
    width: 80%;
    height: 430px;
    margin-top: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  `,
  tabletop: styled.View`
    width: 100%;
    height: 27px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  `,
  tablebox: styled.View`
    width: 100%;
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `,
  tabletext: styled.Text`
    width: 25%;
    height: 27px;
    font-size: 12px;
    color: #1b2c49;
    display: flex;
    text-align: center;
    font-weight: bold;
  `,
  tabletext1: styled.View`
    width: 30%;
    height: 27px;
    font-size: 12px;
    color: #1b2c49;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  `,
  tabledate: styled.View`
    width: 100%;
    height: 37px;
    background-color: #fff;
    margin-top: 9px;
    border-radius: 10px;
    border: 1px solid #eff2f7;
    flex-direction: row;
  `,
  tabledatetext: styled.Text`
    width: 31%;
    height: 100%;
    background-color: #eff2f7;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    text-align: center;
    line-height: 30px;
  `,
  tabledateicon: styled.View`
    width: 23%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  modalTitle: styled.Text`
    width: 100%;
    text-align: center;
    color: #2786ff;
    font-size: 25px;
    font-weight: bold;
    margin-top: 30px;
  `,
  View: styled.View`
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
  `,
  TitleView: styled.View`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  `,
  SubContentWrapperView: styled.View`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  `,
  table: styled.View`
    width: 90%;
    height: 360px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
    border-top-color: #eee;
  `,
  tabletop: styled.View`
    width: 100%;
    height: 27px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  tablebox: styled.View`
    width: 100%;
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `,
  tabletext: styled.Text`
    width: 22%;
    height: 20px;
    font-size: 15px;
    color: #1b2c49;
    text-align: center;
    line-height: 20px;
  `,
  tabletext1: styled.Text`
    width: 33%;
    height: 20px;
    font-size: 15px;
    color: #1b2c49;
    text-align: center;
    line-height: 20px;
  `,
  tabledate: styled.View`
    width: 100%;
    height: 37px;
    background-color: #fff;
    margin-top: 9px;
    border-radius: 10px;
    border: 1px solid #eff2f7;
    flex-direction: row;
  `,
  tabledatetext: styled.Text`
    width: 31%;
    height: 100%;
    background-color: #eff2f7;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    text-align: center;
    line-height: 30px;
  `,
  tabledateicon: styled.View`
    width: 23%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `
};
const WeakLearningPage0 = ({ navigation }) => {
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
  const tableOpacity1 = useSharedValue(1, false);
  const tableOpacity2 = useSharedValue(1, false);
  const tableOpacity3 = useSharedValue(1, false);
  const tableOpacity4 = useSharedValue(1, false);
  const tableOpacity5 = useSharedValue(1, false);
  const tableOpacity6 = useSharedValue(1, false);
  const tableOpacity7 = useSharedValue(1, false);
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
    })
  ];
  const detailOffsetStyles = [
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset1.value }],
        opacity: tableOpacity1.value
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset2.value }],
        opacity: tableOpacity2.value
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset3.value }],
        opacity: tableOpacity3.value
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset4.value }],
        opacity: tableOpacity4.value
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset5.value }],
        opacity: tableOpacity5.value
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset6.value }],
        opacity: tableOpacity6.value
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset7.value }],
        opacity: tableOpacity7.value
      };
    })
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
  };

  const detailUp = (i) => {
    detailOffset1.value = withTiming(i >= 0 ? 46 : 0);
    tableOffset1.value = withTiming(i >= 0 ? 0 : 46);
    detailOffset2.value = withTiming(i >= 1 ? 46 : 0);
    tableOffset2.value = withTiming(i >= 1 ? 0 : 46);
    detailOffset3.value = withTiming(i >= 2 ? 46 : 0);
    tableOffset3.value = withTiming(i >= 2 ? 0 : 46);
    detailOffset4.value = withTiming(i >= 3 ? 46 : 0);
    tableOffset4.value = withTiming(i >= 3 ? 0 : 46);
    detailOffset5.value = withTiming(i >= 4 ? 46 : 0);
    tableOffset5.value = withTiming(i >= 4 ? 0 : 46);
    detailOffset6.value = withTiming(i >= 5 ? 46 : 0);
    tableOffset6.value = withTiming(i >= 5 ? 0 : 46);
    detailOffset7.value = withTiming(i >= 6 ? 46 : 0);
    tableOffset7.value = withTiming(i >= 6 ? 0 : 46);
    tableOpacity1.value = withTiming(i === 0 ? 1 : 0, { duration: 10 });
    tableOpacity2.value = withTiming(i === 1 ? 1 : 0, { duration: 10 });
    tableOpacity3.value = withTiming(i === 2 ? 1 : 0, { duration: 10 });
    tableOpacity4.value = withTiming(i === 3 ? 1 : 0, { duration: 10 });
    tableOpacity5.value = withTiming(i === 4 ? 1 : 0, { duration: 10 });
    tableOpacity6.value = withTiming(i === 5 ? 1 : 0, { duration: 10 });
    tableOpacity7.value = withTiming(i === 6 ? 1 : 0, { duration: 10 });
  };

  useFocusEffect(
    useCallback(() => {
      const useCallbackAsyncFunction = async () => {
        try {
          const token = await AsyncStorage.getItem("@userToken");
          const deCode = jwt_decode(token);
          const params = {
            userId: deCode["cognito:username"],
            body: {}
          };
          const { data } = await API.weak.getweaktestinfo(params);
          setWeakInfo(data.testlist);
          setSelected(0);
          opacity.value = withSpring(0);
        } catch (err) {
          console.log(err);
        } finally {
        }
      };
      useCallbackAsyncFunction();
      return () => {
        setName(null);
      };
    }, [])
  );
  const gradeHandler = (name) => { 
    navigation.navigate("GradeStack", {
      screen: "GradePage1",
      params: {
        testType: 2,
        testName: name
      }
    });
  };

  const solveNowHandler = async (name, length) => {
    const token = await AsyncStorage.getItem("@userToken");
    const deCode = jwt_decode(token);
    const params = {
      userId: deCode["cognito:username"]
    };
    try {
      const { data } = await API.tempSave.getTempData(params);
      Alert.alert(
        "바로풀기",
        `${moment(data["created_at"]).format("MM월 DD일에 풀던")} ${
          ["", "매일학습", "약점학습", "문항분석"][Number(data.testType)]
        } ${data.testName}이 있습니다.
        `,
        [
          {
            text: "이어풀기",
            onPress: async () => {
              await AsyncStorage.setItem("@timeData", data.timeData);
              await AsyncStorage.setItem("@drawData", data.drawData);
              await AsyncStorage.setItem("@answerList", data.answerData);
              await API.tempSave.clearTempData(params);
              navigation.navigate("DirectSolveStack", {
                screen: "DirectSolvePage",
                params: {
                  testType: 2,
                  testName: data.testName,
                  length: JSON.parse(data.answerData).length,
                  number: Number(data.number)
                }
              });
            }
          },
          {
            text: "선택한 시험지 풀기",
            onPress: async () => {
              Alert.alert(
                "기존 시험 정보 삭제",
                `${moment(data["created_at"]).format("MM월 DD일에 풀던")} ${
                  ["", "매일학습", "약점학습", "문항분석"][
                    Number(data.testType)
                  ]
                } ${data.testName}정보가 삭제됩니다.
                `,
                [
                  { text: "취소", onPress: () => {} },
                  {
                    text: "선택한 시험지 풀기",
                    onPress: async () => {
                      const alpha = new Array(length).fill({
                        second: 0,
                        minute: 0
                      });
                      await AsyncStorage.setItem(
                        "@timeData",
                        JSON.stringify(alpha)
                      );
                      await AsyncStorage.setItem(
                        "@answerList",
                        JSON.stringify(new Array(length).fill(0))
                      );
                      await AsyncStorage.setItem(
                        "@drawData",
                        JSON.stringify(new Array(length).fill([]))
                      );
                      await API.tempSave.clearTempData(params);
                      navigation.navigate("DirectSolveStack", {
                        screen: "DirectSolvePage",
                        params: {
                          testType: 2,
                          testName: name,
                          length: length,
                          number: 0
                        }
                      });
                    }
                  }
                ]
              );
            }
          }
        ],
        { cancelable: false }
      );
    } catch (err) {
      if (err.response.data.msg === "noTestFind") {
        const alpha = new Array(length).fill({ second: 0, minute: 0 });
        await AsyncStorage.setItem("@timeData", JSON.stringify(alpha));
        await AsyncStorage.setItem(
          "@answerList",
          JSON.stringify(new Array(length).fill(0))
        );
        await AsyncStorage.setItem(
          "@drawData",
          JSON.stringify(new Array(length).fill([]))
        );
        await API.tempSave.clearTempData(params);
        navigation.navigate("DirectSolveStack", {
          screen: "DirectSolvePage",
          params: {
            testType: 2,
            testName: name,
            length: length,
            number: 0
          }
        });
      }
    } finally {
    }
  };

  const [API] = useCallback(useAPI(), []);
  const [realName, setRealName] = useState("");
  const [testData, setTestData] = useState([
    {
      label: "먼저 시험지 종류를 선택하세요.",
      value: null
    }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const opacity = useSharedValue(0);
  const backGroundOpacity = useSharedValue(0);
  const backGroundOffset = useSharedValue(0);
  const modalOffset = useSharedValue(hp(100));

  const backgroundStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: backGroundOffset.value }],
      opacity: backGroundOpacity.value
    };
  });

  const modalStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: modalOffset.value }]
    };
  });
  const hide = () => {
    setIsModalOpen(false);
  };
  const closeModal = () => {
    "worklet";
    backGroundOpacity.value = withTiming(0, { toValue: 0 }, () => {
      "worklet";
      runOnJS(hide)();
    });
    modalOffset.value = withTiming(hp(100));
    detailDown();
  };
  const openModal = () => {
    setIsModalOpen(true);
    backGroundOpacity.value = withTiming(1);
    modalOffset.value = withSpring(0);
  };
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value
    };
  });
  const animatedRef = useRef();
  const [selected, setSelected] = useState(0);
  const selectHandler = (i) => {
    setSelected(i);
    opacity.value = withSpring(1);
  };
  const [name, setName] = useState(null);
  const nextBtnHandler = () => {
    if (name === null || name === "null") {
      animatedRef.current?.swing();
      Snackbar.show({
        text: "먼저 시험지를 선택하세요.",
        duration: 1000
      });
    } else {
      navigation.navigate("WeakLearningPage1", {
        testType: selected,
        testName: name
      });
    }
  };

  const [date, setDate] = useState([]);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        const token = await AsyncStorage.getItem("@userToken");
        const deCode = jwt_decode(token);
        const params = {
          userId: deCode["cognito:username"],
          body: {}
        };
        const { data } = await API.weak.getweaktestinfo(params);
        setWeakInfo(data.testlist);
        setRealName(deCode["name"]);

      } catch (err) {
        console.log(err);
      }
    };
    useEffectAsyncFunction();
  }, []);

  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        const token = await AsyncStorage.getItem("@userToken");
        const deCode = jwt_decode(token);
        setUserName(deCode["cognito:username"]);
        const params = {
          userId: deCode["cognito:username"],
          type: selected,
          gradeType: 1,
          body: {}
        };
        const result = await API.weak.getTestName(params);
        const history = await API.weak.getweaktestinfo(params);
        const historyList = history.data.testlist;
        setDate(historyList);
        const data = result.data.testlist;
        if (data.length === 0) {
          setTestData([
            {
              label: "시험지가 없습니다.",
              value: "null"
            }
          ]);
          setName("null");
        } else {
          setTestData(data);
          setName(data[data.length - 1].value);
        }
      } catch (err) {
        console.log(err);
      }
    };
    useEffectAsyncFunction();
  }, [selected]);

  useFocusEffect(
    useCallback(() => {
      setSelected(0);
      opacity.value = withSpring(0);
      return undefined;
    }, [])
  );
  const backHandler = () => {
    navigation.navigate("Home", { screen: "DailyLearningPage0" });
  };
  const [weekInfo, setWeakInfo] = useState([
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" },
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" },
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" },
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" },
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" },
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" },
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" }
  ]);

  return (
    <Styled.body>
      <Styled.section>
        <GlobalStyled.ViewCol
          width="91%"
          height="95%"
          justifyContent="flex-start"
          style={{
            borderRadius: 10,
            shadowOffset: {
              width: 0,
              height: 0
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5
          }}
        >
          <Header
            HeaderTitle="약점학습"
            detail="약점학습을 진행할 시험지를 선택하세요."
            backHandler={backHandler}
          />
          <GlobalStyled.ViewCol
            justifyContent="flex-start"
            style={{
              flex: 1,
              backgroundColor: "white",
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10
            }}
          >
            <Styled.Title>Database 선택</Styled.Title>
            {/* <Styled.subTitle>시험지 종류를 선택해주세요.</Styled.subTitle> */}
            <Styled.selectWrapper>
              <Styled.selectBtn
                borderWidth={1 === selected ? "2px" : "1px"}
                borderColor={1 === selected ? "#5471FF" : "#BBC2CF"}
                onPress={() => {
                  selectHandler(1);
                }}
                id={1}
              >
                <Styled.selectBtnText
                  id={1}
                  color={1 === selected ? "#5471FF" : "#BBC2CF"}
                >
                  매일학습
                </Styled.selectBtnText>
              </Styled.selectBtn>
              <Styled.selectBtn
                borderWidth={2 === selected ? "2px" : "1px"}
                borderColor={2 === selected ? "#5471FF" : "#BBC2CF"}
                onPress={() => {
                  selectHandler(2);
                }}
              >
                <Styled.selectBtnText
                  id={1}
                  color={2 === selected ? "#5471FF" : "#BBC2CF"}
                >
                  약점학습
                </Styled.selectBtnText>
              </Styled.selectBtn>
              <Styled.selectBtn
                borderWidth={3 === selected ? "2px" : "1px"}
                borderColor={3 === selected ? "#5471FF" : "#BBC2CF"}
                onPress={() => {
                  selectHandler(3);
                }}
                id={3}
              >
                <Styled.selectBtnText
                  id={1}
                  color={3 === selected ? "#5471FF" : "#BBC2CF"}
                >
                  문항분석
                </Styled.selectBtnText>
              </Styled.selectBtn>
            </Styled.selectWrapper>
            <GlobalStyled.ViewCol style={{ flex: 1 }}>
              <GlobalStyled.ViewCol
                as={Animated.View}
                style={[{ flex: 1 }, animatedStyles]}
                justifyContent="flex-start"
              >
                <Styled.Title>시험지 이름</Styled.Title>
                <Styled.selectWrapper1>
                  <GlobalStyled.ViewRow
                    width="100%"
                    style={{ height: 40, marginTop: 10 }}
                  >
                    <DropDownPicker
                      style={{ width: wp(81.5), height: 40 }}
                      dropDownStyle={{ zIndex: 1 }}
                      items={testData.map((v) => {
                        return { label: v.label, value: v.value };
                      })}
                      itemStyle={{
                        justifyContent: "flex-start",
                        zIndex: 1
                      }}
                      defaultValue={name}
                      onChangeItem={(item) => setName(item.value)}
                    />
                  </GlobalStyled.ViewRow>
                  
                </Styled.selectWrapper1>
              </GlobalStyled.ViewCol>
              <Styled.BtnWrapper>
                <TouchableWithoutFeedback
                  disabled={false}
                  onPress={nextBtnHandler}
                >
                  <Styled.Btn as={Animatable.View} ref={animatedRef}>
                    <Styled.BtnText>약점문항 담기</Styled.BtnText>
                  </Styled.Btn>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={openModal}>
                  <Styled.BtnGray>
                    <Styled.BtnText>시험지 생성이력</Styled.BtnText>
                  </Styled.BtnGray>
                </TouchableWithoutFeedback>
              </Styled.BtnWrapper>
            </GlobalStyled.ViewCol>
          </GlobalStyled.ViewCol>
        </GlobalStyled.ViewCol>
      </Styled.section>
      {isModalOpen ? (
        <GlobalStyled.ViewCol
          as={Animated.View}
          style={[
            { position: "absolute", backgroundColor: "#414141" },
            backgroundStyle
          ]}
        ></GlobalStyled.ViewCol>
      ) : (
        <View></View>
      )}

      <GlobalStyled.ViewCol
        as={Animated.View}
        width="95%"
        height="550px"
        justifyContent="flex-start"
        style={[
          modalStyle,
          {
            position: "absolute",
            backgroundColor: "white",
            top: (hp(100) - 620) / 2,
            borderRadius: 10
          }
        ]}
      >
        <GlobalStyled.ViewCol height="50px" justifyContent="space-around">
          <Text
            style={{
              color: "#1B2C49",
              fontSize: 18,
              width: "100%",
              paddingLeft: 20
            }}
          >
            {realName}님의 시험지 생성 이력입니다.
          </Text>
          <Text
            style={{
              color: "#A4B6D6",
              fontSize: 16,
              width: "100%",
              paddingLeft: 20
            }}
          >
            최근 7개의 시험지만 확인할 수 있습니다.
          </Text>
        </GlobalStyled.ViewCol>

        <Table
          weekInfo={weekInfo}
          tableOffsetStyles={tableOffsetStyles}
          detailOffsetStyles={detailOffsetStyles}
          detailDown={detailDown}
          detailUp={detailUp}
          solveNowHandler={solveNowHandler}
          gradeHandler={gradeHandler}
          navigation={navigation}
          type={2}
        />
        <GlobalStyled.ViewRow
          as={TouchableOpacity}
          style={{borderTopWidth:1, borderColor:"#B2B8C2", flex:1 }}
          onPress={closeModal}
        >
          <Text style={{ color: "#5E9EFF", fontSize: 20, fontWeight: "bold" }}>
            확인
          </Text>
        </GlobalStyled.ViewRow>
      </GlobalStyled.ViewCol>
    </Styled.body>
  );
};

export { WeakLearningPage0 };
